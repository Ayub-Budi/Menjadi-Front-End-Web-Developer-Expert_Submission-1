// import FavoriteMovieIdb from '../../data/resturant-source';
// import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restaurant Favorite</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    // const movies = await FavoriteMovieIdb.getAllMovies();
    // const moviesContainer = document.querySelector('#movies');
    // movies.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });
  },
};

export default Like;
