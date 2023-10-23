import React, {useEffect, useState} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";

function GoogleLoginButton() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token') != null){
            setLoggedIn(true)
            let userObject = jwtDecode(localStorage.getItem('token'))
            setEmail(userObject.email);
        }
    }, []);

    const handleLoginSuccess = (credentialResponse) => {
        let userObject = jwtDecode(credentialResponse.credential)
        setLoggedIn(true);
        setEmail(userObject.email);
        localStorage.setItem('token', credentialResponse.credential);
    }

    const handleLoginError = () => {
        console.log('Login Failed');
    }

    const handleLogout = () => {
        setLoggedIn(false)
        localStorage.removeItem('token')
    }

    return <div>
            {loggedIn ? (
                <div className="flex flex-row">
                    <p className="text-lg pt-3">{email}</p>
                    <button className="ml-5 bg-white rounded" onClick={handleLogout}>
                        <p className="text-lg text-gray-700 font-bold p-3">Logout</p>
                    </button>
                </div>
            ) : (
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginError}
                />
            )}
        </div>
}

export default GoogleLoginButton
