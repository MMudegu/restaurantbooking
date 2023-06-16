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

const HeaderWithCart=()=>{
    const {noOfItemSelected} = useMenuItemsContext();
    return(
        <header className="HeaderWithCart">
            <nav className="SimpleHeaderNav">   
                <Link to="/"><FaArrowLeft className="LeftArrow"/>Home</Link>
            </nav>
            <img src={Logo} alt="Logo"/>
            <nav className="CartContainer">
                <Link to="/OrderOnline" className="CartCounterLink">
                <img src={Cart}/><div className="CartCounter">{noOfItemSelected}</div></Link>
            </nav>
        </header>
    );
}

const MenuItems = ({Category,Name,Price,Description})=>{
    return (
        <main className="MenuContainer">
            <h1 id="MenuCategory">{Category}</h1>
            <h2 id="MenuName">{Name}</h2>
            <h2 id="MenuPrice">$ {Price}</h2>
            <div id='AddItemToCart'><AddItemToCart/></div>
            <p id="MenuDescription">{Description}</p>
        </main>
    );
}

export default function Menu(){
    const {dishes} = useMenuItemsContext();
    return(
        <>  
            <HeaderWithCart/>
            <main className="MenuMain">
                <div className="MenuBody">
                <h1 id="Dish">Dish</h1>
                <h1 id="Price">Price</h1>
                <div id="MenuCard">{dishes.map(({category,name,price,description})=><MenuItems Category={category} Name={name} Price={price} Description={description}/>)}</div>
                </div>
            </main>
            <Footer/>
        </>
    )
}