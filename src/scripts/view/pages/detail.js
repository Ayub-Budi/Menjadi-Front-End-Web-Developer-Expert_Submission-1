import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resturant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restos" class="list">
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const movieContainer = document.querySelector('#restos');
    movieContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
  },
};

export default Detail;
