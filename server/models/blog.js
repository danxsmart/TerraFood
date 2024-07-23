const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blg_des: String,
    blg_fecha: Date,
    blg_tit: String,
    usu_mail: String,
    blg_id: Number
});

module.exports = mongoose.model('Blog', blogSchema);
