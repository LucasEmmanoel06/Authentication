const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// a construção da rota abaixo caracteriza uma rota privada (Para usuários que já logaram)
router.post('/', authMiddleware, register);

router.post('/login', login);

module.exports = router;
