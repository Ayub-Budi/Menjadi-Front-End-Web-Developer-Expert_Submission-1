import data from "./DATA.json";

class DataSource {
  static searchResto(keyword) {
    const restaurants = data.restaurants;
  
    // Menggunakan filter untuk mencari restoran yang sesuai dengan kata kunci
    const filteredRestaurants = restaurants.filter((restaurant) => {
      const name = restaurant.name.toLowerCase();
      return name.includes(keyword.toLowerCase());
    });
  
    if (filteredRestaurants.length > 0) {
      return Promise.resolve(filteredRestaurants);
    } else {
      return Promise.reject(`${keyword} is not found`);
    }
  }
  
  static informationResto() {
    try {
      // Mengakses properti 'restaurants' dari objek JSON yang diimpor
      const restaurants = data.restaurants;
      if (restaurants) {
        return Promise.resolve(restaurants);
      } else {
        return Promise.reject(`Data not found`);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default DataSource;
