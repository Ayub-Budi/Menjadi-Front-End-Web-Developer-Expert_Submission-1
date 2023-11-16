const createRestoDetailTemplate = (resto) => `
  <div class="detail" id="${resto.id}">
  <h1>${resto.name}</h1>
    <div class="detail-resto">
      <div class="poster">
        <figure>
          <img src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}"alt="${resto.name}" tabindex="0"/>
          <figcaption>${resto.categories.map((category) => `
          <span>${category.name}</span>
        `).join('')}
        ⭐️ ${resto.rating}</figcaption>
          
          <figcaption>Alamat : ${resto.address}</figcaption>

        </figure>
      </div>

      <div class="deskripsi">
        
        <p tabindex="0">
        ${resto.description}
        </p>

        <p>
        ${resto.categories.map((category) => `
              <span>${category.name}</span>
            `).join('')}
        </p>
      </div>
    </div>

    <div class="menu">
      <div class="daftar-menu">
        <div class="list-menu">
          <h1>Menu Makanan</h1>
            <ul>
              ${resto.menus.foods.map((food) => `
                <li>${food.name}</li>
              `).join('')}
            <ul>
        </div>
        <div class="list-menu">
          <h1>Menu Minuman</h1>
            <ul>
              ${resto.menus.drinks.map((drink) => `
                <li>${drink.name}</li>
              `).join('')}
            <ul>
        </div>
      </div>
    </div>

    <div>
      <h1>Customer Reviews</h1>
      <div class="input-Review">
        <form action="">
          <label for="name">nama</label>
          <input type="text" id="name" name="Nama" placeholder="Nama..">

          <label for="review">Review</label>
          <input type="text" id="review" name="Review" placeholder="Review..">
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>

  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="card" id="${resto.id}">
    <div class="card-shadow">
      <div class="poster">

       <p class="rating" tabindex="0">⭐️ ${resto.rating}</p>
       <img src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}"alt="${resto.name}" tabindex="0" width="400" height="300"/>
       <p class="kota" tabindex="0">${resto.city}</p>
      </div>
      <div class="deskripsi">
        <p class="name" tabindex="0"><a href="#/detail/${resto.id}">${resto.name}</a></p>
        <p tabindex="0" div class="paragraf">
        ${resto.description}
        </p>
      </div>
    </div>
  </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
