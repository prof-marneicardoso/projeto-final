
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Documentation',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        full_name: {
                            type: 'string',
                            description: 'Nome do usuário',
                        },
                        email: {
                            type: 'string',
                            description: 'E-mail do usuário',
                        },
                        password: {
                            type: 'string',
                            description: 'Senha do usuário',
                        }
                    },
                    required: ['fullName', 'email', 'password'],
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);

export { swaggerUI, specs };
