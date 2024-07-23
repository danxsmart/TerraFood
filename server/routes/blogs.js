const express = require('express');
const router = express.Router();
const Blog = require('../models/blog'); // Asegúrate de tener un modelo de Blog

// Ruta para obtener todos los blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Ruta para agregar un nuevo blog
router.post('/blogs', async (req, res) => {
    const { blg_tit, blg_des, usu_mail, blg_fecha } = req.body;

    const nuevoBlog = new Blog({
        blg_tit,
        blg_des,
        usu_mail,
        blg_fecha,
        blg_id: Math.floor(Math.random() * 1000000) // Generar un ID aleatorio
    });

    try {
        const blogGuardado = await nuevoBlog.save();
        res.status(201).json(blogGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
