const input = document.querySelector('.password-input');
const error = document.querySelector('.error-message');
let timeout = 0;

const showError = message => {
  error.style.color = '#C91E1E';
  error.innerHTML = message;
};
const showPass = message => {
  error.style.color = '#119822';
  error.innerHTML = message;
};
const emptyInput = () => (document.getElementById('message').innerHTML = ``);

const passwordValidation = password => {
  const lowerCase = new RegExp('^(?=.*[a-z])');
  const upperCase = new RegExp('^(?=.*[A-Z])');
  const specialCaracters = new RegExp('^(?=.*[!@$%^&*])');
  const numeric = new RegExp('^(?=.*[0-9])');

  if (password == null || password.length === 0) {
    emptyInput();
  } else if (password.length < 6) {
    showError('Your password must be at least 6 characters long');
  } else if (!lowerCase.test(password)) {
    showError('Your password must include at least one lowercase character ');
  } else if (!upperCase.test(password)) {
    showError('Your password must include at least one uppercase character  ');
  } else if (!specialCaracters.test(password)) {
    showError(' Your password must include at least one special character');
  } else if (!numeric.test(password)) {
    showError(' Your password must include at least one number ');
  } else {
    showPass('Strong Password');
  }
};

input.addEventListener('keyup', event => {
  const password = event.target.value;
  clearTimeout(timeout);
  timeout = setTimeout(() => passwordValidation(password), 400);
});

//  User

const showMessage = message =>
  (document.querySelector('#wrong-user').innerHTML = message);
const accessToPage = () =>
  (location.href =
    'http://127.0.0.1:5500/Projects/Powercoders/powercoders.html');

const checkInputs = () => {
  const user = `Poco`;
  const password = `Powercoders`;
  const guest = document.getElementById('name-input').value;
  const guestPassword = document.getElementById('password-input').value;
  if (
    (guest == null || guest == false) &&
    (guestPassword == null || guestPassword == false)
  ) {
    showMessage('Make sure you insserted a name and a password');
  } else if (guest != user) {
    showMessage("Sorry you're not the right user");
  } else if (guestPassword !== password) {
    showMessage('Sorry Password is Wrong');
  } else if (guestPassword == password && guest == user) {
    accessToPage();
  }
};
