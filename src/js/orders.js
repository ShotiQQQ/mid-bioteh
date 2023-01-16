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