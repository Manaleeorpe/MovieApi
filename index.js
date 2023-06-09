
const row_body = document.getElementById('row-body');

window.onload = function() {
    getMovies()
  };


const createElements = (x) => {
    var col = document.createElement('div');
    col.className = 'cols';

    let card = document.createElement('div');
    card.className = 'card';
    col.appendChild(card);

    let cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    card.appendChild(cardImage);

    let img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w1280${x.poster_path}`;            
    cardImage.appendChild(img);

    let overlay = document.createElement('div');
    overlay.className="overlay";
    col.appendChild(overlay);

    let overlay2 = document.createElement('div');
    overlay2.className="overlay2";
    col.appendChild(overlay2);


    let text = document.createElement('div');
    text.className= "text"
    text.innerHTML = `<h5>${x.original_title}</h5> <div class="card-panel" style="background:#810000;color:white;"> ${(x.vote_average)} <span id=stars>${getStars(x.vote_average)}</span> </div>`

     
    
    overlay.appendChild(text);

    let text2 = document.createElement('div');
    text2.className= "text2"
    text2.innerHTML = `${x.overview}`
    overlay2.appendChild(text2);

    row_body.appendChild(col);
    
}


function getStars(rating) {

  rating = Math.round(rating * 2) / 2;
  new_rating = (rating/10)*5;
  let output = [];

  for (var i = new_rating; i >= 1; i--)
    output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  for (let i = (5 - new_rating); i >= 1; i--)
    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  return output.join('');

}

const getMovies=() =>{
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b83837051bddfb04265954dc47029a44&language=en-USadult=no&page=${Math.floor(Math.random() * 100) + 1}`)
    .then(response => response.json())
    .then(data =>{ 
        data.results.forEach(element => {
            createElements(element)
        });
        setTimeout(() => {
            document.getElementById('ids-roller').style = "display:none";
        }, 10000);
    
    });

}


function passvalues()
{
    var firstname = document.getElementById("txt").value;
    localStorage.setItem("textvalue", firstname);
    return false;
}


  


