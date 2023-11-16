import "./app-item";

class restoList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set restos(restos) {
    this._restos = restos;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._restos.forEach((resto) => {
      const restosItemElement = document.createElement("app-item");
      restosItemElement.resto = resto;
      this.shadowDOM.appendChild(restosItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
           </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder" tabindex="0">${message}</h2>`;
  }
}

customElements.define("app-list", restoList);
