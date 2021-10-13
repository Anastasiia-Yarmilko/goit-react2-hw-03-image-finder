import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20808921-1f06a7735b40cece4e6350a25';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'proto',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchPixabyImages = async ({ q, page }) => {
  return await axios.get('', { params: { q, page } });
};

export default fetchPixabyImages;
