page('/', home);
page('/places', places);
page('/favorites', favorites);
page();

function home(){
    $('main').html(homeTemplate());
}

function places(){
    $('main').html(placesTemplate());
}

function favorites(){
    $('main').html(favoritesTemplate());
}