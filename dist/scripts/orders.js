document.addEventListener('DOMContentLoaded', () => {

  const name = document.querySelector('.header__role');
  const email = document.querySelector('.header__email');
  const more = document.querySelector('.orders__more');
  const select = document.querySelector('.orders__sort');
  const content = document.querySelector('.orders__content');
  const exit = document.querySelector('.header__exit');

  name.textContent = JSON.parse(localStorage.getItem('auth')).name;
  email.textContent = JSON.parse(localStorage.getItem('auth')).email;

  exit.addEventListener('click', () => {
    localStorage.setItem('auth', JSON.stringify(false));
    window.location = 'index.html';
  });

  let orders = [];
  let sortedOrders = [];

  let count = 5;

  function handlerData(responseData, data) {
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
    for (let order of data) {
      content.append(order);
    }
    if (orders.length === responseData.orders.length) {
      more.style = 'display: none';
    }
    return data;
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
      sortedOrders = orders.sort((a, b) => a.children[1].textContent > b.children[1].textContent ? 1 : -1);
      clearOrders();
      getData(sortedOrders);
    } else if (select.value === 'sum') {
      sortedOrders = orders.sort((a, b) => +a.children[2].textContent - +b.children[2].textContent);
      clearOrders();
      getData(sortedOrders);
    } else if (select.value === 'date') {
      sortedOrders = orders.sort((a, b) => Date.parse(a.children[3].textContent) - Date.parse(b.children[3].textContent));
      clearOrders();
      getData(sortedOrders);
    };
  })
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JvbGUnKTtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2VtYWlsJyk7XHJcbiAgY29uc3QgbW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnNfX21vcmUnKTtcclxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzX19zb3J0Jyk7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnNfX2NvbnRlbnQnKTtcclxuICBjb25zdCBleGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fZXhpdCcpO1xyXG5cclxuICBuYW1lLnRleHRDb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKS5uYW1lO1xyXG4gIGVtYWlsLnRleHRDb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKS5lbWFpbDtcclxuXHJcbiAgZXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdpbmRleC5odG1sJztcclxuICB9KTtcclxuXHJcbiAgbGV0IG9yZGVycyA9IFtdO1xyXG4gIGxldCBzb3J0ZWRPcmRlcnMgPSBbXTtcclxuXHJcbiAgbGV0IGNvdW50ID0gNTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlckRhdGEocmVzcG9uc2VEYXRhLCBkYXRhKSB7XHJcbiAgICByZXNwb25zZURhdGEub3JkZXJzLm1hcCgob3JkZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCArIDEgPiBjb3VudCkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGNvbnN0IGlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY29uc3Qgc3VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdvcmRlcnNfX2l0ZW0nLCAnb3JkZXJzX19pdGVtLS1tYWluJyk7XHJcblxyXG4gICAgICBpZC50ZXh0Q29udGVudCA9IG9yZGVyLmlkO1xyXG4gICAgICBpZC5jbGFzc0xpc3QuYWRkKCdvcmRlcnNfX2lkJyk7XHJcblxyXG4gICAgICBlbWFpbC50ZXh0Q29udGVudCA9IG9yZGVyLmVtYWlsO1xyXG4gICAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdvcmRlcnNfX2VtYWlsJyk7XHJcblxyXG4gICAgICBzdW0udGV4dENvbnRlbnQgPSBvcmRlci5hbW91bnQ7XHJcbiAgICAgIHN1bS5jbGFzc0xpc3QuYWRkKCdvcmRlcnNfX3N1bScpO1xyXG5cclxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IG9yZGVyLmRhdGU7XHJcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnb3JkZXJzX19kYXRlJyk7XHJcblxyXG4gICAgICBpdGVtLmFwcGVuZChpZCwgZW1haWwsIHN1bSwgZGF0ZSk7XHJcbiAgICAgIG9yZGVycy5wdXNoKGl0ZW0pO1xyXG4gICAgfSlcclxuICAgIGZvciAobGV0IG9yZGVyIG9mIGRhdGEpIHtcclxuICAgICAgY29udGVudC5hcHBlbmQob3JkZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9yZGVycy5sZW5ndGggPT09IHJlc3BvbnNlRGF0YS5vcmRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIG1vcmUuc3R5bGUgPSAnZGlzcGxheTogbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldERhdGEob3JkZXJzKSB7XHJcbiAgICBmZXRjaCgnZGF0YS9Gcm9udGVuZFRlc3QuanNvbicsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICBoYW5kbGVyRGF0YShyZXNwb25zZURhdGEsIG9yZGVycyk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXREYXRhKG9yZGVycyk7XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZUNvbnRlbnQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXJzX19pdGVtLS1tYWluJykuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBlLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhck9yZGVycygpIHtcclxuICAgIG9yZGVycyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgbW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRlbGV0ZUNvbnRlbnQoKTtcclxuICAgIGNsZWFyT3JkZXJzKCk7XHJcbiAgICBjb3VudCArPSA1O1xyXG4gICAgZ2V0RGF0YShvcmRlcnMpO1xyXG4gIH0pXHJcblxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBkZWxldGVDb250ZW50KCk7XHJcbiAgICBpZiAoc2VsZWN0LnZhbHVlID09PSAnb3JkZXInKSB7XHJcbiAgICAgIGNsZWFyT3JkZXJzKCk7XHJcbiAgICAgIGdldERhdGEob3JkZXJzKTtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0LnZhbHVlID09PSAnZW1haWwnKSB7XHJcbiAgICAgIHNvcnRlZE9yZGVycyA9IG9yZGVycy5zb3J0KChhLCBiKSA9PiBhLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID4gYi5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA/IDEgOiAtMSk7XHJcbiAgICAgIGNsZWFyT3JkZXJzKCk7XHJcbiAgICAgIGdldERhdGEoc29ydGVkT3JkZXJzKTtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0LnZhbHVlID09PSAnc3VtJykge1xyXG4gICAgICBzb3J0ZWRPcmRlcnMgPSBvcmRlcnMuc29ydCgoYSwgYikgPT4gK2EuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgLSArYi5jaGlsZHJlblsyXS50ZXh0Q29udGVudCk7XHJcbiAgICAgIGNsZWFyT3JkZXJzKCk7XHJcbiAgICAgIGdldERhdGEoc29ydGVkT3JkZXJzKTtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0LnZhbHVlID09PSAnZGF0ZScpIHtcclxuICAgICAgc29ydGVkT3JkZXJzID0gb3JkZXJzLnNvcnQoKGEsIGIpID0+IERhdGUucGFyc2UoYS5jaGlsZHJlblszXS50ZXh0Q29udGVudCkgLSBEYXRlLnBhcnNlKGIuY2hpbGRyZW5bM10udGV4dENvbnRlbnQpKTtcclxuICAgICAgY2xlYXJPcmRlcnMoKTtcclxuICAgICAgZ2V0RGF0YShzb3J0ZWRPcmRlcnMpO1xyXG4gICAgfTtcclxuICB9KVxyXG59KTsiXSwiZmlsZSI6Im9yZGVycy5qcyJ9
