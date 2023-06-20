import { useState } from 'react';
import '../Styling/AccountSetup.css';

const PaymentField = ({paymentType})=>{
    const BankCard = ()=>(
    <fieldset className='BillingInformation'>

        <label htmlFor='Country'>Country</label>
        <input id='Country' name='country' type='text' placeholder='Kenya' required/>

        <label htmlFor='CardNumber'>Credit Card Number</label>
        <input id='CardNumber' name='cardNumber' type='number' placeholder='xxxx xxxx xxxx xxxx' required/>

        <label htmlFor='PaymentType'>Payment Type</label>
        <input id='PaymentType' name='paymentType' list='VendorDataList' type='text' placeholder='VISA' required/>
        <datalist id='VendorDataList'>
            <option value='VISA'/>
            <option value='MASTERCARD'/>
            <option value='AMERICAN EXPRESS'/>
        </datalist>

        <label htmlFor='CardExpirationYear'>Expiration Date</label>
        <div className='ExpirationDate'>
            <input id='CardExpirationYear' name='cardExpirationYear' type='number' min={2023} placeholder='Year eg 2023' required/>
            <input id='CardExpirationMonth' name='cardExpirationMonth' type='number' min={1} max={12} placeholder='Month' required/>
            <input id='CardCVV' name='cardCVV' type='number' min={3} max={4} placeholder='CVV' required/>
        </div>

        <label htmlFor='BillingAddressOne'>Billing Address Line 1</label>
        <input id='BillingAddressOne' name='billingAddressOne' type='text' placeholder='123 First Street' required/>

        <label htmlFor='BillingAddressTwo'>Billing Address Line 2</label>
        <input id='BillingAddressTwo' name='billingAddressTwo' type='text' placeholder='123 First Street' required/>

        <label htmlFor='CustomerCity'>City</label>
        <input id='CustomerCity' name='customerCity' type='text' placeholder='Miami' required/>

        <label htmlFor='CustomerState'>State</label>
        <input id='CustomerState' name='customerState' type='text' placeholder='Florida' required/>

        <label htmlFor='CustomerZipCode'>Zip Code</label>
        <input id='CustomerZipCode' name='customerZipCode' type='number' placeholder='33660' required/>
    </fieldset>)

{console.log(paymentType)}

    const OnlinePayment = ()=>(
        <a className='PaypalLink'>Login to Paypal</a>
    )

    return paymentType? <BankCard/> : <OnlinePayment/>;
}

export default function AccountSetup(){
    const[choosePaymentPlatform,setChoosePaymentPlatform] = useState(true);

    return <form className='AccountSetupContainer'>
        <h1>ACCOUNT INFORMATION</h1>
        <fieldset className='AccountInformation'>

            <label htmlFor='FirstName'>First Name</label>
            <input id='FirstName' name='firstName' type='text' placeholder='John' required/>

            <label htmlFor='LastName'>Last Name</label>
            <input id='LastName' name='lastName' type='text' placeholder='Doe' required/>

            <label htmlFor='EmailAddress'>E-mail Address</label>
            <input id='EmailAddress' name='emailAddress' type='email' placeholder='Johndoe@example.com' required/>

            <label htmlFor='Telephone'>Phone Number</label>
            <input id='Telephone' name='telephone' type='tel' placeholder='+1 254 311 542' required/>

            <label htmlFor='Username'>Username</label>
            <input id='Username' name='username' type='text' required/>

            <label htmlFor='Password'>Account Password</label>
            <input id='Password' name='password' type='password' required minLength={8}/>

            <label htmlFor='PasswordRepeat'>Retype Account Password</label>
            <input id='PasswordRepeat' name='passwordRepeat' type='password' required minLength={8}/>
        </fieldset>

        <h1>BILLING INFORMATION</h1>
        <fieldset className='RadioBtns'>
            <input id='RadioTrue' name='radioChoice' type='radio' value={true} onClick={e=>setChoosePaymentPlatform(true)} checked/>
            <label htmlFor='RadioTrue'>Credit/Debit Card</label>

            <input id='RadioFalse' name='radioChoice' type='radio' value={false} onClick={e=>setChoosePaymentPlatform(false)}/>
            <label htmlFor='RadioFalse'>Paypal</label>
        </fieldset>
        
        <PaymentField paymentType={choosePaymentPlatform}/> 

        <button type='submit'>Submit Information</button>
    </form>
}