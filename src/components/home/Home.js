import React from 'react';
import Header from '../header/Header';
import Login from '../login/Login';
import ForgotP from '../login/ForgotP';
import Register from '../register/Register';
import Error from '../error404/Error';
// import NavBar from '../navbar/NavBar.js';

function Home() {
    return (
    <div>
        <Header />
        <Login />
        <ForgotP />
        <Register />
        <Error />
    </div>
    )
}

export default Home;

