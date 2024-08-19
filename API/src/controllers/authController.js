
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authController = {

    // Login do usuário
    async login(request, response) {
        try {
            // Recebe os dados do corpo da requisição (form)
            const { email, password } = request.body;

            console.log('Dados do form (Login): ', request.body);

            // Busca o usuário na DB (pelo e-mail informado)
            const user = await User.findOne({ where: { email } });

            if (user) {
                console.log('Dados da query por e-mail: ', user);
            
            } else {
                return response.status(401).json({ message: 'Credenciais inválidas' });
            }

            // Valida as credenciais, se o usuário existir
            // Criptografa a senha informada e compara com a senha na DB (já criptografada)
            if (!user || !bcrypt.compareSync(password, user.password)) {
                return response.status(401).json({ message: 'E-mail ou Senha inválidos' });
            }

            // Cria um token para o usuário
            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.full_name,
                    createdAt: user.createdAt
                },
                process.env.JWT_SECRET, { expiresIn: '1h' }
            );

            response.json({
                token,
                message: 'Login efetuado com sucesso',
                user: {
                    id: user.id,
                    full_name: user.full_name,
                    email: user.email,
                    createdAt: user.createdAt,
                }
            });

        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },
};

export default authController;
