import React from 'react';

import Illustration from '../../components/Illustration/Illustration';
import FormComponent from '../../components/signupForm/FormComponent';

import './Signup.css';

function Signup() {
    return (
        <>
            <h3 className="signup-title">Create Account</h3>
            <div className="row">
                <div className="col-md-6">
                    <Illustration />
                </div>
                <div className="col-md-6">
                    <FormComponent />
                </div>
            </div>
        </>
    );
}

export default Signup;
