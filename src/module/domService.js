const container = document.querySelector(".flex-container");
const displayTvShows = async (movies) => {
  let filmData = "";
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
};

const addModal = async () => {
    var modal = document.getElementById("myModal");
    var commentButtons = document.querySelectorAll(".comment");
    const closebutton = document.querySelector(".close");
    closebutton.addEventListener("click", function(){
        modal.style.display = "none";
      });
    commentButtons.forEach(element => {
        element.addEventListener("click", function(){
            modal.style.display = "block";
          });
    });
};
module.exports = { displayTvShows ,addModal};
