import './style.scss';
import apiService from './module/apiService.js';
import domService from './module/domService.js';

const moviesUrl = 'https://api.tvmaze.com/shows';

const initTemplate = () => {
  const titleTemplateElement = document.getElementById('title-template');
  const newtitleElement = titleTemplateElement.cloneNode(true);

  newtitleElement.textContent = 'API-based-webap';

  document.querySelector('main').appendChild(newtitleElement);
};

const init = async () => {
  initTemplate();
};
window.addEventListener('load', init);
const movies = await apiService.getTvShows(moviesUrl);
await domService.displayTvShows(movies.list);
domService.addModal();
