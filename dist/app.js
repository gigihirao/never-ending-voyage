$(document).ready(function(){
});
let image = [];
async function getImage(){
  if(image.length != 0){
    return
  }
  for(var i = 0 ; i < imageID.length ; i++){
    // response = await fetch("https://api.foursquare.com/v2/venues/" + imageID[i] + "/photos?client_id=EL0HV0FHVY0GUKYDBXJIACLRQTQ43TD15QJCZSLP2IGTNTCU&client_secret=WJVP5G4QZWIVQGFU41AZ2TFR51QVVW23PTV3PW10QXOPU15E&v=20180323&limit=10");
    // route = await response.json();
    let route = {
      "meta": {
          "code": 200,
          "requestId": "5bb16ece4c1f6750c62c62cb"
      },
      "response": {
          "photos": {
              "count": 1,
              "items": [
                  {
                      "id": "51610fdde4b0b4745db451ba",
                      "createdAt": 1365315549,
                      "source": {
                          "name": "Instagram",
                          "url": "http://instagram.com"
                      },
                      "prefix": "https://igx.4sqi.net/img/general/",
                      "suffix": "/3564704_OI7_Y-_sVAwbOxpnMybWmX_Ip3QgyOxez00ef3lOY4g.jpg",
                      "width": 612,
                      "height": 612,
                      "user": {
                          "id": "3564704",
                          "firstName": "Phillip",
                          "lastName": "Alnswick-Tobias",
                          "gender": "male",
                          "photo": {
                              "prefix": "https://igx.4sqi.net/img/user/",
                              "suffix": "/QANG0KPDYAJ2Z0H5.jpg"
                          }
                      },
                      "checkin": {
                          "id": "51610fdce4b0e58eee1149e4",
                          "createdAt": 1365315548,
                          "type": "checkin",
                          "timeZoneOffset": -240
                      },
                      "visibility": "public"
                  }
              ],
              "dupesRemoved": 0
          }
      }
  }
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