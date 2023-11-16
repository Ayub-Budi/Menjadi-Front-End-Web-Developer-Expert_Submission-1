class item extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host{
                    width: 25%;
                    position: relative;
                    z-index: -1;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    padding: 10px;
                }
                img {
                  width: 100%;
                }
                .kotak {
                    position: absolute;
                    top: 8px;
                    height: 5%;
                    background-color: #b3541e;
                    color: aliceblue;
                    font-weight: bold;
                  }

                .deskripsi {
                  padding: 10px;
                }

                .rating{
                  font-size: 25px;
                }

                .name{
                  font-size: 30px;
                }

                @media screen and (max-width: 1200px) {
                    :host {
                      width: 30%;
                    }
                  }

                @media screen and (max-width: 768px) {
                    :host {
                      width: 45%;
                    }
                  }
  
                @media screen and (max-width: 550px) {
                  :host {
                    width: 100%;
                  }
                }
            
            </style>

              <div class="card" id="${this._resto.id}">
                <img src="${this._resto.pictureId}"alt="Gambar Restaurant ${this._resto.name}" tabindex="0" />
                <p class="kotak" tabindex="0">${this._resto.city}</p>
                <div class="deskripsi">
                  <p class="rating" tabindex="0">rating : ${this._resto.rating}</p>
                  <p class="name" tabindex="0">${this._resto.name}</p>
                  <p tabindex="0">
                  ${this._resto.description}
                  </p>
                </div>
              </div>
              `;
  }
}

customElements.define("app-item", item);
