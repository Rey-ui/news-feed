import{a as q,i as p}from"./assets/vendor-db25513e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const r={countrySelect:document.querySelector(".header__country-select"),headerBurgerEl:document.querySelector(".header-burger"),headerBurgerBtn:document.querySelector(".header-burger__btn"),headerBurgerBtnClose:document.querySelector(".header-burger__btn-close"),topHeadlinesHero:document.querySelector(".hero__list"),loadMoreBtnHero:document.querySelector(".hero__load-more"),heroLoader:document.querySelector(".hero-loader"),heroPreLoader:document.querySelector(".hero-btn-loader"),newsModal:document.querySelector(".news-modal"),newsSearchForm:document.querySelector(".news-search__form"),newsSearchList:document.querySelector(".news-search__list"),loadMoreBtnNewsSearch:document.querySelector(".news-search__load-more"),newsSearchLoader:document.querySelector(".news-search__loader"),newsSearchPreLoader:document.querySelector(".news-search__btn-loader"),clearBtn:document.querySelector(".search-form__btn-clear")},l={hero:[],latest:[],trending:[]},c="/news-feed/assets/symbol-defs-cc70ba27.svg";function y(e,s){const o=s.map(({article_id:n,title:t,creator:a,description:i,pubDate:g,image_url:h})=>`<li data-id="${n}" class="hero__item">
                
                  ${h?`<div class="news-img-wrapper">
        <img src="${h}" alt="News" style=" object-fit:cover;">
        <div class="news-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="${c}#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`:`<div class="news-img-wrapper__svg-wrapper">
                            <svg class="news-img-wrapper__svg" width="60" height="60">
                              <use
                                href="${c}#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`}
                  <div class="hero__item-content">
                    <div class="hero__item-label">
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use
                            href="${c}#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(g).toLocaleDateString()}</span>
                      </span>
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use href="${c}#icon-user"></use>
                        </svg>
                        <span>${a||"anon"}</span>
                      </span>
                    </div>
                    <div class="hero__item-text">
                      <h3 class="hero__item-title">${t}</h3>
                      <p class="hero__item-description">${i||"there are no details on this post..."}</p>
                    </div>
                    <button class="hero__item-btn" type="button">
                  <span>Read More</span>
                  <svg class="header__svg" width="25" height="20">
                    <use
                      href="${c}#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
                  </div>
              </li>`).join("");e.insertAdjacentHTML("beforeend",o)}const x="pub_fd056b01d6364d47ac3a6a4561f99d82",k="https://newsdata.io/api/1/latest";async function w({country:e,size:s,page:o,category:n="top",q:t=null}){const a=await q.get(`${k}`,{params:{apikey:x,country:e,category:n,size:s,image:1,removeduplicate:1,page:o,q:t}});return console.log(a.data),a.data}function T({title:e,image_url:s,pubDate:o,creator:n,category:t,language:a,description:i,link:g}){return`<div class="news-modal__container">
            <button class="news-modal__close-btn"><svg class="header__svg" width="15" height="15">
                  <use href="${c}#icon-close"></use>
                </svg></button>
            <h3 class="news-modal__title">${e}</h3>
            <div class="news-modal__content">
                ${s?`
                <div class="news-modal__news-img-wrapper">
                    <img src="${s}" alt="News" style="object-fit: cover" />
                    <div class="news-modal__news-fallback" style="display: none">
                    <svg class="header__svg" width="35" height="30">
                        <use href="${c}#icon-inbox-paper"></use>
                    </svg>
                    </div>
                </div>
                `:`
                <div class="news-modal__news-img-wrapper__svg-wrapper">
                    <svg
                    class="news-modal__news-img-wrapper__svg"
                    width="60"
                    height="60"
                    >
                    <use href="${c}#icon-inbox-paper"></use>
                    </svg>
                </div>
                `}
                <div class="news-modal__main-info">
                    <div class="news-modal__label">
                    <div class="news-modal__label-content">
                        <span class="news-modal__label-text">
                        <svg width="25" height="20">
                            <use href="${c}#icon-calendar"></use>
                        </svg>
                        <span>${new Date(o).toLocaleDateString()}</span>
                        </span>
                        <span class="news-modal__label-text">
                        <svg width="25" height="20">
                            <use href="${c}#icon-user"></use>
                        </svg>
                        <span>${n||"anon"}</span>
                        </span>
                    </div>
                    <div class="news-modal__label-category">
                        ${t.map(h=>`<span>${h}</span>`).join(" ")}
                    </div>
                    <div class="news-modal__label-lang">
                        <span>Lang:</span>${a}
                    </div>
                    </div>
                    <p class="news-modal__description">${i||"there are no details on this post..."}</p>
                </div>
                <a href="${g}" target="_blank" class="news-modal__link"
                    >Link to the original source: <span>${g}</span></a>
            </div>
      </div>`}function L(e,s){e.classList.remove("hidden-hero"),e.addEventListener("click",s)}function m(e,s){e.classList.add("hidden-hero"),e.removeEventListener("click",s)}function b(e){e.classList.remove("hidden-hero")}function S(e){e.classList.add("hidden-hero")}function $(e,s){e.disabled=!0,s.classList.remove("hero-preload-hidden")}function M(e,s){e.disabled=!1,s.classList.add("hero-preload-hidden")}function B(e,s,o){const n=e.target.closest(o);if(!n)return;const t=n.dataset.id,a=s.find(i=>i.article_id===t);j(a),console.log(a)}function E(e){e.code==="Escape"&&H()}function j(e){r.newsModal.classList.remove("hidden-hero"),r.newsModal.innerHTML=T(e),document.body.style.overflow="hidden",r.newsModal.querySelector(".news-modal__close-btn").addEventListener("click",()=>{H()}),window.addEventListener("keydown",E)}function H(){r.newsModal.classList.add("hidden-hero"),document.body.style.overflow="",r.newsModal.innerHTML="",window.removeEventListener("keydown",E)}const u={page:null,maxPage:0,country:"us",size:5};async function N(){b(r.heroLoader);try{const{results:e,nextPage:s}=await w(u);if(l.hero.push(...e),console.log(l.hero),!e.length){u.country="us",p.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}u.page=s,r.topHeadlinesHero.innerHTML="",y(r.topHeadlinesHero,l.hero),s?L(r.loadMoreBtnHero,v):m(r.loadMoreBtnHero,v)}catch(e){console.log(e),p.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{S(r.heroLoader)}}r.countrySelect.addEventListener("change",C);async function C(e){u.country=e.target.value,u.page=null,l.hero=[],N()}async function v(){$(r.loadMoreBtnHero,r.heroPreLoader);try{const{results:e,nextPage:s}=await w(u);l.hero.push(...e),y(r.topHeadlinesHero,e),u.page=s,s||(p.info({title:"Message",message:"You've reached the end of results"}),m(r.loadMoreBtnHero,v))}catch{}finally{M(r.loadMoreBtnHero,r.heroPreLoader)}}console.log(l.hero);function P(e,s){const o=s.map(({article_id:n,title:t,creator:a,description:i,pubDate:g,image_url:h})=>`<li data-id="${n}" class="news-search__item">
                
                  ${h?`<div class="news-search-img-wrapper">
        <img src="${h}" alt="News" style=" object-fit:cover;">
        <div class="news-search-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="${c}#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`:`<div class="news-search-img-wrapper__svg-wrapper">
                            <svg class="news-search-img-wrapper__svg" width="60" height="60">
                              <use
                                href="${c}#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`}
                  <div class="news-search__item-content">
                    <div class="news-search__item-label">
                      <span class="news-search__item-label-content">
                        <svg  width="25" height="20">
                          <use
                            href="${c}#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(g).toLocaleDateString()}</span>
                      </span>
                      <span class="news-search__item-label-content">
                        <svg  width="25" height="20">
                          <use href="${c}#icon-user"></use>
                        </svg>
                        <span>${a||"anon"}</span>
                      </span>
                    </div>
                    <div class="news-search__item-text">
                      <h3 class="news-search__item-title">${t}</h3>
                      <p class="news-search__item-description">${i||"there are no details on this post..."}</p>
                    </div>
                    <button class="news-search__item-btn" type="button">
                  <span>Read More</span>
                  <svg class="header__svg" width="25" height="20">
                    <use
                      href="${c}#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
                  </div>
              </li>`).join("");e.insertAdjacentHTML("beforeend",o)}const d={page:null,maxPage:0,country:"us",category:"top",q:null,size:3};async function f(e,s,o){d.q=e,d.category=s,d.country=o,b(r.newsSearchLoader);try{const{results:n,nextPage:t}=await w(d);if(l.latest.length=0,l.latest.push(...n),!n.length){d.country="us",p.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}d.page=t,r.newsSearchList.innerHTML="",P(r.newsSearchList,l.latest),t?L(r.loadMoreBtnNewsSearch,_):m(r.loadMoreBtnNewsSearch,_)}catch(n){console.log(n),p.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{S(r.newsSearchLoader)}}async function _(){$(r.loadMoreBtnNewsSearch,r.newsSearchPreLoader);try{const{results:e,nextPage:s}=await w(d);l.latest.push(...e),P(r.newsSearchList,e),d.page=s,s||(p.info({title:"Message",message:"You've reached the end of results"}),m(r.loadMoreBtnNewsSearch,_))}catch{}finally{M(r.loadMoreBtnNewsSearch,r.newsSearchPreLoader)}}async function D(e){e.preventDefault();const s=e.currentTarget,o=s.elements.searchInput.value||null,n=s.elements.formCountrySelect.value,t=s.elements.categoryRadio.value;f(o,t,n)}r.clearBtn.addEventListener("click",()=>{r.newsSearchForm.reset(),f(null,"top","us")});function O(e){e.target!==e.currentTarget&&r.headerBurgerEl.classList.remove("active"),r.headerBurgerEl.classList.add("active")}function A(e){r.headerBurgerEl.classList.remove("active")}N();f();r.headerBurgerBtn.addEventListener("click",O);r.headerBurgerBtnClose.addEventListener("click",A);r.topHeadlinesHero.addEventListener("click",e=>{B(e,l.hero,".hero__item")});r.newsSearchList.addEventListener("click",e=>{B(e,l.latest,".hero__item")});r.newsSearchForm.addEventListener("submit",D);document.addEventListener("error",function(e){if(e.target.tagName==="IMG"){e.target.style.display="none";const s=e.target.nextElementSibling;s&&(s.style.display="flex")}},!0);
//# sourceMappingURL=commonHelpers.js.map
