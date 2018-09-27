fetch('https://api.foursquare.com/v2/venues/explore?client_id=EL0HV0FHVY0GUKYDBXJIACLRQTQ43TD15QJCZSLP2IGTNTCU&client_secret=WJVP5G4QZWIVQGFU41AZ2TFR51QVVW23PTV3PW10QXOPU15E&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
    .then(response => response.json());

$(document).ready(function(){
    function getImage(response){
        $('main').css("display","grid");
    }  


    function homeTemplate(){
        getImage();
        $('.main').append(`<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>`);
        console.log('home');
    }

    function modal(){
        getImage();
        $('.main').append(`<div class='images' data-toggle="modal" data-target="#modal"></div>
        <div class="modal fade" id="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
            <div class="modal-body">
              <p class="description"></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
      </div>`);
    }

    function placesTemplate(){
        getImage();
        modal();
        
      console.log('places');
    }

    function favoritesTemplate(){
        getImage();
        modal();

        console.log('fav');
    }
})