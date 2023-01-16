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