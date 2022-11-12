import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30128304-708965977259e04966a50b0c9';
const OTHER_SETTINGS = 'image_type=photo&orientation=horizontal&per_page=12';

export const apiFetchGallery = (searchQuery, page) => {
  return axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&${OTHER_SETTINGS}`
  );
};
