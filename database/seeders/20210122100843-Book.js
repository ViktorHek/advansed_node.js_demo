'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          name: "George RR",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )

    const authors = await queryInterface.sequelize.query(
      'SELECT id FROM "Authors"'
    )

    const authorsRows = authors[0]

    await queryInterface.bulkInsert('Books', [
      {
        title: 'Game of Tron',
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: authorsRows[0].id
      },
      {
        title: 'Game of Tron 2',
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: authorsRows[0].id
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
    await queryInterface.bulkDelete('Authors', null, {})
  },
}
