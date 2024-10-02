let Movies = {
    movies: [],

    //Method to add a movie to a watchlist
    addItem: function (movie){
        this.movies.push(movie);
    },

    //Method to delete watchlist
    deleteItem: function(movie){
        this.movies = [];
    },

    //Method to display the movies in the watchlist
    displayItems: function() {
          let moviesDIv = document.getElementById("movie-item");
          moviesDIv.innerHTML = "";

        this.movies.forEach ((movie) => {
            let itemElement = document.createElement("p");
            itemElement.textContent = `${movie.name} - ${movie.year}`;
            moviesDIv.appendChild(itemElement);
        });
    },
};

//Handle Adding item to the cart via UI
document.getElementById("add-movie-btn").addEventListener("click",function(){
    let movieName = document.getElementById("movie-name").value;
    let movieYear = document.getElementById("movie-year").value;

    if(movieName != "" && movieYear > 0){
        let newMovie={
            name: movieName,
            year: movieYear,
        };
         //Add movie to watchlist
        Movies.addItem(newMovie);

        //Display the movie watchlist
        Movies.displayItems();
    }
});
//Handle clearing the watchlist
document.getElementById("watched-btn").addEventListener("click",function(){
    Movies.deleteItem();
    Movies.displayItems();
});