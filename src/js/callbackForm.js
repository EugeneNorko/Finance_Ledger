const form = document.getElementById('callbackForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('emailError');

form.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();
  if (emailInput.value === '') {
    console.log('empty');
    return errorMessage.classList.add('show');
  }
  errorMessage.classList.remove('show');
  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => navigate('/thank-you/'))
    .catch(error => alert(error));
}
