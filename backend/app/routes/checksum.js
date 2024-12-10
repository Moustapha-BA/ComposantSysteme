const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const router = express.Router();

const dataFilePath = path.join(__dirname, '../data.json');

// Fonction utilitaire pour lire les données
function readData() {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([])); // Initialiser un fichier JSON vide
  }
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
}

// Fonction utilitaire pour écrire les données
function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Route pour créer un checksum
router.post('/checksum', (req, res) => {
  const { input_string, algorithm = 'sha256' } = req.body;

  if (!input_string) {
    return res.status(400).json({ error: 'Input string is required' });
  }

  try {
    const hash = crypto.createHash(algorithm).update(input_string).digest('hex');
    const data = readData();

    const newEntry = { inputString: input_string, checksum: hash, algorithm };
    data.push(newEntry);

    writeData(data);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error processing the request' });
  }
});

// Route pour récupérer tous les checksums
router.get('/checksums', (req, res) => {
  try {
    const data = readData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error reading data' });
  }
});

module.exports = router;
