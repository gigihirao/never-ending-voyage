$(document).ready(function(){
});
let image = [];
async function getImage(){
  if(image.length != 0){
    return
  }
  for(var i = 0 ; i < imageID.length ; i++){
    response = await fetch("https://api.foursquare.com/v2/venues/" + imageID[i] + "/photos?client_id=OENUJYRQA5FGSJ1U30S0SUHINZCHCTO3KOMED54QPV2DQLDX&client_secret=RN4BYXGLPGEFJUZB35TT3YWU4J4AVWRO350JXRI32DUS44KJ&v=20180323&limit=10");
    route = await response.json();
    route.response.photos.items.forEach(function(item){
      image.push(item.prefix + "300" + item.suffix);
    });
    image[i];
  }
};
function homeTemplate(){
    getImage();
    return `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
        ${image.map(function (src, index){
          return `<div class="carousel-item active">
            <img class="d-block w-100" src="${src}" alt="First slide">
          </div>`
        })}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" le="button"data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" le="button"data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>`;
}

function placesTemplate(){
    getImage(); 
    return `<div class="places">
      ${image.map(function (src, index){
        return `<div class="place">
        <img class="d-block" style="height: 200px" src="${src}">
        </div>`
      })}
    </div>`

}

function favoritesTemplate(){
    getImage();
}