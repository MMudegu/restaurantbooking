import "../Styling/HeroSection.css";
import RestaurantFood from "../Resources/restauranfood.jpg"
import { Link } from "react-router-dom";

export default function HeroSection(){
    return(
        <main className="Hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
               Lorem ipsum dolor sit amet, <br/>
               consectetur adipiscing elit, <br/>
               sed do eiusmod tempor incididunt <br/>
               ut labore et dolore magna aliqua.<br/>
            </p>
            <Link to="/Reservations" className="ReserveButton">Reserve a table</Link>
            <img src={RestaurantFood} className="HeroImage" alt="Sample Dish"/>
        </main>
    )
}