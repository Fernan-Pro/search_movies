document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = '5b2b39da378b2dea794d1ec97d6d7545'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500'

let resultConteiner = document.getElementById('results')



function searchMovies(){
    resultConteiner.innerHTML = 'Cargando.....'  
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultConteiner.innerHTML = ''  

    if(movies.length === 0){
        resultConteiner.innerHTML = '<p> No se encontraron resiltados para tu busqueda </p>'
        return
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: '+ movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultConteiner.appendChild(movieDiv)
    })
}