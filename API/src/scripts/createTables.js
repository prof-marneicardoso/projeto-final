import { sequelize } from '../models/User.js';

const createTables = async () => {
    try {
        await sequelize.sync();
        console.log('===== 3. Tabelas sincronizadas/criadas com sucesso. =====');

    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    }
};

export default createTables;
