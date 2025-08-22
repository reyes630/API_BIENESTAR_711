const express = require('express');
const app = express();

// Middleware para interpretar JSON en las peticiones
app.use(express.json());

// Importar rutas
const categoryRoutes = require('./routes/categoryRoutes');
const eventRoutes = require('./routes/eventRoutes');
const rolRoutes = require('./routes/rolRoutes');
const userRoutes = require('./routes/userRoutes');

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
