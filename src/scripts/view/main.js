import DataSource from "../../public/data/data.js";
import "../component/app-list.js";
import "../component/nav-bar.js"

const main = () => {
  const searchElement = document.querySelector("nav-bar");
  const restoListElement = document.querySelector("app-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchResto(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const infoResto = async () => {
    try {
      const result = await DataSource.informationResto();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    restoListElement.restos = results;
  };

  const fallbackResult = (message) => {
    restoListElement.renderError(message);
  };
  
  searchElement.clickEvent = onButtonSearchClicked;
  infoResto();
};

export default main;