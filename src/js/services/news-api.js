import axios from 'axios';
const API_KEY = '1b829ccd00dd4f02b1e432714347e911';
const BASE_URL = 'https://newsapi.org/v2';
async function searchTopHeadlinesNews({ page, country, pageSize }) {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      apiKey: API_KEY,
      country,
      // category: 'business',
      pageSize,

      page,
    },
  });
  console.log(response.data);
  return response.data;
}
async function searchAllNews() {
  const response = await axios.get(`${BASE_URL}/everything`, {
    params: {
      apiKey: API_KEY,
      q: 'politic',

      // language: 'us',
      // category: 'business',
      //   pageSize: 40,
      //   page: 1,
    },
  });
  console.log(response.data);
  return response.data;
}
export { searchTopHeadlinesNews, searchAllNews };
