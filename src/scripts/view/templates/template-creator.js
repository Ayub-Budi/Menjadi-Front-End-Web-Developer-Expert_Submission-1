const createRestoDetailTemplate = (resto) => `
  <div class="detail" id="${resto.id}">
  <h2>${resto.name}</h2>
    <div class="detail-resto">
      <div class="poster">
        <figure>
          <img src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}"alt="${resto.name}" tabindex="0"/>
          <figcaption tabindex="0">${resto.categories.map((category) => `
          <span>${category.name}</span>
        `).join('')}
        ⭐️ ${resto.rating}</figcaption>
          
          <figcaption tabindex="0">Alamat : ${resto.address}</figcaption>

        </figure>
      </div>

      <div class="deskripsi">
        <h2>Deskripsi</h2>
        <p tabindex="0">
        ${resto.description}
        </p>
      </div>
    </div>

    <div class="menu">
      <div class="daftar-menu">
        <div class="list-menu">
          <h3 tabindex="0">Menu Makanan</h3>
            <ul>
              ${resto.menus.foods.map((food) => `
                <li tabindex="0">${food.name}</li>
              `).join('')}
            <ul>
        </div>
        <div class="list-menu">
          <h3 tabindex="0">Menu Minuman</h3>
            <ul>
              ${resto.menus.drinks.map((drink) => `
                <li tabindex="0">${drink.name}</li>
              `).join('')}
            <ul>
        </div>
      </div>
    </div>

    <div>
      <h2>Customer Reviews</h2>
      <div>
        ${resto.customerReviews.map((review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
              <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="input-Review">
        <form action="">
          <label for="name">nama</label>
          <input type="text" class="name-review" id="name-review" name="Nama" placeholder="Nama..">

          <label for="review">Review</label>
          <input type="text" class="review" id="review" name="Review" placeholder="Review..">
          <input type="submit" id="submit" value="Submit" class="submit">
        </form>
      </div>
    </div>

  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="card" id="${resto.id}">
    <a href="#/detail/${resto.id}" tabindex="0">
      <div class="card-shadow">
        <div class="poster">

        <p class="rating" tabindex="0">⭐️ ${resto.rating}</p>
        <img src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}"alt="${resto.name}" tabindex="0" width="400" height="300"/>
        <p class="kota" tabindex="0">${resto.city}</p>
        </div>
        <div class="deskripsi">
          <p class="name" tabindex="0">${resto.name}</p>
          <p tabindex="0" div class="paragraf">
          ${resto.description}
          </p>
        </div>
      </div>
    </a>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
