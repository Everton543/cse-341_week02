const routes = require('express').Router();
const baseController = require('../controllers');

routes.get('/professional', baseController.getProfessionalData);

module.exports = routes;