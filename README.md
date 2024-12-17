######### Fichier README  ###############

Le projet est réalisé en 
* Frontend: avec du HMTL et JavaScript
* Backend: NodeJs est utilisé
* Base de données en fichier: data.json

Conteneurisation:
Naviguez dans le répertoire racine du projet où se trouve le fichier d'extension ".yml" et contenant les sous-répertoires /backend et /frontend.
* Taper les commandes suivantes:
* $docker-compose build
* $docker-compose up -d

##Tests
* Les commandes ci-dessous sont à taper dans le répertoire /backend
* * $npm install
* * $npm start 
* * Accéder au backend via un navigateur avec le lien suivant pour voir la liste des checksums (vide au début: []): http://localhost:5001/api/checksums
* Ouvrir un autre terminal et taper dans le répertoire /frontend
* * $python3 -m http.server 3000
* * Accéder au formulaire via le lien: http://localhost:3000
