const jwt = require('jsonwebtoken');
const Prof = require('../models/profModel');
const config = require('../config/jwt');

exports.register = async (req, res) => {
  try {
    const { nome, password } = req.body;
    const prof = new Prof({ nome, password });
    await prof.save();
    res.status(201).json({ message: 'Professor registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { profname, password } = req.body;
    const prof = await Prof.findOne({ profname });
    if (!prof || !(await prof.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: prof._id }, config.secret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
