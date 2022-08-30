import apiService from './apiService.js';

const moviesUrl = 'https://api.tvmaze.com/shows';
const container = document.querySelector('.flex-container');
const detailImage = document.querySelector('.modal-detail-img');
const detailText = document.querySelector('.modal-detail-text');

const ShowItemTemplate = document.querySelector('.template #show-item-template');

const buildShowItemElement = (movie) => {
  const ShowItemElement = ShowItemTemplate.cloneNode(true);

  ShowItemElement.id = `show-item-${movie.id}`;

  const imgElement = ShowItemElement.querySelector('.img-container img');
  imgElement.src = movie.image;
  imgElement.alt = `${movie.title} Poster`;

  const titleElement = ShowItemElement.querySelector('.title');
  titleElement.textContent = movie.title;

  const commentBtnElement = ShowItemElement.querySelector('.comment-btn');
  commentBtnElement.dataset.id = movie.id;

  return ShowItemElement;
};

const displayTvShows = async (movies) => {
  container.textContent = '';
  movies.forEach((movie) => {
    container.appendChild(buildShowItemElement(movie));
  });
};

const addModal = async () => {
  const modal = document.getElementById('myModal');
  const commentButtons = document.querySelectorAll('.comment');
  const closebutton = document.querySelector('.close');
  closebutton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  commentButtons.forEach((element) => {
    element.addEventListener('click', async () => {
      const id = element.getAttribute('data-id');
      const movieData = await apiService.getTvShow(`${moviesUrl}/${id}`);
      detailImage.innerHTML = `<img src = ${movieData.image}>`;
      detailText.innerHTML = `
<p> Name:${movieData.name}</p>
<p> Language:${movieData.language}</p>
<p> Type:${movieData.type}</p>
<p> Gener:${movieData.genress}</p>
<p> Average rating:${movieData.rating.average}</p>
<P>${movieData.summary}</p>
      `;
      modal.style.display = 'block';
    });
  });
};

export default { displayTvShows, addModal };
