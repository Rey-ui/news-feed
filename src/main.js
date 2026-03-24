import { refs } from './js/services/refs.js';
import { handleSearchTopHedlinesNews } from './js/components/actions/hero-actions.js';
import {
  showModalBurger,
  hideModalBurger,
} from './js/components/actions/header-actions.js';
handleSearchTopHedlinesNews();

refs.headerBurgerBtn.addEventListener('click', showModalBurger);
refs.headerBurgerBtnClose.addEventListener('click', hideModalBurger);
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
