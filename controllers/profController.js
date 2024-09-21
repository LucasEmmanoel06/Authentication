const Prof = require('../models/profModel');

exports.getProfs = async (req, res) => {
  try {
    const profs = await Prof.find();
    res.json(profs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProfById = async (req, res) => {
  try {
    const prof = await Prof.findById(req.params.id);
    if (!prof) {
      return res.status(404).json({ message: 'Prof not found' });
    }
    res.json(prof);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProf = async (req, res) => {
  try {
    const prof = await Prof.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!prof) {
      return res.status(404).json({ message: 'Prof not found' });
    }
    res.json(prof);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProf = async (req, res) => {
  try {
    await Prof.findByIdAndDelete(req.params.id);
    res.json({ message: 'Prof deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
