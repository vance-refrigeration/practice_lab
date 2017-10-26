
const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#bookbutton').on('click', onGetBooks)
}
