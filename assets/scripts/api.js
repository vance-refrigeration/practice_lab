'use strict'

const config = require('./config')

const getBooks = function () {
  console.log('getBooks API invoked')
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET'
  })
}

module.exports = {
  getBooks
}
