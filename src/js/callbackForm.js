const form = document.getElementById('callbackForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('emailError');
const formModal = document.querySelector('.formModal');
const formModalCloseLink = document.querySelector('.formModal__link');

form.addEventListener('submit', formHandler);
formModalCloseLink.addEventListener('click', formModalHandler);

function formHandler(e) {
  e.preventDefault();
  if (emailInput.value === '') {
    return errorMessage.classList.add('show');
  }
  formModalHandler();
  errorMessage.classList.remove('show');
  form.reset();
}

function formModalHandler() {
  return formModal.classList.contains('show')
    ? formModal.classList.remove('show')
    : formModal.classList.add('show');
}
