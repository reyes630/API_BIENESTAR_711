'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('events', [
      {
        name: 'Concierto Rock Bogotá',
        description: 'Una noche llena de rock con bandas nacionales e internacionales.',
        startDate: new Date('2025-09-10T19:00:00'),
        endDate: new Date('2025-09-10T23:00:00'),
        state: 'pendiente',
        maxCapacity: 5000,
        categoryId: 1, // Música
        userId: 3,     // Organizador José
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Feria de Tecnología 2025',
        description: 'Últimas innovaciones y lanzamientos del mundo tech.',
        startDate: new Date('2025-10-05T10:00:00'),
        endDate: new Date('2025-10-07T18:00:00'),
        state: 'pendiente',
        maxCapacity: 8000,
        categoryId: 3, // Tecnología
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carrera 10K Medellín',
        description: 'Participa en la tradicional carrera de la ciudad.',
        startDate: new Date('2025-11-20T06:00:00'),
        endDate: new Date('2025-11-20T10:00:00'),
        state: 'pendiente',
        maxCapacity: 10000,
        categoryId: 2, // Deportes
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events', null, {});
  }
};
