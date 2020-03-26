const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

//Login pelo ID da ONG
routes.post("/sessions", SessionController.create);

//Listagem de ongs
routes.get("/ongs", OngController.index);
//Cadastro de ongs
routes.post("/ongs", OngController.create);

//Listagem de incidents
routes.get("/incidents", IncidentController.index);
//Cadastro de incidents
routes.post("/incidents", IncidentController.create);
//Delete de incidents
routes.delete("/incidents/:id", IncidentController.delete);
//Listagem de incidents de uma determina ONG
routes.get("/profile", ProfileController.index);

module.exports = routes;
