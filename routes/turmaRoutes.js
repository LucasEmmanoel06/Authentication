const express = require('express');
const { getTurmas, getTurmaById, createTurma, updateTurma, deleteTurma } = require('../controllers/turmaController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getTurmas);

router.get('/:id', authMiddleware, getTurmaById);

router.post('/', authMiddleware, createTurma);

router.put('/:id', authMiddleware, updateTurma);

router.delete('/:id', authMiddleware, deleteTurma);

module.exports = router;
