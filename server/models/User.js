const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definimos el esquema del usuario
const UserSchema = new Schema({
    usu_nombre: {
        type: String,
        required: true
    },
    usu_mail: {
        type: String,
        required: true,
        unique: true
    },
    usu_contra: {
        type: String,
        required: true
    },
    usu_f_alt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

module.exports = mongoose.model('usuarios', UserSchema);
