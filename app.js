const request = superagent;
const url = 'https://api.themoviedb.org/3/search/movie?api_key=308ef47d4177eecfbb266f41f2617b5f&language=en-US&query=';
// const page = '&page=1'; //revisar aumento de página 1++

var data = "{}";

function loadPage() {
    $('#search').keyup(searchMovie);
}


function searchMovie() {
    var containerMovies = $('#movies-result');
    containerMovies.empty();
    var $query = $('#search').val();
    var api_endpoint_seach = url + $query + '&page=1';
    request.get(api_endpoint_seach).then(function (response) {
        var results = response.body.results;
        //arroja toda la info de la peli

        results.forEach(element => {
            movieTitle = element.title;
            movieId = element.id;

            $titles = $('<h5 />').text(movieTitle).attr('data-id', movieId).addClass('movies');
            containerMovies.append($titles);
        });
        $titles.each(element => {
            $('.movies').click(paintInfo);
        });
    });

}

function paintInfo (e) {
    console.log('siii');
    
}







$(document).ready(loadPage);

//revisar metodos
// function loadPage() {
//     $('#search').keyup(filter);
// }

// function filter() {
//     var $query = $('#search').val();
//     const api_endpoint_seach = url + $query + page;

//     var request = new XMLHttpRequest(api_endpoint_seach);

//     request.withCredentials = true;

//     // request.addEventListener("readystatechange", function () {
//     //     if (this.readyState === this.DONE) {
//     //         console.log(this.responseText);
//     //     }
//     // });

//     request.getJSon(request, function(data){
//         console.log(data);

//     });
//     // console.log();

// }