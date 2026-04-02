import { refs, newsStore } from './js/services/refs.js';
import { handleSearchTopHedlinesNews } from './js/components/actions/hero-actions.js';
import {
  showModalBurger,
  hideModalBurger,
} from './js/components/actions/header-actions.js';
import { onNewsClick } from './js/components/actions/actions.js';
handleSearchTopHedlinesNews();

refs.headerBurgerBtn.addEventListener('click', showModalBurger);
refs.headerBurgerBtnClose.addEventListener('click', hideModalBurger);
refs.topHeadlinesHero.addEventListener('click', e => {
  onNewsClick(e, newsStore.hero, '.hero__item');
});
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
