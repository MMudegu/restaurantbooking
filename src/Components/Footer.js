import "../Styling/Footer.css"
import Logo from "../Resources/Logo .svg"
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigation } from "./HeaderSection";

const DoormatNav = ()=>{
    return (
       <div className="DoormatNav">
            <Link to="/">Home</Link>
            <a href="#About" onClick={Navigation("About")}>About Us</a>
            <Link to="/Menu">Menu</Link>
            <Link to="/OrderOnline">Order Online</Link>
            <Link to="/Reservation">Reserve a Table</Link>
        </div>
    )
}

const Contacts = ()=>{

    return (
        <address className="Contacts">
            <a href="emailto:info@LittleLemon.com">E-mail</a>
            <a href="tel:+13454979">(311) 555-2368</a>
            <a href="#Address" onClick={Navigation("Address")}>Address</a>
        </address>
    )
}

const Socials= ()=>{
     return (
        <div className="FooterSocials">
            <a href="https://Facebook.com"><FaFacebook/></a>
            <a href="https://Instagram.com"><FaInstagram/></a>
            <a href="https://Twitter.com"><FaTwitter/></a>
            <a href="https://Discord.com"><FaDiscord/></a>
        </div>
     )
}

export default function Footer(){
    return(
        <footer className="Footer">
            <img src={Logo} className="FooterImage"/>
            <span className="LargeScreenSpacing"><h2>Navigation</h2><DoormatNav/></span>
            <span className="LargeScreenSpacing"><h2>Contacts</h2><Contacts/></span>
            <span><h2>Socials</h2><Socials/></span>
        </footer>
    )
}