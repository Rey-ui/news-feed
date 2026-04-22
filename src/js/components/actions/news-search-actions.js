import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs, newsStore } from '../../services/refs.js';
import markupNewsCard from '../render/render-news-card.js';
import { searchTopHeadlinesNews } from '../../services/news-api.js';
import {
  showLoadMoreNews,
  hideLoadMoreNews,
  showLoader,
  hideLoader,
  handleLoadMoreNews,
} from './actions.js';

const searchQueryParams = {
  page: null,
  maxPage: 0,
  country: 'us',
  category: 'top',
  q: null,
  size: 4,
};
const loadMoreParams = {
  loadMoreBtn: refs.loadMoreBtnNewsSearch,
  preLoader: refs.newsSearchPreLoader,
  queryParams: searchQueryParams,
  newsStore: newsStore.latest,
  newsList: refs.newsSearchList,
  item: 'news-search__item',
};

async function loadDefaultNews(query, category, country) {
  searchQueryParams.q = query;
  searchQueryParams.category = category;
  searchQueryParams.country = country;
  showLoader(refs.newsSearchLoader);
  try {
    const { results, nextPage } =
      await searchTopHeadlinesNews(searchQueryParams);
    newsStore.latest.length = 0;
    newsStore.latest.push(...results);
    if (!results.length) {
      searchQueryParams.country = 'us';
      iziToast.error({
        title: 'Error',
        message: `❌Sorry, nothing was found for your request!`,
      });
      return;
    }
    searchQueryParams.page = null;
    searchQueryParams.page = nextPage;
    refs.newsSearchList.innerHTML = '';
    markupNewsCard(refs.newsSearchList, newsStore.latest, 'news-search__item');
    const handler = createLoadMoreHandler(loadMoreParams);
    if (nextPage) {
      showLoadMoreNews(refs.loadMoreBtnNewsSearch, handler);
    } else {
      hideLoadMoreNews(refs.loadMoreBtnNewsSearch, handler);
    }
  } catch (err) {
    console.log(err);
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, nothing was found for your request!`,
    });
  } finally {
    hideLoader(refs.newsSearchLoader);
  }
}
function createLoadMoreHandler(config) {
  return async function handler() {
    console.log(refs.loadMoreBtnNewsSearch);
    await handleLoadMoreNews(config);
  };
}
async function handleSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searhQuery = form.elements.searchInput.value || null;
  const countrySelect = form.elements.formCountrySelect.value;
  const categoryValue = form.elements.categoryRadio.value;
  searchQueryParams.page = null;
  loadDefaultNews(searhQuery, categoryValue, countrySelect);
}
refs.clearBtn.addEventListener('click', () => {
  const form = refs.newsSearchForm;
  const searhQuery = form.elements.searchInput.value || null;
  const countrySelect = form.elements.formCountrySelect.value;
  const categoryValue = form.elements.categoryRadio.value;
  if (!searhQuery && countrySelect == 'us' && categoryValue === 'top') return;
  form.reset();
  loadDefaultNews(null, 'top', 'us');
});
export { loadDefaultNews, handleSearch };
