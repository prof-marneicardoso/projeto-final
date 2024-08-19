
import User from '../models/User.js';

// Cadastra um novo usuário
const registerUser = async (request, response) => {
    try {
        // Recebe os dados do corpo da requisição (form)
        const { full_name, email, password } = request.body;

        // Verifica se o e-mail informado está em uso
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return response.status(409).json({ success: false, message: 'Este e-mail já está sendo utilizado.', });
        }

        // Cadastra o usuário na DB
        const newUser = await User.create({ full_name, email, password });

        // Retorna o usuário criado
        response.status(201).json({ success: true, message: 'Usuário cadastrado.',  });

    } catch (error) {
        response.status(500).json({ success: false, message: 'Este e-mail já está sendo utilizado.', });
    }
}


// Busca todos os usuários
const getAllUsers = async (request, response) => {
    try {
        const users = await User.findAll();
        response.json(users);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};


// Busca um usuário (pelo ID)
const getUserById = async (request, response) => {
    try {
        const id = request.params;
        const user = await User.findByPk(id);
        
        if (!user) {
            return response.status(404).json({ message: 'Usuário não encontrado' });
        }
        response.status(200).json(user);

    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};


// Atualiza os dados de um usuário (pelo ID)
const updateUser = async (request, response) => {
    try {
        const id = request.params;
        const [updated] = await User.update(request.body, {
            where: { id },
        });

        if (updated) {
            const user = await User.findByPk(id);
            response.status(200).json(user);
        } else {
            response.status(404).json({ message: 'Usuário não encontrado' });
        }

    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};


// Exclui um usuário (pelo ID)
const deleteUser = async (request, response) => {
    try {
        const id = request.params;
        const deleted = await User.destroy({
            where: { id },
        });

        if (deleted) {
            response.status(204).json();
        } else {
            response.status(404).json({ message: 'Usuário não encontrado' });
        }

    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

export default {
    registerUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
