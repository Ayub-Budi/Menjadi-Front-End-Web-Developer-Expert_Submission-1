import RestaurantSource from '../../data/resturant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const InfoResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restaurant</h2>
        <div id="restos" class="list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.infoRestaurant();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default InfoResto;
