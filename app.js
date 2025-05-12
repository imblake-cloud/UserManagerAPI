const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');  // Configurar la carpeta de vistas

app.use(bodyParser.json());  // Para procesar JSON

// Ruta para la página principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal');
});

app.use('/api', userRoutes); // Tus rutas de la API

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
