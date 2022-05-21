import { loadHome } from './home';
import { loadMenu } from './menu';

function loadMain() {
  const nav = document.createElement('nav');
  const navUl = document.createElement('ul');

  const navHome = document.createElement('li');
  navHome.innerHTML = '<a href="#">Home</a>';
  navHome.addEventListener('click', () => {
    clearMain();
    loadHome();
  });

  const navMenu = document.createElement('li');
  navMenu.innerHTML = '<a href="#">Menu</a>';
  navMenu.addEventListener('click', () => {
    clearMain();
    loadMenu();
  });

  const navAbout = document.createElement('li');
  navAbout.innerHTML = '<a href="#">About</a>';
  navAbout.addEventListener('click', () => {
    clearMain();
  });

  nav.appendChild(navUl);
  navUl.appendChild(navHome);
  navUl.appendChild(navMenu);
  navUl.appendChild(navAbout);

  const content = document.getElementById('content');
  content.appendChild(nav);

  const main = document.createElement('div');
  main.id = 'main';

  content.appendChild(main);
  loadHome();

  const footer = document.createElement('div');
  footer.id = 'footer';
  const footerContact = document.createElement('div');
  footerContact.innerHTML = '<h3>Contact</h3><ul><li>Bella Donna Portland</li><li>Oakland street 40</li><li>NC29190 Portland</li><li>0613652436</li></ul>';
  const footerInfo = document.createElement('div');
  footerInfo.innerHTML = '<h3>Legal</h3><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms And Conditions</a></li><li><a href="#">Cookie Policy</a></li></ul>';

  footer.appendChild(footerContact);
  footer.appendChild(footerInfo);

  content.appendChild(footer);
};

function clearMain() {
  const main = document.getElementById('main');
  main.innerHTML = '';
};

export { loadMain };