
// import configDB from '../config/db.js';

// async function createTables() {
//     try {
//         await configDB.authenticate();  // Verifica a conexão com o banco de dados
//         console.log('Conexão com o banco de dados estabelecida com sucesso.');

//         await configDB.sync();  // Sincroniza as tabelas
//         console.log('\n3. Tabelas sincronizadas/criadas com sucesso.\n');

//     } catch (error) {
//         console.error('Erro ao sincronizar as tabelas:', error);
//     }
// }

// export default createTables;


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
