const showBooksTemplate = require('../templates/books.handlebars')

const getBooksSuccess = (data) => {
  console.log('getBooksSuccess invoked, data is', data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  console.log('New HTML is', showBooksHtml)
  $('#content').append(showBooksHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  failure
}
