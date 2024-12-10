const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const checksumRoutes = require('./routes/checksum');

//Middlleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Définir les routes API
app.use('/api', checksumRoutes);

//app.options('*', cors());

// Servir les fichiers statiques du frontend
//app.use(express.static(path.join(__dirname, '../../frontend')));

// Middleware global pour les erreurs 404
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
  });
  

// Lancer le serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
