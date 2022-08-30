import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './FormComponent.css';

function FormComponent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState('');
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    const { signup } = useAuth();

    async function callFromHandleSubmit() {
        // do validation
        if (password !== confirmPassword) {
            return setError("Passwords don't match!");
        }
        if (password.length <= 5) {
            return setError('password must be at least 6 digite');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, username);
            navigate('/', { replace: true });
            return true;
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to create an account!');
            return true;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        callFromHandleSubmit();
    }

    return (
        <Form
            className="form"
            onSubmit={(e) => {
                handleSubmit(e);
            }}
        >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="name"
                    placeholder="Enter name"
                    required
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Enter emil"
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Enter confirm password"
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    className="form-checkbox"
                    type="checkbox"
                    label="I agree to the terms & condition"
                    required
                    value={agree}
                    onChange={(e) => {
                        setAgree(e.target.value);
                    }}
                />
            </Form.Group>
            <Button disabled={loading} className="form-btn" variant="primary" type="submit">
                Submit Now
            </Button>

            {error && <p className="password-error">{error}</p>}

            <p>
                Already have an account? <Link to="/login">Login</Link> instead
            </p>
        </Form>
    );
}

export default FormComponent;
