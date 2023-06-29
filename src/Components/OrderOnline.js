import { Link } from "react-router-dom"
import "../Styling/OrderOnline.css"
import Logo from '../Resources/Logo .svg'
import {FaArrowLeft} from 'react-icons/fa'
import Footer from '../Components/Footer'
import { useForm } from "react-hook-form"
import { useMenuItemsContext } from "../Context/MenuItemsContext"
import { useEffect, useState } from "react"

const CartHeader = ()=>{
    return(
        <header className="CartHeader">
            <div className="Home"><FaArrowLeft/><Link to='/'>Home</Link></div>
            <img src={Logo}/>
            <Link to='/Menu'>Menu</Link>
        </header>
    )
}

const FilterFoodItems= ()=>{
    const {dishes,typeOfFoodSelected,totalAmount} = useMenuItemsContext();
    const [filteredDishes,setFilteredDishes] = useState([]);
    let tempElement;
    useEffect(()=>{
        setFilteredDishes(dishes.filter((element,index)=>{
            tempElement = element.key
            return typeOfFoodSelected.some((el)=> el===tempElement);
        }));
    },[typeOfFoodSelected]); 

    return (
        <div className="MealChoices">
           {filteredDishes.length > 0?
                filteredDishes.map((element)=>
                    <div>
                        <p><strong>{element.name}</strong></p>
                        <p><em>{element.description}</em></p>
                    </div>
                )
                
                :<p><strong>Please Select A Meal On The Menu</strong></p>
            }
            <h2>{`Total Price (USD): $ ${totalAmount}`}</h2>
            <button type="reset" className="ClearCart" onClick={()=>{window.location.reload()}}>Clear Cart</button>
        </div>
    )
}


export default function OrderOnline(){
    const {typeOfFoodSelected} = useMenuItemsContext();
    const form = useForm();
    const {register,handleSubmit,reset} = form;
    let mealNotSelected;
    const [enableCustomAddress,setEnableCustomAddress] = useState(false);

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if(typeOfFoodSelected.length > 0){
        mealNotSelected = false;
    }
    else{
        mealNotSelected=true;
    }

    return(
        <>
            <CartHeader/>
            <main className="OrderOnlineMain">
                <form className="OrderForm" onSubmit={handleSubmit((data,event)=>{
                    localStorage.setItem('userOrder',JSON.stringify(data));
                    reset();
                    alert(`Thank you for your order ${userDetails.firstName}. You will receive an email confirmation at ${userDetails.emailAddress} with all the details. Our rider will reach you through ${userDetails.telephone} when your order is ready. Enjoy!!`);
                    window.location.reload();
                })}>
                    <fieldset className="Order PaymentDetails">
                        <h1>PAYMENT DETAILS</h1>
                        <div className="FullName">
                            <label htmlFor="Name">Full Name:</label>
                            <h2 id="Name">{` ${userDetails.firstName} ${userDetails.lastName}`}</h2>
                        </div>
                        <div className="TypeOfPayment">
                            <label htmlFor="PaymentMethod">Payment Method:</label>
                            <select id="PaymentMethod" {...register('paymentMethod')}>
                                <option value='Credit card'>Credit card</option>
                                <option value='Debit card'>Debit card</option>
                                <option value='Paypal'>Paypal</option>
                                <option value='Cash on delivery'>Cash on delivery</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="Order DeliveryDetails">
                        <h1>DELIVERY DETAILS</h1>
                        <div>
                            <input id='BillingAddressOne' type="radio" value={"BillingAddressOne"} {...register('billingAddressOne')} name="Address" defaultChecked onClick={()=>setEnableCustomAddress(false)}/>
                            <label htmlFor="BillingAddressOne">Billing Address One</label>
                        </div>
                        <div>
                            <input id='BillingAddressTwo' type="radio" value={"BillingAddressTwo"} {...register('billingAddressTwo')} name="Address" onClick={()=>setEnableCustomAddress(false)}/>
                            <label htmlFor="BillingAddressTwo">Billing Address Two</label>
                        </div>
                        <div>
                            <input id="CustomAddress" type="radio" value={'CustomAddress'} {...register('customBillingAddress')} name="Address" onClick={()=>setEnableCustomAddress(true)}/>
                            <label htmlFor="CustomAddress">Custom Address</label>
                            {enableCustomAddress?<input type="text"/>:null}
                        </div>
                    </fieldset>
                    <fieldset className="Order MealChoices">
                        <h1>Meal Choices</h1>
                        <div><FilterFoodItems/></div>
                    </fieldset>
                    <fieldset className="Order Instructions">
                        <h2>Additional Instructions</h2>
                        <textarea rows={25} {...register('orderComments')}/>
                    </fieldset>
                    <button type="submit" className="OrderButton" disabled={mealNotSelected}>Order Now !</button>
                </form>
            </main>
            <Footer/>
        </>
    )
}