
'use strict';
import bcrypt from 'bcrypt';
import { Sequelize, DataTypes, Model } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Configuração do Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Defina como true se quiser ver os logs SQL
});

class User extends Model {
    static associate(models) {
        // define association here
    }
}

User.init({
    full_name: {
        type:DataTypes.STRING(100), // varchar(100)
        allowNull: false,   // NOT NULL
    },

    email: {
        type: DataTypes.STRING(50), // varchar(30)
        allowNull: false,   // NOT NULL
        unique: true,       // UNIQUE
    },

    password: {
        type: DataTypes.STRING(60),     // varchar(60) Bcrypt
        allowNull: false,               // NOT NULL
        set(value) {
            const saltRounds = 10;
            const hash = bcrypt.hashSync(value, saltRounds);
            this.setDataValue('password', hash);
        }
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Nome da tabela
    timestamps: true,   // Cria campos createdAt e updatedAt automaticamente
});

export default User;
export { sequelize };
