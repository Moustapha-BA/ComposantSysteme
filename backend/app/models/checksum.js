const mongoose = require('mongoose');

const checksumSchema = new mongoose.Schema({
  inputString: { type: String, required: true },
  checksum: { type: String, required: true },
  algorithm: { type: String, default: 'sha256' },
});

module.exports = mongoose.model('Checksum', checksumSchema);
