const express = require('express');
const {
  getMaterias,
  getMateriaById,
  createMateria,
  updateMateria,
  deleteMateria,
  getMateriasByProfId
} = require('../controllers/materiaController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getMaterias);

router.get('/:id', authMiddleware, getMateriaById);

router.post('/', authMiddleware, createMateria);

router.put('/:id', authMiddleware, updateMateria);

router.delete('/:id', authMiddleware, deleteMateria);

router.get('/prof/:profId', authMiddleware, getMateriasByProfId);

module.exports = router;
