import CONFIG from './config';

const API_ENDPOINT = {
  INFO: `${CONFIG.BASE_URL}/list`,
  SERCH: `${CONFIG.BASE_URL}/search`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
