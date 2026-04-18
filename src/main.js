import { refs, newsStore } from './js/services/refs.js';
import { handleSearchTopHedlinesNews } from './js/components/actions/hero-actions.js';
import {
  loadDefaultNews,
  handleSearch,
} from './js/components/actions/news-search-actions.js';
import {
  showModalBurger,
  hideModalBurger,
} from './js/components/actions/header-actions.js';
import { onNewsClick } from './js/components/actions/actions.js';
handleSearchTopHedlinesNews();
loadDefaultNews();
refs.headerBurgerBtn.addEventListener('click', showModalBurger);
refs.headerBurgerBtnClose.addEventListener('click', hideModalBurger);
refs.topHeadlinesHero.addEventListener('click', e => {
  onNewsClick(e, newsStore.hero, '.hero__item');
});
refs.newsSearchList.addEventListener('click', e => {
  onNewsClick(e, newsStore.latest, '.news-search__item');
});
refs.newsSearchForm.addEventListener('submit', handleSearch);
document.addEventListener(
  'error',
  function (e) {
    if (e.target.tagName === 'IMG') {
      e.target.style.display = 'none';
      const fallback = e.target.nextElementSibling;
      if (fallback) fallback.style.display = 'flex';
    }
  },
  true
);
