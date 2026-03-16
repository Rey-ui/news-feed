import { refs } from './js/services/refs.js';
import { handleSearchTopHedlinesNews } from './js/components/actions/hero-actions.js';

handleSearchTopHedlinesNews();
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
