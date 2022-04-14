import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        console.log('user', user)
    }
    const hyandleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.targer.terms.checked; (system -1 for toggle terms and conditoins)

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');

    };

    return (
        <div className='register-form'>
            <h2 className='text-center text-primary mt-5'>Regtistration Frist</h2>
            <form onSubmit={hyandleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name='email' id='' placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accepts Terms And Conditons</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 mx-auto mt-2' type="submit"
                    value="Register" />
            </form>
            <p>Already Have An Account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;