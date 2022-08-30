import React from 'react';
import NavBar from '../Nav/NavBar';

function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div className="container">{children}</div>
        </>
    );
}

export default Layout;
