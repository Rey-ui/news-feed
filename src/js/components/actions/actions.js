// import { refs } from './services/refs.js';
// import markupHeroNewsCard from './components/render/render-hero-news-card.js';

// refs.countrySelect.addEventListener('change', getSelect);
// function getSelect(e) {
//   if (!e.target) return 'us';
//   const selectedValue = e.target.value;
//   return selectedValue;
// }

// import { searchTopHeadlinesNews, searchAllNews } from './services/news-api.js';
// async function handleSearchTopHedlinesNews() {
//   //showLoader();

//   try {
//     const news = await searchTopHeadlinesNews(getSelect);
//     // console.log(city.weather[0].main);
//     // if (!city || city.length === 0) {
//     //   return;
//     // } else {
//     refs.countrySelect.innerHTML = '';
//     // const cities = searchTopHeadlinesNews(getSelect);
//     markupHeroNewsCard(refs.countrySelect, news);
//     //refreshBtn.classList.add('active-btn');
//     // }
//   } catch (err) {
//     console.log(err);
//     // iziToast.error({
//     //   title: 'Error',
//     //   message: `❌Sorry, nothing was found for your request!`,
//     // });
//   } finally {
//     // hideLoader();
//     // form.reset();
//   }
// }

// handleSearchTopHedlinesNews();
import { refs } from '../../services/refs.js';
import markupModalNews from '../render/render-modal-news.js';
function showLoadMoreNews(loadMorebtn, handleLoadMore) {
  loadMorebtn.classList.remove('hidden-hero');
  loadMorebtn.addEventListener('click', handleLoadMore);
}
function hideLoadMoreNews(loadMorebtn, handleLoadMore) {
  loadMorebtn.classList.add('hidden-hero');
  loadMorebtn.removeEventListener('click', handleLoadMore);
}
function showLoader(loader) {
  loader.classList.remove('hidden-hero');
}
function hideLoader(loader) {
  loader.classList.add('hidden-hero');
}
function showPreLoader(loadMoreBtn, preLoader) {
  loadMoreBtn.disabled = true;
  preLoader.classList.remove('hero-preload-hidden');
}
function hidePreLoader(loadMoreBtn, preLoader) {
  loadMoreBtn.disabled = false;
  preLoader.classList.add('hero-preload-hidden');
}
function onNewsClick(e, news, item) {
  const card = e.target.closest(item);
  if (!card) return;
  const id = card.dataset.id;
  const newsItem = news.find(item => item.article_id === id);
  openNewsModal(newsItem);
  console.log(newsItem);
}
function handleEscapeKeyPress(event) {
  if (event.code === 'Escape') {
    closeNewsModal();
  }
}

function openNewsModal(news) {
  refs.newsModal.classList.remove('hidden-hero');
  refs.newsModal.innerHTML = markupModalNews(news);
  document.body.style.overflow = 'hidden';
  const btnClose = refs.newsModal.querySelector('.news-modal__close-btn');

  btnClose.addEventListener('click', () => {
    closeNewsModal();
  });
  window.addEventListener('keydown', handleEscapeKeyPress);
}
function closeNewsModal() {
  refs.newsModal.classList.add('hidden-hero');
  document.body.style.overflow = '';
  refs.newsModal.innerHTML = '';
  window.removeEventListener('keydown', handleEscapeKeyPress);
}
export {
  showLoadMoreNews,
  hideLoadMoreNews,
  showLoader,
  hideLoader,
  showPreLoader,
  hidePreLoader,
  onNewsClick,
};
