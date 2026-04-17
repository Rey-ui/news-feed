export const refs = {
  countrySelect: document.querySelector('.header__country-select'),
  //header
  headerBurgerEl: document.querySelector('.header-burger'),
  headerBurgerBtn: document.querySelector('.header-burger__btn'),
  headerBurgerBtnClose: document.querySelector('.header-burger__btn-close'),
  //hero
  topHeadlinesHero: document.querySelector('.hero__list'),
  loadMoreBtnHero: document.querySelector('.hero__load-more'),
  heroLoader: document.querySelector('.hero-loader'),
  heroPreLoader: document.querySelector('.hero-btn-loader'),
  //news-modal
  newsModal: document.querySelector('.news-modal'),
  //news-search
  newsSearchForm: document.querySelector('.news-search__form'),
  newsSearchList: document.querySelector('.news-search__list'),
  loadMoreBtnNewsSearch: document.querySelector('.news-search__load-more'),
  newsSearchLoader: document.querySelector('.news-search__loader'),
  newsSearchPreLoader: document.querySelector('.news-search__btn-loader'),
  clearBtn: document.querySelector('.search-form__btn-clear'),
};
export const newsStore = {
  hero: [],
  latest: [],
  trending: [],
};
