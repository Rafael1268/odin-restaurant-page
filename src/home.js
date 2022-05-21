function loadHome() {
  const home = document.createElement('div');
  home.id = 'mainContainer';
  const logo = document.createElement('img');
  logo.src = 'img/logo.png';
  logo.alt = 'Bella Donna';
  const info = document.createElement('p');
  info.textContent = 'Bella Donna is an italian restaurant started by lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat et incidunt accusantium dolores possimus aspernatur vero eaque totam, amet eligendi placeat cupiditate numquam provident laboriosam nisi at culpa itaque esse, facilis dignissimos, dolorem quae! Hic sint quas alias at!'

  const main = document.getElementById('main');
  main.appendChild(home);
  home.appendChild(logo);
  home.appendChild(info);
};

export { loadHome };