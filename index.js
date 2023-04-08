function toggleNavVertical () {
  document.getElementById('top-nav').classList.toggle('vertical')
}

function openForm (dialogId) {
  document.getElementById(dialogId).showModal()
}

function closeForm (dialogId) {
  document.getElementById(dialogId).close()
}
