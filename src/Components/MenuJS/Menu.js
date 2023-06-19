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
import { useEffect, useState } from "react"

const HeaderWithCart=()=>{
    const {totalDishesSelected} = useMenuItemsContext();
    return(
        <header className="HeaderWithCart">
            <nav className="SimpleHeaderNav">   
                <Link to="/"><FaArrowLeft className="LeftArrow"/>Home</Link>
            </nav>
            <img src={Logo} alt="Logo"/>
            <nav className="CartContainer">
                <Link to="/OrderOnline" className="CartCounterLink">
                <img src={Cart}/><div className="CartCounter">{totalDishesSelected}</div></Link>
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
    const {noOfItemSelected,setTotalDishesSelected,setTypeOfFood} = useMenuItemsContext();
  
    //This function is used to retrieve the food items selected by the user and in what quantity from the AddItemToCart component
    const RetrieveDish= ()=> {  
        //These 2 funstions split the keys of food selected from the number of times they have been selected.
        //The noOfItemSelected is set from the AddItemToCart
        const tempKeys = noOfItemSelected.map(el=>el.split(' ',2)).map(el=>Number(el[0]));
        const tempValues = noOfItemSelected.map(el=>el.split(' ',2)).map(el=>Number(el[1]));

        //This function filters the duplicate keys to create an array of single unique keys representing the different types food selected
        const selectedFoodItemsKeys = tempKeys.filter((element,index,array)=>array.lastIndexOf(element)===index);
        setTypeOfFood(selectedFoodItemsKeys);

        //Has the current key selected which is synonymous with the current food item picked
        const currentKeySelected = selectedFoodItemsKeys.slice(-1);
        
        //These methods find the last indices for all food items selected ie from tempKeys and then maintains the most recent one in the variable 
        //currentKeyIndex. The index also corresponds to total number of food items less one
        const currentKeyIndex = (selectedFoodItemsKeys.map((el,index)=>tempKeys.lastIndexOf(el))).slice(-1);  
        const food = Number(currentKeyIndex)+1;
        setTotalDishesSelected(food);

        //The current number of times the selected food(ie Key) has been ordered in terms of volume
        const volumeOfCurrentKey =tempValues[currentKeyIndex];

        //console.log(`Current Key: ${currentKeySelected}    `,`Current Key Index: ${currentKeyIndex} `,'-------',`Number of food items: ${volumeOfCurrentKey} `)
     }

    useEffect(
        ()=>{
                window.addEventListener('click',()=>RetrieveDish());
                return window.removeEventListener('click',()=>RetrieveDish());
        }
    ,[noOfItemSelected]); 
    return(
        <>  
            <HeaderWithCart/>
            <main className="MenuMain">
                <div className="MenuBody">
                <h1 id="Dish">Dish</h1>
                <h1 id="Price">Price</h1>
                <div id="MenuCard">{dishes.map( ({key,category,name,price,description})=><MenuItems Category={category} Name={name} Price={price} Description={description} dbKey={key}/>)}
                </div>
                <Link to='/OrderOnline'>Order Now!</Link>
                </div>
            </main>
            <Footer/>
        </>
    )
}