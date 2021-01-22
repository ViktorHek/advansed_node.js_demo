'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'Books', 
      'authorId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Authors',
          as: 'author',
          key: 'id'
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.removeColumn('Books', 'authirId');
    
  },
}
