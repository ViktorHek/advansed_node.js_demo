'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Game of Tron',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Game of Tron 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {},
}
