
import express from 'express';
import authController from '../controllers/authController.js';
import userController from '../controllers/userController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: E-commerce API
 *   description: Documentação de referência da API de demonstração para o trabalho final da Geração Tech
 */

// ===== Cadastro de usuário: POST ===== //
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro no servidor
 */
router.post('/register', userController.registerUser);
// router.post('/register', authController.register);


// ===== Login de usuário: POST ===== //
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "usuario@example.com"
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "senha123"
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticação
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', authController.login);


// ===== Buscar todos os usuário: GET ===== //
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Recuperar uma lista de usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', userController.getAllUsers);


// ===== Buscar um usuário: GET (por ID) ===== //
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Recuperar um único usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Um único usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/users/:id', userController.getUserById);


// ===== Atualizar dados de um usuário: PUT (por ID) ===== //
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.put('/users/:id', userController.updateUser);


// ===== Excluir um usuário: DELETE (por ID) ===== //
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deletar um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/users/:id', userController.deleteUser);


// Address routes
// router.post('/addresses', addressController.createAddress);
// router.get('/addresses', addressController.getAllAddresses);
// router.get('/addresses/:id', addressController.getAddressById);
// router.put('/addresses/:id', addressController.updateAddress);
// router.delete('/addresses/:id', addressController.deleteAddress);

// Category routes
// router.post('/categories', categoryController.createCategory);
// router.get('/categories', categoryController.getAllCategories);
// router.get('/categories/:id', categoryController.getCategoryById);
// router.put('/categories/:id', categoryController.updateCategory);
// router.delete('/categories/:id', categoryController.deleteCategory);

// Order routes
// router.post('/orders', orderController.createOrder);
// router.get('/orders', orderController.getAllOrders);
// router.get('/orders/:id', orderController.getOrderById);
// router.put('/orders/:id', orderController.updateOrder);
// router.delete('/orders/:id', orderController.deleteOrder);

// OrderItem routes
// router.post('/orderItems', orderItemController.createOrderItem);
// router.get('/orderItems', orderItemController.getAllOrderItems);
// router.get('/orderItems/:id', orderItemController.getOrderItemById);
// router.put('/orderItems/:id', orderItemController.updateOrderItem);
// router.delete('/orderItems/:id', orderItemController.deleteOrderItem);

// Product routes
// router.post('/products', productController.createProduct);
// router.get('/products', productController.getAllProducts);
// router.get('/products/:id', productController.getProductById);
// router.put('/products/:id', productController.updateProduct);
// router.delete('/products/:id', productController.deleteProduct);

export default router;
