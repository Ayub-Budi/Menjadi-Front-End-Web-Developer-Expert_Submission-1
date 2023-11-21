import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resturant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import PostReview from '../../utils/post-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restos" class="list-detail"></div>
    <div id="detail-review"></div>
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

    const btnSubmit = document.querySelector('#submit');
    const nameInput = document.querySelector('#name-review');
    const reviewInput = document.querySelector('#review');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
