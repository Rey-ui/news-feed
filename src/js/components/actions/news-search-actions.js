import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs, newsStore } from '../../services/refs.js';
import markupSearchNewsCard from '../render/render-search-news-card.js';
import { searchTopHeadlinesNews } from '../../services/news-api.js';
import {
  showLoadMoreNews,
  hideLoadMoreNews,
  showLoader,
  hideLoader,
  showPreLoader,
  hidePreLoader,
} from './actions.js';

const searchQueryParams = {
  page: null,
  maxPage: 0,
  country: 'us',
  category: 'top',
  q: null,
  size: 4,
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
    searchQueryParams.page = nextPage;
    refs.newsSearchList.innerHTML = '';
    markupSearchNewsCard(refs.newsSearchList, newsStore.latest);
    if (nextPage) {
      showLoadMoreNews(refs.loadMoreBtnNewsSearch, handleLoadMoreHeroNews);
    } else {
      hideLoadMoreNews(refs.loadMoreBtnNewsSearch, handleLoadMoreHeroNews);
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
async function handleLoadMoreHeroNews() {
  showPreLoader(refs.loadMoreBtnNewsSearch, refs.newsSearchPreLoader);
  try {
    const { results, nextPage } =
      await searchTopHeadlinesNews(searchQueryParams);
    newsStore.latest.push(...results);
    markupSearchNewsCard(refs.newsSearchList, results);

    searchQueryParams.page = nextPage;

    if (!nextPage) {
      iziToast.info({
        title: 'Message',
        message: "You've reached the end of results",
      });

      hideLoadMoreNews(refs.loadMoreBtnNewsSearch, handleLoadMoreHeroNews);
    }
  } catch (err) {
  } finally {
    hidePreLoader(refs.loadMoreBtnNewsSearch, refs.newsSearchPreLoader);
  }
}
async function handleSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searhQuery = form.elements.searchInput.value || null;
  const countrySelect = form.elements.formCountrySelect.value;
  const categoryValue = form.elements.categoryRadio.value;

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
