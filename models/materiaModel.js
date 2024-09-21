const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  prof: { type: mongoose.Schema.Types.ObjectId, ref: 'Prof', required: true },
});

module.exports = mongoose.model('Materia', MateriaSchema);
