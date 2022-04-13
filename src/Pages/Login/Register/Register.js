import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    const hyandleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className='register-form'>
            <h2 className='text-center text-primary mt-5'>Regtistration Frist</h2>
            <form onSubmit={hyandleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name='email' id='' placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p>Already Have An Account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;