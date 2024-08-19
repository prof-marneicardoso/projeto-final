
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import { apiRequest } from "../utils/apiRequest.js";

function UserCreate() {
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
            </main>
        </>
    );
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
    apiRequest('register', 'POST', data)
        .then((data) => {
            console.log(data);
        });
};

export default UserCreate;
