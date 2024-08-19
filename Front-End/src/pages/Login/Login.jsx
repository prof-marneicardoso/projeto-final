
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { apiRequest } from '../../utils/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

function Login() {
    // Hook para redirecionar
    const navigate = useNavigate();

    // Hook para mostrar a mensagem de erro ou sucesso
    const [authMessage, setAuthMessage ] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        const statusMessage = document.querySelector('#statusMessage');
        
        apiRequest('login', 'POST', data)
            .then(({ token, message, user }) => {
                if (token) {
                    // Armazena o token no localStorage
                    localStorage.setItem('token', token);
    
                    // Armazena os dados do usuário no localStorage
                    localStorage.setItem('user', JSON.stringify(user));
    
                    // Exibe a mensagem de sucesso (da API)
                    setAuthMessage(message);
                    statusMessage.style.display = 'block';
                    statusMessage.style.color = 'var(--success)';
    
                    // Redireciona para a página inicial
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                } else {
                    setAuthMessage(message);
                    statusMessage.style.display = 'block';
                }
            });
    };

    return (
        <>
            <Header />

            <main>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="E-mail" required />

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Senha" required />

                    <Button text="Login" />
                </form>

                <p>
                    {/* Link para a página de cadastro */}
                    <Link to="/users/register">Cadastre-se agora!</Link>
                </p>

                <div id="statusMessage">{authMessage}</div>
            </main>
        </>
    );
}

export default Login;
