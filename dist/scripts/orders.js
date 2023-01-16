document.addEventListener('DOMContentLoaded', () => {

  const name = document.querySelector('.header__role');
  const email = document.querySelector('.header__email');
  const more = document.querySelector('.orders__more');

  name.textContent = JSON.parse(localStorage.getItem('auth')).name;
  email.textContent = JSON.parse(localStorage.getItem('auth')).email;

  const exit = document.querySelector('.header__exit');

  exit.addEventListener('click', () => {
    localStorage.setItem('auth', JSON.stringify(false));
    window.location = 'index.html';
  });

  const content = document.querySelector('.orders__content');

  let orders = [];

  let count = 5;

  function handlerData(responseData) {
    responseData.orders.map((order, index) => {
      if (index + 1 > count) {
        return responseData;
      }
      const item = document.createElement('li');
      const id = document.createElement('span');
      const email = document.createElement('span');
      const sum = document.createElement('span');
      const date = document.createElement('span');

      item.classList.add('orders__item', 'orders__item--main');

      id.textContent = order.id;
      id.classList.add('orders__id');

      email.textContent = order.email;
      email.classList.add('orders__email');

      sum.textContent = order.amount;
      sum.classList.add('orders__sum');

      date.textContent = order.date;
      date.classList.add('orders__date');

      orders.push(item);

      item.append(id, email, sum, date);

      content.append(item);
    })
    if (orders.length === responseData.orders.length) {
      more.style = 'display: none';
    }
    return responseData;
  }

  function getData() {
    fetch('data/FrontendTest.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => response.json())
      .then((responseData) => {
        handlerData(responseData);
      })
  }

  getData();

  more.addEventListener('click', () => {
    document.querySelectorAll('.orders__item--main').forEach((e) => {
      e.remove();
    });
    orders = [];
    count += 5;
    getData();
  })
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JvbGUnKTtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2VtYWlsJyk7XHJcbiAgY29uc3QgbW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnNfX21vcmUnKTtcclxuXHJcbiAgbmFtZS50ZXh0Q29udGVudCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSkubmFtZTtcclxuICBlbWFpbC50ZXh0Q29udGVudCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSkuZW1haWw7XHJcblxyXG4gIGNvbnN0IGV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19leGl0Jyk7XHJcblxyXG4gIGV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnaW5kZXguaHRtbCc7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzX19jb250ZW50Jyk7XHJcblxyXG4gIGxldCBvcmRlcnMgPSBbXTtcclxuXHJcbiAgbGV0IGNvdW50ID0gNTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlckRhdGEocmVzcG9uc2VEYXRhKSB7XHJcbiAgICByZXNwb25zZURhdGEub3JkZXJzLm1hcCgob3JkZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCArIDEgPiBjb3VudCkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGNvbnN0IGlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY29uc3Qgc3VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdvcmRlcnNfX2l0ZW0nLCAnb3JkZXJzX19pdGVtLS1tYWluJyk7XHJcblxyXG4gICAgICBpZC50ZXh0Q29udGVudCA9IG9yZGVyLmlkO1xyXG4gICAgICBpZC5jbGFzc0xpc3QuYWRkKCdvcmRlcnNfX2lkJyk7XHJcblxyXG4gICAgICBlbWFpbC50ZXh0Q29udGVudCA9IG9yZGVyLmVtYWlsO1xyXG4gICAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdvcmRlcnNfX2VtYWlsJyk7XHJcblxyXG4gICAgICBzdW0udGV4dENvbnRlbnQgPSBvcmRlci5hbW91bnQ7XHJcbiAgICAgIHN1bS5jbGFzc0xpc3QuYWRkKCdvcmRlcnNfX3N1bScpO1xyXG5cclxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IG9yZGVyLmRhdGU7XHJcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnb3JkZXJzX19kYXRlJyk7XHJcblxyXG4gICAgICBvcmRlcnMucHVzaChpdGVtKTtcclxuXHJcbiAgICAgIGl0ZW0uYXBwZW5kKGlkLCBlbWFpbCwgc3VtLCBkYXRlKTtcclxuXHJcbiAgICAgIGNvbnRlbnQuYXBwZW5kKGl0ZW0pO1xyXG4gICAgfSlcclxuICAgIGlmIChvcmRlcnMubGVuZ3RoID09PSByZXNwb25zZURhdGEub3JkZXJzLmxlbmd0aCkge1xyXG4gICAgICBtb3JlLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICBmZXRjaCgnZGF0YS9Gcm9udGVuZFRlc3QuanNvbicsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICBoYW5kbGVyRGF0YShyZXNwb25zZURhdGEpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpO1xyXG5cclxuICBtb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyc19faXRlbS0tbWFpbicpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgZS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgb3JkZXJzID0gW107XHJcbiAgICBjb3VudCArPSA1O1xyXG4gICAgZ2V0RGF0YSgpO1xyXG4gIH0pXHJcbn0pOyJdLCJmaWxlIjoib3JkZXJzLmpzIn0=
