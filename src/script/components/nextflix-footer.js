class NextflixFooter extends HTMLElement {

    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
        <div class="container text-center">
        <small>Copyright &copy; nextflix</small>
        </div>
      </footer>
      `;
    }
  }
  
  customElements.define("nextflix-footer", NextflixFooter);