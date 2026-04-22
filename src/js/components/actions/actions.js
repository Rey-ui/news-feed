import { refs } from '../../services/refs.js';
import markupModalNews from '../render/render-modal-news.js';
import { searchTopHeadlinesNews } from '../../services/news-api.js';
import markupNewsCard from '../render/render-news-card.js';
let currentHandler = null;

function showLoadMoreNews(loadMorebtn, handleLoadMore) {
  loadMorebtn.classList.remove('hidden-hero');

  if (currentHandler) {
    loadMorebtn.removeEventListener('click', currentHandler);
  }

  loadMorebtn.addEventListener('click', handleLoadMore);
  currentHandler = handleLoadMore;
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
async function handleLoadMoreNews({
  loadMoreBtn,
  preLoader,
  queryParams,
  newsStore,
  newsList,
  item,
}) {
  showPreLoader(loadMoreBtn, preLoader);
  try {
    const { results, nextPage } = await searchTopHeadlinesNews(queryParams);
    newsStore.push(...results);
    markupNewsCard(newsList, results, item);
    queryParams.page = null;
    queryParams.page = nextPage;

    if (!nextPage) {
      iziToast.info({
        title: 'Message',
        message: "You've reached the end of results",
      });

      hideLoadMoreNews(loadMoreBtn, handleLoadMoreHeroNews);
    }
  } catch (err) {
  } finally {
    hidePreLoader(loadMoreBtn, preLoader);
  }
}
export {
  showLoadMoreNews,
  hideLoadMoreNews,
  showLoader,
  hideLoader,
  showPreLoader,
  hidePreLoader,
  onNewsClick,
  handleLoadMoreNews,
};
