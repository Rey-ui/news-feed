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
} from './actions.js';
const heroQueryParams = {
  page: 1,
  maxPage: 0,
  country: 'us',
  pageSize: 5,
};

async function handleSearchTopHedlinesNews() {
  //showLoader();
  showLoader(refs.heroLoader);
  try {
    const { articles, totalResults } =
      await searchTopHeadlinesNews(heroQueryParams);
    heroQueryParams.maxPage = Math.ceil(
      totalResults / heroQueryParams.pageSize
    );
    if (!articles.length) {
      heroQueryParams.country = 'us';
      iziToast.error({
        title: 'Error',
        message: `❌Sorry, there is no news from this country!`,
      });
      return;
    }

    refs.topHeadlinesHero.innerHTML = '';
    markupHeroNewsCard(refs.topHeadlinesHero, articles);
    if (articles.length > 0 && totalResults != articles.length) {
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
    // hideLoader();
    hideLoader(refs.heroLoader);
  }
}
refs.countrySelect.addEventListener('change', getSelect);

async function getSelect(e) {
  heroQueryParams.country = e.target.value;
  heroQueryParams.page = 1;
  handleSearchTopHedlinesNews();
}

async function handleLoadMoreHeroNews() {
  heroQueryParams.page += 1;
  try {
    const { articles } = await searchTopHeadlinesNews(heroQueryParams);
    markupHeroNewsCard(refs.topHeadlinesHero, articles);
  } catch (err) {
  } finally {
    if (heroQueryParams.page >= heroQueryParams.maxPage) {
      iziToast.error({
        title: 'Message',
        message: `We're sorry, but you've reached the end of search results.
`,
      });
      hideLoadMoreNews(refs.loadMoreBtnHero, handleLoadMoreHeroNews);
    }
  }
}

export { handleSearchTopHedlinesNews };
