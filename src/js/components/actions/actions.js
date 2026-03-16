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
export {
  showLoadMoreNews,
  hideLoadMoreNews,
  showLoader,
  hideLoader,
  showPreLoader,
  hidePreLoader,
};
