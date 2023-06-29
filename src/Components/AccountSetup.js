import { useState } from 'react';
import '../Styling/AccountSetup.css';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Used to highlight the input once validation fails
export const changeBorderColor=(id='Country')=>document.getElementById(id).style.border = 'solid red';

//This component renders the different payment methods ie debit, credit or paypal registration
const PaymentField = ({paymentType,form})=>{
    const {register,formState} = form;
    const {errors} = formState; 

    const BankCard = ()=>(
            <fieldset className='BillingInformation'>

                <label htmlFor='Country'>Country</label>
                <input id='Country' {...register('country',{onBlur:()=>errors.country?changeBorderColor('Country'):null})} type='text' placeholder='Kenya'/>
                <p className='Errors'>{errors.country?.message}</p>

                <label htmlFor='CardNumber'>Credit Card Number</label>
                <input id='CardNumber' {...register('cardNumber',{onBlur:()=>errors.cardNumber?changeBorderColor('CardNumber'):null})} type='number' placeholder='xxxx xxxx xxxx xxxx'/>
                <p className='Errors'>{errors.cardNumber?.message}</p>

                <label htmlFor='PaymentType'>Payment Type</label>
                <input id='PaymentType' {...register('paymentType',{onBlur:()=>errors.paymentType?changeBorderColor('PaymentType'):null})} list='VendorDataList' type='text' placeholder='VISA'/>
                <datalist id='VendorDataList'>
                    <option value='VISA'/>
                    <option value='MASTERCARD'/>
                    <option value='AMERICAN EXPRESS'/>
                </datalist>
                <p className='Errors'>{errors.paymentType?.message}</p>

                <label htmlFor='CardExpirationYear'>Expiration Date</label>
                <div className='ExpirationDate'>
                    <span>
                        <input id='CardExpirationYear' {...register('cardExpirationYear',{onBlur:()=>errors.cardExpirationYear?changeBorderColor('CardExpirationYear'):null})} type='number' placeholder='Year'/>
                        <p className='Errors'>{errors.cardExpirationYear?.message}</p>
                    </span>

                    <span>
                        <input id='CardExpirationMonth' {...register('cardExpirationMonth',{onBlur:()=>errors.cardExpirationMonth?changeBorderColor('CardExpirationMonth'):null})} type='number' placeholder='Month'/>
                        <p className='Errors'>{errors.cardExpirationMonth?.message}</p>
                    </span>

                    <span>
                        <input id='CardCVV' {...register('cardCVV',{onBlur:()=>errors.cardCVV?changeBorderColor('CardCVV'):null})} type='number' placeholder='CVV'/>
                        <p className='Errors'>{errors.cardCVV?.message}</p>
                    </span>
                </div>

                <label htmlFor='BillingAddressOne'>Billing Address Line 1</label>
                <input id='BillingAddressOne' {...register('billingAddressOne',{onBlur:()=>errors.billingAddressOne?changeBorderColor('BillingAddressOne'):null})} type='text' placeholder='123 First Street'/>
                <p className='Errors'>{errors.billingAddressOne?.message}</p>

                <label htmlFor='BillingAddressTwo'>Billing Address Line 2</label>
                <input id='BillingAddressTwo' {...register('billingAddressTwo',{onBlur:()=>errors.billingAddressTwo?changeBorderColor('BillingAddressTwo'):null})} type='text' placeholder='123 First Street'/>
                <p className='Errors'>{errors.billingAddressTwo?.message}</p>

                <label htmlFor='CustomerCity'>City</label>
                <input id='CustomerCity' {...register('customerCity',{onBlur:()=>errors.customerCity?changeBorderColor('CustomerCity'):null})} type='text' placeholder='Miami'/>
                <p className='Errors'>{errors.customerCity?.message}</p>

                <label htmlFor='CustomerState'>State</label>
                <input id='CustomerState' {...register('customerState',{onBlur:()=>errors.customerState?changeBorderColor('CustomerState'):null})} type='text' placeholder='Florida'/>
                <p className='Errors'>{errors.customerState?.message}</p>

                <label htmlFor='CustomerZipCode'>Zip Code</label>
                <input id='CustomerZipCode' {...register('customerZipCode',{onBlur:()=>errors.customerZipCode?changeBorderColor('CustomerZipCode'):null})} type='number' placeholder='33660'/>
                <p className='Errors'>{errors.customerZipCode?.message}</p>
            </fieldset>
    )

    const OnlinePayment = ()=>(
        <a className='PaypalLink' href='Paypal.com'>Login to Paypal</a>
    )

    return paymentType? <BankCard/> : <OnlinePayment/>;
}

