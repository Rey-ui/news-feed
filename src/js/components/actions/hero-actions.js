import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from '../../services/refs.js';
import markupHeroNewsCard from '../render/render-hero-news-card.js';
import { searchTopHeadlinesNews } from '../../services/news-api.js';
import {
  showLoadMoreNews,
  hideLoadMoreNews,
  showLoader,
  hideLoader,
  showPreLoader,
  hidePreLoader,
} from './actions.js';
const heroQueryParams = {
  page: null,
  maxPage: 0,
  country: 'us',
  size: 5,
};
const newsStore = {
  hero: [],
  latest: [],
  trending: [],
};
async function handleSearchTopHedlinesNews() {
  showLoader(refs.heroLoader);
  try {
    const { results, nextPage } = await searchTopHeadlinesNews(heroQueryParams);
    newsStore.hero.push(...results);
    console.log(newsStore.hero);
    if (!results.length) {
      heroQueryParams.country = 'us';
      iziToast.error({
        title: 'Error',
        message: `❌Sorry, there is no news from this country!`,
      });
      return;
    }
    heroQueryParams.page = nextPage;
    refs.topHeadlinesHero.innerHTML = '';
    markupHeroNewsCard(refs.topHeadlinesHero, newsStore.hero);
    if (nextPage) {
      showLoadMoreNews(refs.loadMoreBtnHero, handleLoadMoreHeroNews);
    } else {
      hideLoadMoreNews(refs.loadMoreBtnHero, handleLoadMoreHeroNews);
    }
  } catch (err) {
    console.log(err);
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, nothing was found for your request!`,
    });
  } finally {
    hideLoader(refs.heroLoader);
  }
}
refs.countrySelect.addEventListener('change', getSelect);
async function getSelect(e) {
  heroQueryParams.country = e.target.value;
  heroQueryParams.page = null;
  newsStore.hero = [];
  handleSearchTopHedlinesNews();
}
// console.log(handleSearchTopHedlinesNews());
async function handleLoadMoreHeroNews() {
  showPreLoader(refs.loadMoreBtnHero, refs.heroPreLoader);
  try {
    const { results, nextPage } = await searchTopHeadlinesNews(heroQueryParams);
    newsStore.hero.push(...results);
    markupHeroNewsCard(refs.topHeadlinesHero, newsStore.hero);

    heroQueryParams.page = nextPage;

    if (!nextPage) {
      iziToast.info({
        title: 'Message',
        message: "You've reached the end of results",
      });

      hideLoadMoreNews(refs.loadMoreBtnHero, handleLoadMoreHeroNews);
    }
  } catch (err) {
  } finally {
    hidePreLoader(refs.loadMoreBtnHero, refs.heroPreLoader);
  }
}
refs.topHeadlinesHero.addEventListener('click', onNewsClick);

function onNewsClick(e) {
  const card = e.target.closest('.hero__item');
  if (!card) return;
  const id = card.dataset.id;
  const newsItem = newsStore.hero.find(item => item.article_id === id);

  console.log(newsItem);
}
console.log(newsStore.hero);
export { handleSearchTopHedlinesNews };
