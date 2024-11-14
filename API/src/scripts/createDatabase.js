import configDB from '../config/db.js';
import mysql from 'mysql2/promise';

const createDatabase = async () => {

    try {
        const connection = await mysql.createConnection(
            {
                host: configDB.options.host,
                port: configDB.options.port,
                user: configDB.config.username,
                password: configDB.config.password,
            },
        );

        await connection.query(`CREATE DATABASE IF NOT EXISTS ${configDB.config.database};`);
        console.log('===== 2. Database criada com sucesso =====');
        await connection.end();

    } catch (error) {
        console.error('Erro ao conectar no DB: ', error);
    }
};

export default createDatabase;
