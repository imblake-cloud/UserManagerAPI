const users = [
    { name: 'Vladi', email: 'vladivanov@gmail.com' },
    { name: 'Iago', email: 'martinezgonzaleziago@gmail.com' }
];

// Función para obtener todos los usuarios
function getAllUsers() {
    return users;  // Devuelve la lista de usuarios
}

// Función para agregar un usuario (simulando una base de datos)
function createUser(user) {
    users.push(user);
}

module.exports = { getAllUsers, createUser };
