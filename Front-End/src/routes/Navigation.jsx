
import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../utils/userAuth';

function Navigation() {
    const user = useAuth(); // Chama o hook para verificar o usuário

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Produtos</Link></li>
                <li><Link to="/categories">Categorias</Link></li>
                {user
                    ? (<li><Link to="/users/profile">{user.full_name}</Link></li>)
                    : (<li><Link to="/users/login">Login</Link></li>)
                }
            </ul>
        </nav>
    )
}

export default Navigation;
