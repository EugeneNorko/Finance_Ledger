const form = document.getElementById('callbackForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('emailError');

form.addEventListener('submit', formHandler);

function formHandler(e) {
  e.preventDefault();
  if (emailInput.value === '') {
    return errorMessage.classList.add('show');
  }
  const myForm = e.target;
  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => navigate('/thank-you/'))
    .catch(error => alert(error));
  errorMessage.classList.remove('show');
  form.reset();
}
