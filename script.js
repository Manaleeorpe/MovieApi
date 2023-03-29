
//document.getElementById("result").innerHTML = localStorage.getItem("textvalue"); to post the value

let movie = {
    "apiKey": "f394f9ac",
    
    fetchinfo: function(name){
        fetch("https://www.omdbapi.com/?t="+ name + "&plot=full&apikey=" + this.apiKey).then((response) => response.json()).then((data) => this.displayInfo(data))
    },

    displayInfo: function(data) {
        const {Title} = data;
        const {Plot} = data;
        const {Genre} = data;
        const {Awards} = data;
        const {Actors} = data;
        const {Poster} = data;
        document.querySelector(".name").innerText = "Title: " + Title;
        document.querySelector(".Rated").innerText = "Genre: " + Genre;
        document.querySelector(".description").innerText = Plot;
        document.querySelector(".Awards").innerText = "Awards: " + Awards;
        document.querySelector(".Actors").innerText = "Actors: " + Actors;
        document.querySelector(".icon").src = Poster;

    }
    
        
   
};


movie.fetchinfo(localStorage.getItem("textvalue"));

