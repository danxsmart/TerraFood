const nodemailer = require('nodemailer');

// Configura el transportador de nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar otros servicios como Outlook, Yahoo, etc.
    auth: {
        user: 'your-email@gmail.com', // Reemplaza con tu correo
        pass: 'your-email-password'   // Reemplaza con tu contraseña
    }
});

const sendPasswordResetEmail = (to, resetToken) => {
    const mailOptions = {
        from: 'your-email@gmail.com', // Reemplaza con tu correo
        to: to,
        subject: 'Restablecimiento de contraseña',
        text: `Para restablecer tu contraseña, haz clic en el siguiente enlace: http://localhost:3000/reset-password?token=${resetToken}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error al enviar el correo:', error);
        }
        console.log('Correo enviado:', info.response);
    });
};

module.exports = { sendPasswordResetEmail };
