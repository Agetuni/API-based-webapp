import apiService from './apiService.js';

const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Sff4TpvfhVNiDO6YpeWb/comments';

const container = document.querySelector('.flex-container');

const ShowItemTemplate = document.querySelector('.template #show-item-template');
const ShowModalTemplate = document.querySelector('.template #show-modal-template');
const modalContentUserCommentTemplate = document.querySelector('.template #modal-content-user-comment-template');

const buildDetailTextElement = (detailTextElement, movie) => {
  const titleElement = detailTextElement.querySelector('.name');
  titleElement.textContent = movie.name;

  const languageElement = detailTextElement.querySelector('.language');
  languageElement.textContent = movie.language;

  const genresElement = detailTextElement.querySelector('.genres');
  genresElement.textContent = movie.genres;

  const ratingElement = detailTextElement.querySelector('.rating');
  ratingElement.textContent = movie.rating;

  const typeElement = detailTextElement.querySelector('.type');
  typeElement.innerHTML = movie.type;

  const summaryElement = detailTextElement.querySelector('.summary');
  summaryElement.innerHTML = movie.summary;
};

const buildDetailcommentElement = (detailcommentElement, movie) => {
  const comentCounter = detailcommentElement.querySelector('.comment-counter');
  comentCounter.textContent = '( Loading... )';

  const comentList = detailcommentElement.querySelector('.view-comment');
  const LoadingdivElement = document.createElement('div');
  LoadingdivElement.classList.add('loading-coment-item');
  LoadingdivElement.textContent = '( Loading... )';

  const comentSubmitBtn = detailcommentElement.querySelector('.submit-comment-btn');
  comentSubmitBtn.disabled = true;

  apiService.getComments(commentUrl, movie.id).then((CommentList) => {
    comentList.innerHTML = '';
    comentSubmitBtn.disabled = false;
    comentCounter.textContent = `( ${CommentList.List.length} )`;
    CommentList.List.forEach((comment) => {
      const modalContentUserCommentElement = modalContentUserCommentTemplate.cloneNode(true);
      modalContentUserCommentElement.id = `modal-content-user-comment-${comment.item_id}`;

      const userName = modalContentUserCommentElement.querySelector('.user h4');
      userName.textContent = comment.username;

      const commentContent = modalContentUserCommentElement.querySelector('.comment-content p');
      commentContent.textContent = comment.comment;

      comentList.appendChild(modalContentUserCommentElement);
    });

    const commentForm = detailcommentElement.querySelector('form.add-comment');
    commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const CommentEntries = Object.fromEntries(data.entries());

      await apiService.comment(
        commentUrl,
        movie.id,
        CommentEntries.name,
        CommentEntries.comment,
      );

      buildDetailcommentElement(detailcommentElement, movie);
    });
  });

  comentList.appendChild(LoadingdivElement);
};

const buildModal = (movie) => {
  const ShowModalElement = ShowModalTemplate.cloneNode(true);

  ShowModalElement.id = `show-modal-${movie.id}`;

  ShowModalElement.querySelector('span.close').addEventListener('click', () => {
    ShowModalElement.remove();
  });

  ShowModalElement.addEventListener('click', (e) => {
    if (e.target === ShowModalElement) ShowModalElement.remove();
    else e.stopPropagation();
  });

  const imgElement = document.createElement('img');
  imgElement.src = movie.image;
  imgElement.alt = `${movie.title} Poster`;

  ShowModalElement.querySelector('.modal-detail-img').appendChild(imgElement);

  const detailTextElement = ShowModalElement.querySelector('.modal-detail-text');
  buildDetailTextElement(detailTextElement, movie);

  const detailcommentElement = ShowModalElement.querySelector('.modal-detail-comment');
  buildDetailcommentElement(detailcommentElement, movie);

  document.querySelector('body').appendChild(ShowModalElement);
};

const buildShowItemElement = (movie) => {
  const ShowItemElement = ShowItemTemplate.cloneNode(true);

  ShowItemElement.id = `show-item-${movie.id}`;

  ShowItemElement.addEventListener('click', (e) => {
    e.preventDefault();
    buildModal(movie);
  });

  const imgElement = document.createElement('img');
  imgElement.src = movie.image;
  imgElement.alt = `${movie.name} Poster`;

  const imgContainerElement = ShowItemElement.querySelector('.img-container');

  imgContainerElement.appendChild(imgElement);

  const titleElement = ShowItemElement.querySelector('.title');
  titleElement.innerHTML = movie.name;

  const commentBtnElement = ShowItemElement.querySelector('.comment-btn');
  commentBtnElement.dataset.id = movie.id;

  return ShowItemElement;
};

const displayTvShows = async (movies) => {
  container.textContent = '';
  movies.forEach((movie) => container.appendChild(buildShowItemElement(movie)));
};

export default { displayTvShows };
