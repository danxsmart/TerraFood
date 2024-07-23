const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    tipo_ing_nom: String,
    tipo_ing_des: String,
    tipo_id: Number
});

module.exports = mongoose.model('tipo_ing', ingredientSchema);
