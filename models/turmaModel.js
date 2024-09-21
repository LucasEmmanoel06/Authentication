const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  prof: { type: mongoose.Schema.Types.ObjectId, ref: 'Prof', required: true },
  materia: { type: mongoose.Schema.Types.ObjectId, ref: 'Materia', required: true },
});

module.exports = mongoose.model('Turma', TurmaSchema);
