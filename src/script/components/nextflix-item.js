class NextflixItem extends HTMLElement {

    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div id="${this._movie.id}" class="card overflow-hidden rounded-4 text-center text-white bg-danger h-100" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
      <img class="p-2 card-img rounded-4 card-img-top" src="${this._movie.poster_path !== null || undefined || "" ? "https://image.tmdb.org/t/p/w500"+this._movie.poster_path : "https://i.pinimg.com/564x/fd/5a/e3/fd5ae37e4d7ed48d282ab52907f78b16.jpg"}" alt="Poster Movie">
      <div class="card-img-overlay d-flex flex-column justify-content-end">
      <p class="grad1 card-title"><strong>${this._movie.original_title}</strong> (${this._movie.release_date ? this._movie.release_date.substring(0,4) : ""})</p>
      <p class="grad1 card-title">Rating: ${this._movie.vote_average}</p>
      </div>
      </div>
      `;
    }
  }
  
  customElements.define("nextflix-item", NextflixItem);