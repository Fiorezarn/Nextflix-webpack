import swal from 'sweetalert2';
const API_KEY = "47f5fb3ad8f64ffe3d9213afd1a97493";
const url = "https://api.themoviedb.org/3";

class DataSource {
    static searchMovie(keyword) {  
        return fetch(`${url}/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (keyword === "") {
                    swal.fire({
                        title: `Keyword can't empty`,
                        icon: "error"
                      }).then(() => {
                        window.location.replace('/');
                      });
                    throw new Error("Keyword can't be empty");
                }
                if (responseJson.results && responseJson.total_results !== 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    swal.fire({
                        title: `${keyword} is not found`,
                        icon: "error"
                      }).then(() => {
                        window.location.replace('/');
                      });
                    throw new Error(`${keyword} is not found`);
                }
            })
    }
}
class Main {
    static fetchToprate() {
        return fetch(`${url}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results && responseJson.total_results !== 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`movies not found`)
                }
            })
    }
}

export {
    DataSource,
    Main
};