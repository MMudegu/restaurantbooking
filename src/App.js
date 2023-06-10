import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";
import OrderOnline from "./Components/OrderOnline";
import Login from "./Components/Login";

export default function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Reservation" element={<Reservation/>}/>
            <Route path="/OrderOnline" element={<OrderOnline/>}/>
            <Route path="/Login" element={<Login/>}/>          
        </Routes>

        <LandingPage/>
        </>
    )
}