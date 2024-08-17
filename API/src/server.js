
import { sequelize } from './models/User.js';

export const startServer = (app) => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, async () => {
        try {
            // Autentica a conexão com o banco de dados
            await sequelize.authenticate();
            console.log('===== 4. DB conectada =====');

        } catch (error) {
            console.error('Erro ao conectar na DB: ', error);
        }

        console.log(`\n>>> Server rodando em: http://localhost:${PORT}\n`);
    });
};
