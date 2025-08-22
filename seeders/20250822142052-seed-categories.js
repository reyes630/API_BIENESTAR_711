'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Música',
        description: 'Eventos relacionados con conciertos y festivales de música.',
        image: 'https://example.com/images/music.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Deportes',
        description: 'Eventos deportivos como fútbol, baloncesto, etc.',
        image: 'https://example.com/images/sports.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tecnología',
        description: 'Conferencias, meetups y ferias de tecnología.',
        image: 'https://example.com/images/tech.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arte y Cultura',
        description: 'Exhibiciones, obras de teatro y otros eventos culturales.',
        image: 'https://example.com/images/art.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
