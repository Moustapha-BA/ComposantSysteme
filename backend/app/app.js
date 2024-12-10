const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const checksumRoutes = require('./routes/checksum');

const app = express();
app.use(bodyParser.json());

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '../../frontend')));

// Définir les routes API
app.use('/api', checksumRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
