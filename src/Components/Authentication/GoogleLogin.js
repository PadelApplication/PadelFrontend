import React, {useState} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";

function GoogleLoginButton() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');

    const handleLoginSuccess = (credentialResponse) => {
        let userObject = jwtDecode(credentialResponse.credential)
        setLoggedIn(true);
        setEmail(userObject.email);
    }

    const handleLoginError = () => {
        console.log('Login Failed');
    }

    const handleLogout = () => {
        setLoggedIn(false)
    }

    return <div>
            {loggedIn ? (
                <div className="flex flex-row">
                    <p className="text-lg">{email}</p>
                    <button className="text-lg" onClick={handleLogout}>Logout</button>
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
