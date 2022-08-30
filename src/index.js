import './style.scss';
import file from './module/apiCall.js';

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

// alazar
const movies = await file.get('https://api.tvmaze.com/shows');
const container = document.querySelector('.flex-container');
let filmData = '';
movies.forEach((e) => {
  const { id } = e;
  const { name } = e;
  const image = e.image.medium;
  filmData += `
<div class="shows">
<div id="1">
${id}  ${name}
</div>
<div class="img-container">
<img src="${image}" alt="photo">
</div>
<div class="reaction">
<button>like</button>
<button class="comment">comment</button>
</div>
</div>
`;
});
container.innerHTML = filmData;
