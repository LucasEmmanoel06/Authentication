const express = require('express');
const { getProfs, getProfById, updateProf, deleteProf } = require('../controllers/profController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getProfs);

router.get('/:id', authMiddleware, getProfById);

router.put('/:id', authMiddleware, updateProf);

router.delete('/:id', authMiddleware, deleteProf);

module.exports = router;
