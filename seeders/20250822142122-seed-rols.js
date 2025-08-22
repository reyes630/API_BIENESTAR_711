'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('rols', [
      {
        name: 'Corrdinador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Intructor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aprendiz',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rols', null, {});
  }
};
   