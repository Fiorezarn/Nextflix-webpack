import './nextflix-item.js';

class NextflixList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("nextflix-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }
    renderError(message) {
        this.innerHTML = "";
    }
}
customElements.define("nextflix-list", NextflixList);