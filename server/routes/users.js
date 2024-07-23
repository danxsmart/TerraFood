const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user');
const { sendPasswordResetEmail } = require('../utils/emailService');
const router = express.Router();

console.log('Rutas de usuario cargadas'); // Verificación adicional

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { usu_mail, usu_contra } = req.body;
    console.log('Datos recibidos:', usu_mail, usu_contra); // Log para depuración

    try {
        console.log('Realizando consulta a la colección usuarios'); // Verificación adicional
        const user = await User.findOne({ usu_mail });
        console.log('Usuario encontrado:', user); // Log para depuración

        if (!user) {
            console.log('Usuario no encontrado en la base de datos');
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(usu_contra, user.usu_contra);
        console.log('Contraseña válida:', isPasswordValid); // Log para depuración

        if (!isPasswordValid) {
            console.log('Contraseña incorrecta');
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        console.log('Token generado:', token); // Log para depuración
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error); // Log para depuración
        res.status(400).json({ message: error.message });
    }
});

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    const { usu_nombre, usu_mail, usu_contra } = req.body;
    console.log('Datos de registro recibidos:', usu_nombre, usu_mail, usu_contra); // Log para depuración

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ usu_mail });
        console.log('Usuario existente:', existingUser);
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(usu_contra, salt);
        console.log('Contraseña encriptada:', hashedPassword);

        // Crear un nuevo usuario
        const newUser = new User({
            usu_nombre,
            usu_mail,
            usu_contra: hashedPassword,
            usu_f_alt: new Date()
        });
        console.log('Nuevo usuario creado:', newUser);

        // Guardar el usuario en la base de datos
        await newUser.save();
        console.log('Usuario registrado con éxito:', newUser); // Log para depuración
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error en el registro:', error); // Log para depuración
        res.status(400).json({ message: error.message });
    }
});

// Ruta para solicitar restablecimiento de contraseña
router.post('/forgot-password', async (req, res) => {
    const { usu_mail } = req.body;
    console.log('Solicitud de restablecimiento de contraseña recibida para:', usu_mail);

    try {
        const user = await User.findOne({ usu_mail });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const resetToken = crypto.randomBytes(20).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1 hora a partir de ahora

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = resetTokenExpiry;
        await user.save();

        sendPasswordResetEmail(usu_mail, resetToken);
        res.status(200).json({ message: 'Correo de restablecimiento de contraseña enviado' });
    } catch (error) {
        console.error('Error en la solicitud de restablecimiento de contraseña:', error);
        res.status(400).json({ message: error.message });
    }
});

// Ruta para restablecer la contraseña
router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;
    console.log('Solicitud de restablecimiento de contraseña recibida con token:', token);

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Token de restablecimiento inválido o expirado' });
        }

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.usu_contra = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Contraseña restablecida con éxito' });
    } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
