const app = require('../../app')
const supertest = require('supertest')
// const expect = require('chai').expect
const { expect } = require('chai')

let server, request, response

before(done => {
  server = app.listen(done)
  request = supertest.agent(server)
})

after(done => {
  server.close(done)
})

describe('GET /books', () => {

  beforeEach(async () => {
    response = await request.get('/books')
  })

  it('is expected to respond with status 200', () => {
    expect(response.status)
      .to.equal(200)
  })

  it('is expected to return an index of books', () => {
    const expectedResponse = {
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
    expect(response.body)
      .to.eql(expectedResponse)
  });
})