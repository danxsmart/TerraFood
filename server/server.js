const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/users');
const blogRoutes = require('./routes/blogs'); 
const ingredientRoutes = require('./routes/ingredients');


// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
const mongoURI = 'mongodb+srv://admin:1234@terraweb.6nrsdba.mongodb.net/terrafood?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Rutas
app.use('/api/users', userRoutes);
app.use('/api', blogRoutes);
app.use('/api/ingredients', ingredientRoutes);

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
