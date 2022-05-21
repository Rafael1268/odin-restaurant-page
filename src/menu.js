function loadMenu() {
  const menu = document.createElement('div');
  menu.id = 'menu';

  const logo = document.createElement('img');
  logo.src = 'img/logo.png';
  logo.alt = 'Bella Donna';

  const main = document.getElementById('main');
  main.appendChild(menu);
  menu.appendChild(logo);

  menuItem('Margherita', '$9.99', 'Tomatosauce, mozzarella and fresh basil');
  menuItem('Vesuvio', '$12.99', 'Spicy salami, gorgonzola, tomatosauce and mozzarella');
  menuItem('Italia', '$14.99', 'Pancetta, tomatosauce, mozzarella and spinach');
  menuItem('Calzone', '$14.99', 'Mushrooms, salami, ham, tomatosauce and mozzarella');
  menuItem('Salami', '$10.99', 'Salami, tomatosauce and mozzarella');
  menuItem('Napoletana', '$14.99', 'Anchovies, capers, olives, tomatosauce and mozzarella');
  menuItem('Salmone', '$14.99', 'Smoked salmon, rocket, tomatosauce and mozzarella');
};

function menuItem(name, price, description) {
  const menuItem = document.createElement('div');
  menuItem.id = 'menuItem';
  const compTitle = document.createElement('div');
  const title = document.createElement('h2');
  title.innerText = name;
  const pricing = document.createElement('h3');
  pricing.innerText = price;
  const desc = document.createElement('p');
  desc.innerText = description;

  compTitle.appendChild(title);
  compTitle.appendChild(pricing);
  menuItem.appendChild(compTitle);
  menuItem.appendChild(desc);

  const menu = document.getElementById('menu');
  menu.appendChild(menuItem);
}

export { loadMenu };