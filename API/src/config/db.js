
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const configDB = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
);

console.log('===== 1. Configuração da Database =====');

export default configDB;
