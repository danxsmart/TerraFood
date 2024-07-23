const bcrypt = require('bcryptjs');

// La contraseña que deseas encriptar
const password = '1234';

// Número de rondas de encriptación (cuanto mayor es el número, más seguro, pero también más lento)
const saltRounds = 12;

// Encriptar la contraseña
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error encriptando la contraseña:', err);
  } else {
    console.log('Contraseña encriptada:', hash);
  }
});
