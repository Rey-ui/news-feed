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
  // showPreLoader,
  // hidePreLoader,
  handleLoadMoreNews,
} from './actions.js';
const heroQueryParams = {
  page: null,
  maxPage: 0,
  country: 'us',
  size: 5,
};
const loadMoreParams = {
  loadMoreBtn: refs.loadMoreBtnHero,
  preLoader: refs.heroPreLoader,
  queryParams: heroQueryParams,
  newsStore: newsStore.hero,
  newsList: refs.topHeadlinesHero,
  item: 'hero__item',
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
    markupNewsCard(refs.topHeadlinesHero, newsStore.hero, 'hero__item');
    const handler = createLoadMoreHandler(loadMoreParams);
    if (nextPage) {
      showLoadMoreNews(refs.loadMoreBtnHero, handler);
    } else {
      hideLoadMoreNews(refs.loadMoreBtnHero, handler);
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
function createLoadMoreHandler(config) {
  return async function handler() {
    console.log(refs.loadMoreBtnNewsSearch);
    await handleLoadMoreNews(config);
  };
}
// async function handleLoadMoreHeroNews() {
//   showPreLoader(refs.loadMoreBtnHero, refs.heroPreLoader);
//   try {
//     const { results, nextPage } = await searchTopHeadlinesNews(heroQueryParams);
//     newsStore.hero.push(...results);
//     markupNewsCard(refs.topHeadlinesHero, results, 'hero__item');

//     heroQueryParams.page = nextPage;

//     if (!nextPage) {
//       iziToast.info({
//         title: 'Message',
//         message: "You've reached the end of results",
//       });

//       hideLoadMoreNews(refs.loadMoreBtnHero, handleLoadMoreHeroNews);
//     }
//   } catch (err) {
//   } finally {
//     hidePreLoader(refs.loadMoreBtnHero, refs.heroPreLoader);
//   }
// }

console.log(newsStore.hero);
export { handleSearchTopHedlinesNews };
