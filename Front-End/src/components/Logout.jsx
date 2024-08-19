
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button/Button';

function LogoutButton() {
    const navigate = useNavigate();
    console.log('Efetuar logout');

    const handleLogout = () => {
        // Remove os dados do localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redireciona para a página de login
        navigate('/');
    };

    return (
        <Button text="Logout" onClick={handleLogout} />
    );
}

export default LogoutButton;
