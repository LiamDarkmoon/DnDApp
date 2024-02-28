import { Button } from '@mui/material';
import React from 'react';
import CopyRight from '../../components/pure/CopyRight';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {

    const navigate = useNavigate()
    const logout = () => {
        navigate('/login')

    }

    return (
        <div>
            <h1>DashBoard</h1>
            <Button variant='contained' onClick={logout}>Logout</Button>
            <CopyRight></CopyRight>
        </div>
    );
}

export default DashBoard;