export default function AccountSetup(){
    const[choosePaymentPlatform,setChoosePaymentPlatform] = useState(true);

    const schema = yup.object({
        firstName: yup.string('Please enter a valid name').required('This field is required'),
        lastName: yup.string('Please enter a valid name').required('This field is required'),
        emailAddress: yup.string().email('Please enter a valid email address').required('This field is required'),
        telephone: yup.string().required('This field is required. It enables easier communication with our riders'),
        username: yup.string().required('This field is required'),
        password: yup.string().required('This field is required').matches(/[a-z]/, 'Use atleast one lowercase char')
                     .matches(/[A-Z]/, 'Use atleast one uppercase char').matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'Use atleast 1 number or special char (@,!,#, etc).'),

        passwordRepeat: yup.string().required('This field is required').matches(/[a-z]/, 'Use atleast one lowercase char')
                           .matches(/[A-Z]/, 'Use atleast one uppercase char').matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'Use atleast 1 number or special char (@,!,#, etc).')
                           .oneOf([yup.ref('password')],'Passwords must match'),

        country: yup.string('Please enter a valid country').min(4,'Please enter a valid country').required('This field is required'),
        cardNumber:yup.number().typeError('Please enter a valid number').required('This field is required'),
        paymentType:yup.string('Please enter a valid country').required('This field is required'),
        cardExpirationYear:yup.string().required('This field is required').matches(/^(202[3-9]|20[3-9][0-9]|2[1-9][0-9]{2})$/,'Please enter a valid year'),
        cardExpirationMonth:yup.number().typeError('Please enter a valid month').min(1,'Please enter a valid month').max(12,'Please enter a valid month').required('This field is required'),
        cardCVV:yup.string().required('This field is required').matches(/^(10[0-9]|1[1-9][0-9]|[2-9][0-9]{2}|[1-9][0-9]{3})$/,'Please enter a valid CVV'),
        billingAddressOne:yup.string().required('This field is required'),
        billingAddressTwo:yup.string().required('This field is required'),
        customerCity:yup.string().required('This field is required'),
        customerState:yup.string().required('This field is required'),
        customerZipCode:yup.string().required('This field is required'),
    });

    const form = useForm({mode:'onTouched',resolver:yupResolver(schema)});
    const {register,handleSubmit,formState,reset} = form;
    // const {control} = form;
    const {errors} = formState;
    
    return <form className='AccountSetupContainer' onSubmit={handleSubmit(
        (data)=>{
            localStorage.setItem('accountSetup','true');
            localStorage.setItem('userDetails',JSON.stringify(data));
            reset();
            alert(`Thank you ${data.firstName} for setting up an account with us. You will receive an email at ${data.emailAddress} with a link to confirm your account. Welcome!!`);
            window.location.reload();
        })}>

        <h1>ACCOUNT INFORMATION</h1>
        <fieldset className='AccountInformation'>

            <label htmlFor='FirstName'>First Name</label>
            <input id='FirstName' {...register('firstName',{onBlur:()=>errors.firstName?changeBorderColor('FirstName'):null})} type='text' placeholder='John'/>
            <p className='Errors'>{errors.firstName?.message}</p>

            <label htmlFor='LastName'>Last Name</label>
            <input id='LastName' {...register('lastName',{onBlur:()=>errors.lastName?changeBorderColor('LastName'):null})} type='text' placeholder='Doe'/>
            <p className='Errors'>{errors.lastName?.message}</p>

            <label htmlFor='EmailAddress'>E-mail Address</label>
            <input id='EmailAddress' {...register('emailAddress',{onBlur:()=>errors.emailAddress?changeBorderColor('EmailAddress'):null})} type='email' placeholder='Johndoe@example.com'/>
            <p className='Errors'>{errors.emailAddress?.message}</p>

            <label htmlFor='Telephone'>Phone Number</label>
            <input id='Telephone' {...register('telephone',{onBlur:()=>errors.telephone?changeBorderColor('Telephone'):null})} type='tel' placeholder='+1 254 311 542'/>
            <p className='Errors'>{errors.telephone?.message}</p>

            <label htmlFor='Username'>Username</label>
            <input id='Username' {...register('username',{onBlur:()=>errors.username?changeBorderColor('Username'):null})} type='text'/>
            <p className='Errors'>{errors.username?.message}</p>

            <label htmlFor='Password'>Account Password</label>
            <input id='Password' {...register('password',{onBlur:()=>errors.password?changeBorderColor('Password'):null})} type='password'/>
            <p className='Errors'>{errors.password?.message}</p>

            <label htmlFor='PasswordRepeat'>Retype Account Password</label>
            <input id='PasswordRepeat' {...register('passwordRepeat',{onBlur:()=>errors.passwordRepeat?changeBorderColor('PasswordRepeat'):null})} type='password'/>
            <p className='Errors'>{errors.passwordRepeat?.message}</p>
        </fieldset>

        <h1>BILLING INFORMATION</h1>
        <fieldset className='RadioBtns'>
            <input id='RadioTrue' name='radioChoice' type='radio' value={true} onClick={e=>setChoosePaymentPlatform(true)} defaultChecked/>
            <label htmlFor='RadioTrue'>Credit/Debit Card</label>

            <input id='RadioFalse' name='radioChoice' type='radio' value={false} onClick={e=>setChoosePaymentPlatform(false)}/>
            <label htmlFor='RadioFalse'>Paypal</label>
        </fieldset>
        
        <PaymentField paymentType={choosePaymentPlatform} schema={schema} form={form}/> 

        <button type='submit'>Submit Information</button>
        {/* <DevTool control={control}/> */}
    </form>
}

