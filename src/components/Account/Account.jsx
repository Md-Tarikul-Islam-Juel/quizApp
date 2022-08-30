import React from 'react';
import { BiExit } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Account.css';

function Account() {
    const { currentUser, logout } = useAuth();
    return (
        <>
            <div className="signup-login">
                {currentUser ? (
                    <span>
                        <FaUserCircle className="FaUserCircle" /> {currentUser.displayName}
                        {'  '}
                        <BiExit onClick={logout} />
                    </span>
                ) : (
                    <>
                        <Link to="/signup">
                            <div className="signUp">
                                <FaUserCircle className="FaUserCircle" />
                                Sign up
                            </div>
                        </Link>
                        <Link to="/login">
                            <div className="LogIn">Log in</div>
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}

export default Account;
