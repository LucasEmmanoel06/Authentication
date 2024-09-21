const Materia = require('../models/materiaModel');
const User = require('../models/userModel');

exports.getMaterias = async (req, res) => {
  try {
    const materias = await Materia.find().populate('user');
    res.json(materias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMateriaById = async (req, res) => {
  try {
    const materia = await Materia.findById(req.params.id).populate('user');
    if (!materia) {
      return res.status(404).json({ message: 'Matéria não encontrada' });
    }
    res.json(materia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMateria = async (req, res) => {
  try {
    const materia = new Materia(req.body);
    await materia.save();
    res.status(201).json(materia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMateria = async (req, res) => {
  try {
    const materia = await Materia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!materia) {
      return res.status(404).json({ message: 'Matéria não encontrada' });
    }
    res.json(materia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMateria = async (req, res) => {
  try {
    await Materia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Matéria deletada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMateriasByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Verifique se o professor existe pelo Id
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Encontra todas as matérias associadas ao professor do Id
    const materias = await Materia.find({ user: userId });

    res.status(200).json(materias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
