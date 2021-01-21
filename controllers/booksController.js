

const booksController = {
  index(request, response) {
    const collection = {
      books: [
        {
          title: 'Game of tron', 
          author: 'George RR'
        },
        {
          title: 'Game of tron 2', 
          author: 'Reorge GG'
        }
      ]
    }
    response.json(collection)
  },
  show() {
    
  }
}

module.exports = booksController