class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div id="search-container" class="form-inline my-2 my-lg-0">
            <input id="searchElement" class="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search">
            <button id="searchButtonElement" class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
        </div>
        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);