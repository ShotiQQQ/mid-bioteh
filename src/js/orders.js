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