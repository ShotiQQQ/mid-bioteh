document.addEventListener('DOMContentLoaded', () => {

  const name = document.querySelector('.header__role');
  const email = document.querySelector('.header__email');
  const more = document.querySelector('.orders__more');
  const select = document.querySelector('.orders__sort');

  name.textContent = JSON.parse(localStorage.getItem('auth')).name;
  email.textContent = JSON.parse(localStorage.getItem('auth')).email;

  const exit = document.querySelector('.header__exit');

  exit.addEventListener('click', () => {
    localStorage.setItem('auth', JSON.stringify(false));
    window.location = 'index.html';
  });

  const content = document.querySelector('.orders__content');

  let orders = [];
  let sortedOrders = [];

  let count = 5;

  function handlerData(responseData, orders) {
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

      item.append(id, email, sum, date);
      orders.push(item);
    })
    for (let order of orders) {
      content.append(order);
    }
    if (orders.length === responseData.orders.length) {
      more.style = 'display: none';
    }
    return orders;
  }

  function getData(orders) {
    fetch('data/FrontendTest.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => response.json())
      .then((responseData) => {
        handlerData(responseData, orders);
      })
  }

  getData(orders);

  function deleteContent() {
    document.querySelectorAll('.orders__item--main').forEach((e) => {
      e.remove();
    });
  }

  function clearOrders() {
    orders = [];
  }
  console.log(orders)
  more.addEventListener('click', () => {
    deleteContent();
    clearOrders();
    count += 5;
    getData(orders);
  })

  select.addEventListener('change', () => {
    deleteContent();
    if (select.value === 'order') {
      clearOrders();
      getData(orders);
    } else if (select.value === 'email') {
      clearOrders();
    } else if (select.value === 'sum') {
      clearOrders();
    } else if (select.value === 'date') {
      clearOrders();
    };
  })
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JvbGUnKTtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2VtYWlsJyk7XHJcbiAgY29uc3QgbW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnNfX21vcmUnKTtcclxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzX19zb3J0Jyk7XHJcblxyXG4gIG5hbWUudGV4dENvbnRlbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpLm5hbWU7XHJcbiAgZW1haWwudGV4dENvbnRlbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpLmVtYWlsO1xyXG5cclxuICBjb25zdCBleGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fZXhpdCcpO1xyXG5cclxuICBleGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uID0gJ2luZGV4Lmh0bWwnO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyc19fY29udGVudCcpO1xyXG5cclxuICBsZXQgb3JkZXJzID0gW107XHJcbiAgbGV0IHNvcnRlZE9yZGVycyA9IFtdO1xyXG5cclxuICBsZXQgY291bnQgPSA1O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVyRGF0YShyZXNwb25zZURhdGEsIG9yZGVycykge1xyXG4gICAgcmVzcG9uc2VEYXRhLm9yZGVycy5tYXAoKG9yZGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggKyAxID4gY291bnQpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBjb25zdCBpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNvbnN0IHN1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnb3JkZXJzX19pdGVtJywgJ29yZGVyc19faXRlbS0tbWFpbicpO1xyXG5cclxuICAgICAgaWQudGV4dENvbnRlbnQgPSBvcmRlci5pZDtcclxuICAgICAgaWQuY2xhc3NMaXN0LmFkZCgnb3JkZXJzX19pZCcpO1xyXG5cclxuICAgICAgZW1haWwudGV4dENvbnRlbnQgPSBvcmRlci5lbWFpbDtcclxuICAgICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnb3JkZXJzX19lbWFpbCcpO1xyXG5cclxuICAgICAgc3VtLnRleHRDb250ZW50ID0gb3JkZXIuYW1vdW50O1xyXG4gICAgICBzdW0uY2xhc3NMaXN0LmFkZCgnb3JkZXJzX19zdW0nKTtcclxuXHJcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBvcmRlci5kYXRlO1xyXG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ29yZGVyc19fZGF0ZScpO1xyXG5cclxuICAgICAgaXRlbS5hcHBlbmQoaWQsIGVtYWlsLCBzdW0sIGRhdGUpO1xyXG4gICAgICBvcmRlcnMucHVzaChpdGVtKTtcclxuICAgIH0pXHJcbiAgICBmb3IgKGxldCBvcmRlciBvZiBvcmRlcnMpIHtcclxuICAgICAgY29udGVudC5hcHBlbmQob3JkZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9yZGVycy5sZW5ndGggPT09IHJlc3BvbnNlRGF0YS5vcmRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIG1vcmUuc3R5bGUgPSAnZGlzcGxheTogbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JkZXJzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGF0YShvcmRlcnMpIHtcclxuICAgIGZldGNoKCdkYXRhL0Zyb250ZW5kVGVzdC5qc29uJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICAgIGhhbmRsZXJEYXRhKHJlc3BvbnNlRGF0YSwgb3JkZXJzKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldERhdGEob3JkZXJzKTtcclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlQ29udGVudCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcnNfX2l0ZW0tLW1haW4nKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGUucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyT3JkZXJzKCkge1xyXG4gICAgb3JkZXJzID0gW107XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKG9yZGVycylcclxuICBtb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGVsZXRlQ29udGVudCgpO1xyXG4gICAgY2xlYXJPcmRlcnMoKTtcclxuICAgIGNvdW50ICs9IDU7XHJcbiAgICBnZXREYXRhKG9yZGVycyk7XHJcbiAgfSlcclxuXHJcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIGRlbGV0ZUNvbnRlbnQoKTtcclxuICAgIGlmIChzZWxlY3QudmFsdWUgPT09ICdvcmRlcicpIHtcclxuICAgICAgY2xlYXJPcmRlcnMoKTtcclxuICAgICAgZ2V0RGF0YShvcmRlcnMpO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3QudmFsdWUgPT09ICdlbWFpbCcpIHtcclxuICAgICAgY2xlYXJPcmRlcnMoKTtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0LnZhbHVlID09PSAnc3VtJykge1xyXG4gICAgICBjbGVhck9yZGVycygpO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3QudmFsdWUgPT09ICdkYXRlJykge1xyXG4gICAgICBjbGVhck9yZGVycygpO1xyXG4gICAgfTtcclxuICB9KVxyXG59KTsiXSwiZmlsZSI6Im9yZGVycy5qcyJ9
