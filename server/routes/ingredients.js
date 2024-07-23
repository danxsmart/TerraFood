const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient'); // Importa el modelo de ingrediente

// Ruta para obtener ingredientes por búsqueda
router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const ingredients = await Ingredient.find({
            tipo_ing_nom: { $regex: query, $options: 'i' } // Búsqueda insensible a mayúsculas
        });
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
