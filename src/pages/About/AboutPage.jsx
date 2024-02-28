import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const navigation = (path) => {
        navigate(path)
    }

    console.log('we are in:', location.pathname)

    return (
        <div>
            <h1>About Page</h1>
            <div>
                <button onClick={ () => navigation('/') }> Home </button>
                <button onClick={ () => navigate(-1) }> Back </button>
                <button onClick={ () => navigate(1) }> Foward </button>
            </div>
        </div>
    );
}

export default AboutPage;
