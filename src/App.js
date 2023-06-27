import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Menu from "./Components/MenuJS/Menu";
import Reservation from "./Components/Reservation";
import OrderOnline from "./Components/OrderOnline";
import Login from "./Components/Login/Login";
import MenuItemsProvider from "./Context/MenuItemsContext";
import AccountSetup from "./Components/AccountSetup";
import LoginForm from "./Components/Login/LoginForm";


export default function App(){
    return(
        <>
            <MenuItemsProvider>
                <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Reservation" element={<Reservation/>}/>
                <Route path="/OrderOnline" element={<OrderOnline/>}/>
                <Route path="/Login" element={<Login/>}>
                    <Route index element ={<LoginForm/>}/>
                    <Route path="AccountSetup" element={<AccountSetup/>}/>
                    <Route path="LoginForm" element ={<LoginForm/>}/>
                </Route>          
                </Routes>
            </MenuItemsProvider>
        </>
    )
}