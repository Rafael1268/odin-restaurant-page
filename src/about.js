function loadAbout() {
  const about = document.createElement('div');
  about.id = 'about';
  const title = document.createElement('h1');
  title.textContent = 'About Bella Donna';
  const info = document.createElement('p');
  info.textContent = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat et incidunt accusantium dolores possimus aspernatur vero eaque totam, amet eligendi placeat cupiditate numquam provident laboriosam nisi at culpa itaque esse, facilis dignissimos, dolorem quae! Hic sint quas alias at! lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat et incidunt accusantium dolores possimus aspernatur vero eaque totam, amet eligendi placeat cupiditate numquam provident laboriosam nisi at culpa itaque esse, facilis dignissimos, dolorem quae! Hic sint quas alias at! facilis dignissimos';

  const main = document.getElementById('main');
  main.appendChild(about);
  about.appendChild(title);
  about.appendChild(info);
};

export { loadAbout };