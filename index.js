const result = document.getElementById('result');
const searchTerm = document.getElementById('searchButton')
const filmTitle = document.getElementById('film_search');
const cardFilm = document.getElementById('carta');
const popup = document.getElementById('popup');



searchTerm.addEventListener('click', async (e) => {
    e.preventDefault();
    const filmToFind = filmTitle.value;
    console.log(filmToFind);
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4ed7cd9&s=${filmToFind}`);
        const data = await response.json();
        const dataFilm = data.Search;
        console.log(cardFilm);
        cardFilm.innerHTML = "";
        dataFilm.forEach(film => {
            showFilms(cardFilm, film.Title, film.Year, film.Poster);
          });
    } catch (error) {
        console.error('Response error:', error.message);
    }
});

const showFilms = (element, title, year, poster) => {
    console.log(poster);
    element.innerHTML += `
    <div class="col">
      <div class="card mb-3" style="margin: 5px; padding: 5px">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${poster}" class="card-img items-center" style="width: 100%; height: 100%;" alt="Affiche du film: ${title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">${title}</h3>
              <p class="card-text"> ${year}</p>
                <div id="show_resume">
                    <a href="#" class="btn btn-primary">Voir la fiche</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

const showResume = document.getElementById('show_resume');

searchTerm.addEventListener('click', async (event) => {
    event.preventDefault();
const showResume = async (title) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4ed7cd9&s=${title.replace(" ", "+")}`);
      const data = await response.json();
      console.log(data)
      popup.innerHTML = "";
        dataFilm.forEach(film => {
            showFilms(popup, film.Title, film.Year, film.Poster, film.Released, film.Plot);
          });
      popup.innerHTML = `
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${data.Poster}" class="card-img items-center" style="width: 100%; height: 100%;" alt="Affiche du film: ${data.Title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">${data.Title}</h3>
            </br>
              <p class="card-text"><strong>Sortie:</strong> ${data.Released}</p>
              <p class="card-text">${data.Plot}</p>
            </div>
          </br>
            <button href="#" class="btn btn-danger">Quitter</button>
          </div>
        </div>
      `;
      popup.style.display = 'block'
      main.classList = "popup_active";
      const exitPopup = document.getElementsByClassName("btn-danger")[0];
      console.log(exitPopup)
      exitPopup.addEventListener('click', () => {
        popup.style.display = 'none'
        main.classList.remove("popup_active");
      })
    } catch (error) {
      console.error('Response error:', error.message);
    }  
  }});















// async function fetchFilms() {
//     await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4ed7cd9`)
//         .then((res) => res.json())
//         .then((data) => (film = data.film));

//     console.log(film);
// }

// function moviesDisplay() {
//     result.innerHTML = movies.map(
//         (movie) => `<h2>${movie.title}</h2>`
//     );
// }







// const searchButton = document.getElementById('searchButton');
// const phrase = document.querySelector('.cardText');
// const showFilm = document.querySelector('.film')
// const searchTerm = document.getElementById('search')




  

// // searchButton.addEventListener('click', () =>{
// //     showFilm.style.display = 'block';
// //     // showFilm.innerHTML;
// // });

// let filmData = [];

// const fetchFilm = async () => {
//     await fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=4ed7cd9`)
//         .then((res) => res.json())
//         .then((data) => (filmData = data.results));

//     console.log(filmData);
// };

// fetchFilm();



















// try {
//     const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4ed7cd9&s=${searchTerm}`);
//     const joke = await response.json();
//     console.log(joke);
//   } catch (error) {
//     console.error('Response error:', error.message);
//   }
  

