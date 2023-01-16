if (JSON.parse(localStorage.getItem('auth')).auth === true) {
  window.location = 'orders.html';
}

const enter = document.querySelector('.auth__enter');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

enter.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('data/FrontendTest.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then((responseData) => {
      for (let user of responseData.users) {
        if (user.email === email.value && user.password === password.value) {
          localStorage.setItem('auth', JSON.stringify({
            auth: true,
            email: user.email,
            name: user.name
          }));
          window.location = 'orders.html';
        }
      }
      return responseData;
    })
})