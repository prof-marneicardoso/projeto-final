
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import { apiRequest } from "../utils/apiRequest.js";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function UserCreate() {
    // Hook para redirecionar
    const navigate = useNavigate();

    // Hook para mostrar a mensagem de erro ou sucesso
    const [authMessage, setAuthMessage ] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        const statusMessage = document.querySelector('#statusMessage');
        
        apiRequest('register', 'POST', data)
            .then((response) => {
                console.log(response);
                
                if (response.success) {
                    // Exibe a mensagem de sucesso (da API)
                    setAuthMessage(response.message);
                    statusMessage.style.display = 'block';
                    statusMessage.style.color = 'var(--success)';

                    // Redireciona para a página inicial
                    setTimeout(() => {
                        navigate('/users/login');
                    }, 2000);
                
                } else {
                    setAuthMessage(response.message);
                    statusMessage.style.display = 'block';
                }
            });
    };

    return (
        <>
            <Header />

            <main>
                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar Usuário</h1>

                    <label htmlFor="full_name">Nome Completo</label>
                    <input type="text" id="full_name" name="full_name" placeholder="Nome Completo" required />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="E-mail" required />

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Senha" required />

                    <Button text="Cadastrar" />
                </form>

                <div id="statusMessage">{authMessage}</div>
            </main>
        </>
    );
}

export default UserCreate;
