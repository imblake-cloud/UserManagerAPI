const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para renderizar la lista de usuarios
router.get('/users', userController.getUsers);

// Ruta para agregar un nuevo usuario (API REST)
router.post('/users', userController.addUser);

module.exports = router;
