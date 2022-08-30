import apiService from './apiService.js';

const moviesUrl = 'https://api.tvmaze.com/shows';
const container = document.querySelector('.flex-container');
const detailImage = document.querySelector('.modal-detail-img');
const detailText = document.querySelector('.modal-detail-text');

const displayTvShows = async (movies) => {
  let filmData = '';
  movies.forEach((e) => {
    filmData += `
<div class="shows">

   <div class="img-container">
     <img src="${e.image}" alt="photo">
   </div>
   <div id="1">
     ${e.id}  ${e.name}
   </div>
   <div class="reaction">
     <button>like</button>
     <button class="comment" data-id="${e.id}">comment</button>
   </div>
</div>
`;
  });
  container.innerHTML = filmData;
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
