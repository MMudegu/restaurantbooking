import "../Styling/HeaderSection.css";
import Logo from "../Resources/Logo .svg";
import { Link } from "react-router-dom";
import {FaAngleUp, FaBars, FaDiscord, FaFacebook, FaHome, FaInstagram, FaTwitter} from "react-icons/fa";
import { useEffect, useState } from "react";

//This function scrolls to a specific area on a web page
export const Navigation =(section)=>{
    const element = document.getElementById(section);
    if(element){
        element.scrollIntoView({behavior:"smooth",block:"start"});
    }
}

const Mobile =()=>{
    let [hambugerMenuClicked,setHamburgerMenuClicked]= useState(false);
    const isUserLoggedIn = JSON.parse(sessionStorage.getItem('userLoggedIn'));

    const handleClick=(e)=>{
        if(hambugerMenuClicked){
            e.preventDefault();
            setHamburgerMenuClicked(false);
        }
        else if(!hambugerMenuClicked){
            e.preventDefault();
            setHamburgerMenuClicked(true);
        }
    };

    const HambugerMenu = ()=>{
        return(
                <nav className="MobileNavigation">
                    <Link to="/"><FaHome style={{marginRight:'0.5em',marginTop:'0.5em'}}/>Home</Link>
                    <a href="#About" onClick={Navigation("About")}>About Us</a>
                    <Link to="Menu">Menu</Link>
                    {isUserLoggedIn?<Link to="Reservation">Reservation</Link>:<Link to="Login">Reservation</Link>}
                    {isUserLoggedIn?<Link to="OrderOnline">Order Online</Link>:<Link to="Login">Order Online</Link>}
                    <Link to="Login">Login</Link>
                    <FaAngleUp onClick={handleClick} className="AngleUp"/>
                </nav>
        );
    }

    return(
            <header>
                <div className="SocialMediaIcons">
                    <a href="https://Facebook.com"><FaFacebook/></a>
                    <a href="https://Instagram.com"><FaInstagram/></a>
                    <a href="https://Twitter.com"><FaTwitter/></a>
                    <a href="https://Discord.com"><FaDiscord/></a>
                </div>
                <div className="HeaderLogo"><img src={Logo} alt="Little Lemon Logo"/></div>
                {
                    hambugerMenuClicked?<div className="HamburgerMenu"><HambugerMenu/></div>:<div className="HamburgerIcon"><FaBars onClick={handleClick}/></div>
                }
            </header>
    );
}

const Desktop =()=>{
    const isUserLoggedIn = JSON.parse(sessionStorage.getItem('userLoggedIn'));

    return(
        <header>
            <div className="SocialMediaIcons">
                <a href="https://Facebook.com"><FaFacebook/></a>
                <a href="https://Instagram.com"><FaInstagram/></a>
                <a href="https://Twitter.com"><FaTwitter/></a>
                <a href="https://Discord.com"><FaDiscord/></a>
            </div>
            <div className="HeaderLogo"><img src={Logo} alt="Little Lemon Logo"/></div>
                <nav className="Navigation">
                    <Link to="/">Home</Link>
                    <a href="#About" onClick={Navigation("About")}>About Us</a>
                    <Link to="Menu">Menu</Link>
                    {isUserLoggedIn?<Link to="Reservation">Reservation</Link>:<Link to="Login">Reservation</Link>}
                    {isUserLoggedIn?<Link to="OrderOnline">Order Online</Link>:<Link to="Login">Order Online</Link>}
                    <Link to="Login">Login</Link>
                </nav>
        </header>
    );
}

export default function HeaderSection(){
    let [screenWidth,setScreenWidth] = useState();

    //This function listens for screen size so that it is possible to render different header style for mobile devices
    useEffect((e)=>{
        const handleResize =()=>setScreenWidth(window.innerWidth);
        window.addEventListener('resize',handleResize());

        return window.removeEventListener('resize',handleResize());
    },[])

    return screenWidth > 774?<Desktop/>:<Mobile/>
}
