import "../Styling/Reservation.css"
import "../Styling/SimpleHeader.css"
import Footer from "./Footer"
import Logo from "../Resources/Logo .svg"
import {Link} from "react-router-dom"
import {FaArrowLeft} from "react-icons/fa"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import {changeBorderColor} from './AccountSetup'


export const SimpleHeader = ()=>{
    return(
        <header className="SimpleHeader">
            <nav className="SimpleHeaderNav">  
                <Link to="/"><FaArrowLeft className="LeftArrow"/>Home</Link>
            </nav>
            <img src={Logo} alt="Little lemon logo"/>
        </header>
    );
}

export default function Reservation(){
    const schema = yup.object({
        firstName: yup.string('Please enter a valid name').required('This field is required'),
        lastName: yup.string('Please enter a valid name').required('This field is required'),
        email: yup.string().email('Please enter a valid email address').required('This field is required'),
        telephone: yup.string().required('This field is required. It enables easier communication with our reception.'),
        bookingOccasion:yup.string().required('This field is required'),
        userDateInput:yup.string().required('This field is required'),
        hrs:yup.number().typeError('Please enter valid hours').moreThan(0,'Please enter valid hours').lessThan(12,'Please enter valid hours'),
        mins:yup.number().typeError('Please enter valid minutes').lessThan(59,'Please enter valid minutes'),
        noOfGuests:yup.number().required('Pick number of guests').lessThan(16)
    });

    const form = useForm({mode:'onTouched',resolver:yupResolver(schema)});
    const {register,formState,handleSubmit,reset,watch} = form;
    const {errors} = formState;
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
 
    return(
        <>
        <SimpleHeader/>
        <main>
            <form className="Form" onSubmit={handleSubmit(data=>{
                    localStorage.setItem('tableBookingInfo',JSON.stringify(data));
                    reset();
                    alert(`Thank you for your reservation ${userDetails.firstName}. You will receive an email confirmation at ${userDetails.emailAddress} with all the details. A remainder will also be sent to you 6 hours before the reservation time. Enjoy!!`);
                    window.location.reload();
                })}>
                <h1>Reserve a table</h1>
                <fieldset className="UserDetails">
                    <label htmlFor="FirstName">First Name:</label>
                    <input type="text" id="FirstName" {...register('firstName',{onBlur:()=>errors.firstName?changeBorderColor('FirstName'):null})} placeholder="John"/>
                    <p className="Errors">{errors.firstName?.message}</p>

                    <label htmlFor="LastName">Last Name:</label>
                    <input type="text" id="LastName" {...register('lastName',{onBlur:()=>errors.lastName?changeBorderColor('LastName'):null})} placeholder="Doe"/>
                    <p className="Errors">{errors.lastName?.message}</p>

                    <label htmlFor="Email">Email Address:</label>
                    <input type="email" id="Email" {...register('email',{onBlur:()=>errors.email?changeBorderColor('Email'):null})} placeholder="JohnDoe@example.com"/>
                    <p className="Errors">{errors.email?.message}</p>

                    <label htmlFor="Telephone">Phone Number:</label>
                    <input type="tel" id="Telephone" {...register('telephone',{onBlur:()=>errors.telephone?changeBorderColor('Telephone'):null})} placeholder="+1 254 311 542"/>
                    <p className="Errors">{errors.telephone?.message}</p>

                </fieldset>

                <fieldset className="TypeOfOccasion">
                    <label htmlFor="BookingOccasion">Type of Reservation: </label>
                    <input list="Occasion" id="BookingOccasion" {...register('bookingOccasion',{onBlur:()=>errors.bookingOccasione?changeBorderColor('BookingOccasion'):null})} placeholder="Casual"/>
                    <datalist id="Occasion">
                        <option value="Birthday"/>
                        <option value="Anniversary"/>
                        <option value="Engagement"/>
                        <option value="Graduation"/>
                        <option value="Casual"/>
                    </datalist>
                    <p className="Errors" style={{padding:'0 0 0 10px'}}>{errors.bookingOccasion?.message}</p>
                </fieldset>

                <fieldset className="ReservationDateAndTime">
                    <div className="Date">
                        <label htmlFor="UserDateInput">Pick a Date:</label>
                        <input type="date" {...register('userDateInput',{onBlur:()=>errors.userDateInput?changeBorderColor('UserDateInput'):null})} id="UserDateInput"/>
                        <p className="Errors">{errors.userDateInput?.message}</p>
                    </div>
                    <div className="Time">
                        <p>Pick the Time:</p>
                        <span>
                            <label htmlFor="Hours">HRS:</label>
                            <input type="number" id="Hours" {...register('hrs',{onBlur:()=>errors.hrs?changeBorderColor('Hours'):null})}/> 
                            <p className="Errors">{errors.hrs?.message}</p>  
                        </span>
                        <span>
                            <label htmlFor="Mins">MINS:</label>
                            <input type="number" id="Mins" {...register('mins',{onBlur:()=>errors.mins?changeBorderColor('Mins'):null})}/>
                            <p className="Errors">{errors.mins?.message}</p>
                        </span>
                        <select name="amOrPm" id="AmOrPm">
                                <option value="am">AM</option>
                                <option value="pm">PM</option>
                            </select>
                    </div>
                    <div className="PrivateRoomRadio">
                        <p>Private room? :</p>
                        <input type="radio" id="PrivateRoomYes" {...register('privateRoom')} value="yes"/>
                        <label htmlFor="PrivateRoomYes">Yes</label> 
                        <input type="radio" id="PrivateRoomNo" {...register('privateRoom')} value="no" defaultChecked/>
                        <label htmlFor="PrivateRoomNo">No</label>
                    </div>
                </fieldset>
                <fieldset className="NumberOfGuests">
                    <label htmlFor="NoOfGuests">Choose the number of guests (The default is One)</label>
                    <p>{watch('noOfGuests')}</p>
                    <input type="range" id="NoOfGuests" {...register('noOfGuests')} min={1} max={15} defaultValue={1}/>
                </fieldset>
                <fieldset className="Comments">
                    <label htmlFor="Instructions">Additional Instructions</label>
                    <textarea {...register('instructions',{onBlur:()=>errors.instructions?changeBorderColor('Instructions'):null})} id="Instructions" rows={15}/>
                    <p className="Errors">{errors.instructions?.message}</p>
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