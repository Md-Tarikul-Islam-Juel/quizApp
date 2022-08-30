import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './LoginComponent.css';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    const { login } = useAuth();

    async function callFromHandleSubmit() {
        try {
            setError('');
            setLoading(true);
            await login(email, password);

            navigate('/', { replace: true });
            return true;
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to login!');
            return true;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        callFromHandleSubmit();
    }

    return (
        <Form
            className="login-form"
            onSubmit={(e) => {
                handleSubmit(e);
            }}
        >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Enter email"
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
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </Form.Group>

            <Button disabled={loading} className="form-btn" variant="primary" type="submit">
                Login
            </Button>

            {error && <p className="password-error">{error}</p>}

            <p>
                Do not have an account? <Link to="/signup">Sign up</Link> insted
            </p>
        </Form>
    );
}

export default LoginComponent;
