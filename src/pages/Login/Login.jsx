import React from 'react';
import Illustration from '../../components/Illustration/Illustration';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import './Login.css';

function Login() {
    return (
        <>
            <h3 className="login-title">Login to your account</h3>
            <div className="row">
                <div className="col-md-6">
                    <Illustration />
                </div>
                <div className="col-md-6">
                    <LoginComponent />
                </div>
            </div>
        </>
    );
}

export default Login;
