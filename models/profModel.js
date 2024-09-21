const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ProfSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// artefato para salvar senha com criptografia
ProfSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    // espera 10 operações de encriptação da senha
    this.password = await bcrypt.hash(this.password, 10);
  }
  // quando terminar, vai para o proximo passo
  next();
});

ProfSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Prof', ProfSchema);
