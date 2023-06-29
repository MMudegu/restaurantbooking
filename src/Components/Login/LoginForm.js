import { useNavigate } from 'react-router';
import '../../Styling/LoginForm.css';
import {useForm} from 'react-hook-form';

export default function LoginForm(){
    const form = useForm();
    const {register,handleSubmit,formState,reset}= form;
    const {errors} = formState;
    const navigate = useNavigate();
    return (
        <form className='LoginFormContainer' onSubmit={handleSubmit(
            (data)=>{   
                    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
                    const isAccountSetup = JSON.parse(localStorage.getItem('accountSetup'));
                    if(isAccountSetup){
                        if(userDetails.username === data.loginUsername && userDetails.password === data.loginPassword)
                            {
                                //This will be avail a status for each session for determining user access after login
                                sessionStorage.setItem('userLoggedIn','true');
                                alert(`Login successful`);
                                navigate('/');
                            }
                        else alert('Invalid Username or Password');
                    }
                    else{
                        alert('Please setup an account first');
                        navigate('/Login/AccountSetup');
                    }
            })}>

            <div className='LoginDetails'>
                <h1>Please Login</h1>
                <label htmlFor='LoginUsername'>Username:</label>
                <input id='LoginUsername' {...register('loginUsername',{required:'This field is required'})} type='text'/>
                <p> {errors.loginUsername?.message}</p>
                <label htmlFor='LoginPassword'>Password:</label>
                <input id='LoginPassword' {...register('loginPassword',{required:'This field is required'})} type='password'/>
                <p> {errors.loginPassword?.message}</p>
                <button type='submit' className='LoginButton'>Log In</button>
            </div>
            
        </form>
    );

}