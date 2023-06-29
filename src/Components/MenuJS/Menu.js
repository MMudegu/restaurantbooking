import "../../Styling/MenuCSS/Menu.css"
import '../../Styling/MenuCSS/MenuCard.css'
import Footer from "../Footer"
import {FaArrowLeft} from "react-icons/fa"
import {Link} from "react-router-dom"
import Logo from '../../Resources/Logo .svg'
import Cart from "../../Resources/Basket.svg"
import "../../Styling/MenuCSS/HeaderWithCart.css"
import AddItemToCart from './AddItemToCart'
import { useMenuItemsContext } from "../../Context/MenuItemsContext"
import { useEffect} from "react"

const HeaderWithCart=()=>{
    const {totalDishesSelected} = useMenuItemsContext();
    const isUserLoggedIn = JSON.parse(sessionStorage.getItem('userLoggedIn'));
    return(
        <header className="HeaderWithCart">
            <nav className="SimpleHeaderNav">   
                <Link to="/"><FaArrowLeft className="LeftArrow"/>Home</Link>
            </nav>
            <img src={Logo} alt="This is the little lemon logo"/>
            <nav className="CartContainer">
                {isUserLoggedIn?
                    <Link to="/OrderOnline" className="CartCounterLink">
                    <img src={Cart} alt="This is a shopping cart logo"/><div className="CartCounter">{totalDishesSelected.reduce((accumulator,element)=>accumulator+element,0)}</div></Link>:

                    <Link to="/Login" className="CartCounterLink">
                    <img src={Cart} alt="This is a shopping cart logo"/><div className="CartCounter">{totalDishesSelected.reduce((accumulator,element)=>accumulator+element,0)}</div></Link>                    
                }
            </nav>
        </header>
    );
}

//This template is used to render the items of the body of the menu page
const MenuItems = ({dbKey,Category,Name,Price,Description})=>{
    return (
        <main className="MenuContainer">
            <h1 id="MenuCategory">{Category}</h1>
            <h2 id="MenuName">{Name}</h2>
            <h2 id="MenuPrice">$ {Price}</h2>
            <div id='AddItemToCart'><AddItemToCart dbKey={dbKey}/></div>
            <p id="MenuDescription">{Description}</p>
        </main>
    );
}

//This is the parent component of the menu page
export default function Menu(){
    const {dishes} = useMenuItemsContext();
    const {noOfItemSelected,setTotalDishesSelected,setTypeOfFoodSelected,setTotalAmount} = useMenuItemsContext();
    const isUserLoggedIn = JSON.parse(sessionStorage.getItem('userLoggedIn'));
  
    //This function is used to retrieve the food items selected by the user and in what quantity from the AddItemToCart component
    const RetrieveDish= ()=> {  
        let indexOfUniqueKeys = [];
        let i;
        //These 2 funstions split the keys of food selected from the number of times they have been selected.
        //The noOfItemSelected is set from the AddItemToCart
        const tempKeys = noOfItemSelected.map(el=>el.split(' ',2)).map(el=>Number(el[0]));
        const tempValues = noOfItemSelected.map(el=>el.split(' ',2)).map(el=>Number(el[1]));

        //This function filters the duplicate keys to create an array of single unique keys representing the different types food selected
        //It also stores their indices in a variable for them to be used to filter the values
        //i = 0 is a dummy used because null throws an error from ESLint
        const selectedFoodItemsKeys = tempKeys.filter((element,index,array)=>
        {array.lastIndexOf(element)===index? indexOfUniqueKeys[index] = index: i=0;
            return array.lastIndexOf(element)===index;
        });

        setTypeOfFoodSelected(selectedFoodItemsKeys);

        //This function filters the unique values that correspond to indices of the unique keys
        const selectedFoodItemsValues = tempValues.filter((element,index,array)=>index === indexOfUniqueKeys[index])

        setTotalDishesSelected(selectedFoodItemsValues);

        let tempKey,arrayOfTotalPrice,elementMatchingTheKey;

        arrayOfTotalPrice = selectedFoodItemsKeys.map((element,index)=>{
            tempKey = element;
            elementMatchingTheKey = dishes.filter((el)=>el.key===tempKey);
            return selectedFoodItemsValues[index] * elementMatchingTheKey[0].price;
        });

        setTotalAmount(arrayOfTotalPrice.reduce((accumulator,element)=>accumulator+element,0));
     }

    useEffect(
        ()=>{
                window.addEventListener('click',()=>RetrieveDish());
                return window.removeEventListener('click',()=>RetrieveDish());
        },[noOfItemSelected]); 
    return(
        <>  
            <HeaderWithCart/>
            <main className="MenuMain">
                <div className="MenuBody">
                <h1 id="Dish">Dish</h1>
                <h1 id="Price">Price</h1>
                <div id="MenuCard">{dishes.map( ({key,category,name,price,description})=><MenuItems Category={category} Name={name} Price={price} Description={description} dbKey={key} key={key}/>)}
                </div>
                {isUserLoggedIn?<Link to='/OrderOnline'>Order Now!</Link>:<Link to='/Login'>Order Now!</Link>}
                </div>
            </main>
            <Footer/>
        </>
    )
}