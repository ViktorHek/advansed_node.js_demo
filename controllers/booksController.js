
const models = require('../models')
const booksController = {
  async index(request, response) {
    const collection = await models.Book.findAll({
      include: [
        {
          model: models.Author,
          as: 'author',
          attributes: {exclude: ['createdAt', 'updatedAt', 'id']}

        }
      ],
      attributes: ['title']
    })
    response.json({books: collection})
  },
  show() {
    
  }
}

module.exports = booksController