
import { swaggerUI, specs } from './config/swagger.js';
import createDatabase from './scripts/createDatabase.js';
import createTables from './scripts/createTables.js';
import routes from './routes/routes.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Middleware para documentação Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

// Middleware para rotas da API
app.use('/api', routes);

// Função para iniciar a aplicação
const initApp = async () => {
    try {
        // Executa o script para criar a DB
        await createDatabase();

        // Executa o script para criar as tabelas
        await createTables();

        // Inicia o servidor
        const server = await import('./server.js');
        server.startServer(app);

    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
    }
};

initApp();

export default app;
