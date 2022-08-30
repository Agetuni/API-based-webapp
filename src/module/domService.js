import apiService from './apiService.js';

const moviesUrl = 'https://api.tvmaze.com/shows';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Sff4TpvfhVNiDO6YpeWb/comments';
const container = document.querySelector('.flex-container');
const detailImage = document.querySelector('.modal-detail-img');
const detailText = document.querySelector('.modal-detail-text');
const submit = document.querySelector('.form-add-submit');

const displayComments = async (id) => {
  const comments = await apiService.getComments(commentUrl, id);
  const commentContainer = document.querySelector('.modal-view-comment');
  const commentCounter = document.querySelector('.comment-counter');
  commentCounter.innerHTML = `(${comments.List.length})`;
  let htmlValue = '';
  comments.List.forEach((element) => {
    htmlValue += `<textarea name="" id="" cols="50" rows="1" disabled>"${element.comment}"- ${element.username}</textarea>`;
  });
  commentContainer.innerHTML = htmlValue;
};
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
      await displayComments(id);
      submit.setAttribute('data-id', id);
      detailImage.innerHTML = `<img src = ${movieData.image}>`;
      detailText.innerHTML = `
<p> Name:${movieData.name} </p>
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

const addCommentEventListner = async () => {
  const name = document.querySelector('.form-add-name');
  const comment = document.querySelector('.form-add-comment');
  submit.addEventListener('click', async () => {
    const id = submit.getAttribute('data-id');
    await apiService.comment(commentUrl, id, name.value, comment.value);
    await displayComments(id);
    name.value = '';
    comment.value = '';
  });
};

export default { displayTvShows, addModal, addCommentEventListner };
