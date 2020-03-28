const express = require('express')
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//Login
routes.post('/session', SessionController.create);


//Listar Todas as Ongs
routes.get('/ongs', OngController.index)
//Cadastrar Ongs
routes.post('/ongs', OngController.create);

//Listar casos de uma ong específica
routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;