const showBooksTemplate = require('../templates/books.handlebars')

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').append(showBooksHtml)
}

const failure = (error) => {
  console.error(error)
}
