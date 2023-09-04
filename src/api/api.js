import axios from 'axios';
const API_KEY = '38057284-2d27e05e6e0b6b5960c0abd06';

axios.defaults.baseURL = `https://pixabay.com/api/`;
export const fetchArticlesWithQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
