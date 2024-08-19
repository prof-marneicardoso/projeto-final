
import Header from '../../components/Header/Header';
import LogoutButton from '../../components/Logout';

function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <Header />

            <main>
                <h2>Nome do Usuário</h2>

                <h3>E-mail: {user.full_name}</h3>

                <h3>Lista de compras:</h3>
                
                <div id="userOrdemList">Ainda não tem nenhuma compra... Comece agora!</div>

                <LogoutButton />
            </main>
        </>
    );
}

export default Profile;
