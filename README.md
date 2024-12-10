######### Fichier README  ###############

Le projet est réalisé en 
* Frontend: avec du HMTL et JavaScript
* Backend: NodeJs est utilisé
* Base de données en fichier: data.json

Conteneurisation:
Naviguez dans le répertoire racine de votre projet  (ex: cd /checksum-appli)
* $docker-compose build
* $docker-compose up -d

##Tests en local
* $npm start //se situant dans le répertoire /backend
Accès backend via un navigateur: http://localhost:5001/api/checksums
* Ouvrir un autre terminal et taper  $python3 -m http.server 3000 
Accès frontend: Accéder à http://localhost:3000
