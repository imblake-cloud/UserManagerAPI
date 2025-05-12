const userModel = require('../models/userModel');

function getUsers(req, res) {
    const users = userModel.getAllUsers(); // Obtener los usuarios desde el modelo
    res.render('index', { title: 'Lista de Usuarios', message: 'Usuarios registrados', users: users });
}

function addUser(req, res) {
    const newUser = req.body;
    userModel.createUser(newUser);
    res.status(201).send('User added');
}

module.exports = { getUsers, addUser };
