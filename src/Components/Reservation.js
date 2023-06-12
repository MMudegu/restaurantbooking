import "../Styling/Reservation.css"
import "../Styling/SimpleHeader.css"
import Footer from "./Footer"
import Logo from "../Resources/Logo .svg"
import {Link} from "react-router-dom"
import {FaArrowLeft} from "react-icons/fa"
import { useState } from "react"

export const SimpleHeader = ()=>{
    return(
        <header className="SimpleHeader">
            <nav>
                <FaArrowLeft className="LeftArrow"/>
                <Link to="/">Home</Link>
            </nav>
            <img src={Logo} alt="Logo"/>
        </header>
    );
}

export default function Reservation(){
    const [noOfGuests,setNoOfGuests] = useState(14);
    return(
        <>
        <SimpleHeader/>
        <main>
            <form className="Form">
                <h1>Reserve a table</h1>
                <fieldset className="UserDetails">
                    <label htmlFor="FirstName">First Name:</label><input type="text" id="FirstName" name="firstName" placeholder="John" required></input>
                    <label htmlFor="LastName">Last Name:</label><input type="text" id="LastName" name="lastName" placeholder="Doe" required></input>
                    <label htmlFor="Email">Email Address:</label><input type="email" id="Email" name="email" placeholder="JohnDoe@example.com" required></input>
                    <label htmlFor="Telephone">Phone Number:</label><input type="tel" id="Telephone" name="telephone" placeholder="+1 254 311 542" required></input>
                </fieldset>
                <fieldset className="TypeOfOccasion">
                    <label htmlFor="BookingOccasion">Type of Reservation: </label>
                    <input list="Occasion" id="BookingOccasion" name="bookingOccasion" placeholder="Birthday" required/>
                    <datalist id="Occasion">
                        <option value="Birthday"/>
                        <option value="Anniversary"/>
                        <option value="Engagement"/>
                        <option value="Graduation"/>
                    </datalist>
                </fieldset>
                <fieldset className="ReservationDateAndTime">
                    <div className="Date">
                        <label htmlFor="UserDateInput">Pick a Date:</label>
                        <input type="date" id="UserDateInput" name="userDateInput" required/>
                    </div>
                    
                    <div className="Time">
                        <label htmlFor="UserTimeInput">Pick the Time:</label>
                        <span id="LabelForHrsAndMins">
                            <label htmlFor="Hours" id="Hours">HRS:</label>
                            <label htmlFor="Mins" id="Mins">MINS:</label>
                            <label htmlFor="AmOrPm" id="AmOrPm">AM/PM:</label>
                        </span>
                        <span id="HrsAndMins">
                            <input type="number" min={0} max={12} id="Hours" name="Hrs" required/>   
                            <input type="number" min={0} max={12} id="Mins" name="mins" required/>
                            <select name="amOrPm" id="AmOrPm">
                                <option value="am">AM</option>
                                <option value="pm">PM</option>
                            </select>
                        </span>
                    </div>
                    <div className="PrivateRoomRadio">
                        <p>Private room? :</p>
                        <input type="radio" id="PrivateRoomYes" name="privateRoom" value="yes"/>
                        <label htmlFor="PrivateRoomYes">Yes</label> 
                        <input type="radio" id="PrivateRoomNo" name="privateRoom" value="no" checked/>
                        <label htmlFor="PrivateRoomNo">No</label>
                    </div>
                </fieldset>
                <fieldset className="NumberOfGuests">
                    <label htmlFor="NoOfGuests">Choose the number of guests</label>
                    <p>{noOfGuests}</p>
                    <input type="range" id="NoOfGuests" name="noOfGuests" min={1} max={14} onChange={(e)=>setNoOfGuests(e.target.value)}/>
                </fieldset>
                <fieldset className="Comments">
                    <label htmlFor="Instructions">Additional Instructions</label>
                    <textarea name="instructions" id="Instructions" rows={15} required/>
                </fieldset>
                <button type="submit" className="ReserveButton">Submit Reservation</button>
            </form>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}