import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resturant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restos" class="list"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#restos');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        rating: resto.restaurant.rating,
        pictureId: resto.restaurant.pictureId,
        name: resto.restaurant.name,
        city: resto.restaurant.city,
        description: resto.restaurant.description,
      },
    });
  },
};

export default Detail;
