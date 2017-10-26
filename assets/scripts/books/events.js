const ui = require('./ui')
const api = require('../api')

const onGetBooks = (event) => {
  console.log('onGetBooks invoked')
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  // $('#bookbutton').on('click', onGetBooks)
}

module.exports = {
  onGetBooks
}
