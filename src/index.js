import './style.scss';
import apiService from './module/apiService.js';
import domService from './module/domService.js';

const moviesUrl = 'https://api.tvmaze.com/shows';

const initTemplate = async () => {
  const movies = await apiService.getTvShows(moviesUrl);
  await domService.displayTvShows(movies.list);
};

const init = async () => {
  initTemplate();
};

window.addEventListener('load', init);
