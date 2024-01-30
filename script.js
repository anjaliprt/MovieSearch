const apiKey = '3e28a0c7'; // Replace with your OMDb API key
const searchInput = $('#search-input');
const resultsContainer = $('#results-container');

function searchMovies() {
    const searchTerm = searchInput.val();

    if (searchTerm.trim() === '') {
        alert('Please enter a movie title');
        return;
    }

    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

    $.get(apiUrl, (data) => {
        if (data.Response === 'True') {
            displayResults(data.Search);
        } else {
            alert('No results found');
            resultsContainer.empty();
        }
    });
}

function displayResults(movies) {
    resultsContainer.empty();

    movies.forEach((movie) => {
        const movieElement = $(`<div class="movie">
                                    <img src="${movie.Poster}" alt="${movie.Title}">
                                    <h2>${movie.Title}</h2>
                                    <p>${movie.Year}</p>
                                </div>`);

        resultsContainer.append(movieElement);
    });
}
