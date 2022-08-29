import './style.scss';

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
