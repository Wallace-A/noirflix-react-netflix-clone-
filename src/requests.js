const API_KEY = "24450edec1c9dd57fb63c5afeb55d0f3";

const requests = {
    fetchNetflixDetectives: `/search/movie?api_key=${API_KEY}&query=detective&with_networks=213`,
    fetchDetective: `/search/movie?api_key=${API_KEY}&query=detective`,
    fetchTrueCrime: `/search/movie?api_key=${API_KEY}&query=true+crime`,
    fetchMystery: `/search/movie?api_key=${API_KEY}&query=mystery`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchThrillers: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
}

export default requests;