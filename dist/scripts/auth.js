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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhdXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpLmF1dGggPT09IHRydWUpIHtcclxuICB3aW5kb3cubG9jYXRpb24gPSAnb3JkZXJzLmh0bWwnO1xyXG59XHJcblxyXG5jb25zdCBlbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoX19lbnRlcicpO1xyXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xyXG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xyXG5cclxuZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBmZXRjaCgnZGF0YS9Gcm9udGVuZFRlc3QuanNvbicsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICBmb3IgKGxldCB1c2VyIG9mIHJlc3BvbnNlRGF0YS51c2Vycykge1xyXG4gICAgICAgIGlmICh1c2VyLmVtYWlsID09PSBlbWFpbC52YWx1ZSAmJiB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGF1dGg6IHRydWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWVcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdvcmRlcnMuaHRtbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICB9KVxyXG59KSJdLCJmaWxlIjoiYXV0aC5qcyJ9
