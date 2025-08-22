'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Encripta las contraseñas
    const hashedPassword = await bcrypt.hash('123456', 10);

    await queryInterface.bulkInsert('users', [
      {
        userName: 'admin',
        email: 'admin@example.com',
        password: hashedPassword,
        phone: '3001112233',
        birthday: new Date('1990-01-01'),
        document: '12345678',
        gender: 'Masculino',
        state: 'Activo',
        rolId: 1, // Asegúrate de que exista el rol con ID 1
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'maria',
        email: 'maria@example.com',
        password: hashedPassword,
        phone: '3105556677',
        birthday: new Date('1995-06-15'),
        document: '87654321',
        gender: 'Femenino',
        state: 'Activo',
        rolId: 3, // Usuario
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'jose.organizer',
        email: 'jose@example.com',
        password: hashedPassword,
        phone: '3208889990',
        birthday: new Date('1988-03-25'),
        document: '11223344',
        gender: 'Masculino',
        state: 'Activo',
        rolId: 2, // Organizador
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
