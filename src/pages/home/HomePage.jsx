import React from 'react';
import { useNavigate } from 'react-router-dom';
import DiceTray from '../../components/container/DiceTray'

const HomePage = () => {

    const navigate = useNavigate();

    const navigation = (path) => {
        navigate(path)
    }


    return (
        <div className='container-fluid d-flex flex-column align-items-center'>
            <h1>Landing Page</h1>
            <div className='row flex-nowrap justify-content-center m-3'>
                <DiceTray/>
            </div>
        </div>
    );
}

export default HomePage;
