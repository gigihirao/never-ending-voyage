let imageID = [];

page('/', home);
page('/places', places);
page('/favorites', favorites);
page();

async function getPlaces(){
    if(imageID.length != 0){
        return
    }
    response = await fetch('https://api.foursquare.com/v2/venues/search?client_id=OENUJYRQA5FGSJ1U30S0SUHINZCHCTO3KOMED54QPV2DQLDX&client_secret=RN4BYXGLPGEFJUZB35TT3YWU4J4AVWRO350JXRI32DUS44KJ&v=20180323&limit=12&ll=40.7243,-74.0018');
    data = await response.json();
    data.response.venues.forEach(function(venue){
        imageID.push(venue.id);
    });
}

async function home(){
    await getPlaces();
    $('main').html(homeTemplate());
}

async function places(){
    await getPlaces();
    $('main').html(placesTemplate());
}

async function favorites(){
    await getPlaces();
    $('main').html(favoritesTemplate());
}