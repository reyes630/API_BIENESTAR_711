const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para interpretar JSON en las peticiones
app.use(express.json());

// Importar rutas
const categoryRoutes = require('./routes/categoryRoutes');
const eventRoutes = require('./routes/eventRoutes');
const rolRoutes = require('./routes/rolRoutes');
const userRoutes = require('./routes/userRoutes');
const { or } = require('sequelize');

// Usar rutas montadas en sus respectivos endpoints
app.use('/categories', categoryRoutes);
app.use('/events', eventRoutes);
app.use('/roles', rolRoutes);
app.use('/users', userRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send({ message: "API activa" });
});

// Puerto
app.set('PORT', process.env.PORT || 4000);
app.listen(app.get('PORT'), () => {
  console.log(`Server running on PORT ${app.get('PORT')}`);
});
