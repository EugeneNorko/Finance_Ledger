const form = document.getElementById('callbackForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('emailError');

form.addEventListener('submit', formHandler);

function formHandler(e) {
  e.preventDefault();
  if (emailInput.value === '') {
    return errorMessage.classList.add('show');
  }
  errorMessage.classList.remove('show');
  form.reset();
}
