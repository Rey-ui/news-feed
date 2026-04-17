import axios from 'axios';
const API_KEY = 'pub_fd056b01d6364d47ac3a6a4561f99d82';
const BASE_URL = 'https://newsdata.io/api/1/latest';
async function searchTopHeadlinesNews({
  country,
  size,
  page,
  category = 'top',
  q = null,
}) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      apikey: API_KEY,
      country,
      category,
      size,
      image: 1,
      removeduplicate: 1,
      page,
      q,
    },
  });
  console.log(response.data);
  return response.data;
}
// async function searchAllNews() {
//   const response = await axios.get(`${BASE_URL}/everything`, {
//     params: {
//       apiKey: API_KEY,
//       q: 'politic',

//       // language: 'us',
//       // category: 'business',
//       //   pageSize: 40,
//       //   page: 1,
//     },
//   });
//   console.log(response.data);
//   return response.data;
// }
export { searchTopHeadlinesNews };
