import '../../Styling/LoginForm.css';

export default function LoginForm(){
    return (
        <div className='LoginFormContainer'>
            <div className='LoginDetails'>
                <h1>Please Login</h1>
                <label htmlFor='LoginUsername'>Username:</label>
                <input id='LoginUsername' name='loginUsername' type='text' required/>
                <label htmlFor='LoginPassword'>Password:</label>
                <input id='LoginPassword' name='loginPassword' type='password' required/>
            </div>
        </div>
    );

}