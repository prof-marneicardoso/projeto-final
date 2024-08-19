
import { useEffect, useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));

                if (payload.exp * 1000 > Date.now()) {
                    const userData = JSON.parse(localStorage.getItem('user'));
                    setUser(userData); // Usuário está logado

                } else {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    setUser(null); // Token expirado, limpa os dados
                }
                
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null); // Token inválido ou corrompido
            }
        }
    }, []);

    return user;
};

export default useAuth;
