import{a as N,i as w}from"./assets/vendor-db25513e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const r={countrySelect:document.querySelector(".header__country-select"),headerBurgerEl:document.querySelector(".header-burger"),headerBurgerBtn:document.querySelector(".header-burger__btn"),headerBurgerBtnClose:document.querySelector(".header-burger__btn-close"),topHeadlinesHero:document.querySelector(".hero__list"),loadMoreBtnHero:document.querySelector(".hero__load-more"),heroLoader:document.querySelector(".hero-loader"),heroPreLoader:document.querySelector(".hero-btn-loader"),newsModal:document.querySelector(".news-modal"),newsSearchForm:document.querySelector(".news-search__form"),newsSearchList:document.querySelector(".news-search__list"),loadMoreBtnNewsSearch:document.querySelector(".news-search__load-more"),newsSearchLoader:document.querySelector(".news-search__loader"),newsSearchPreLoader:document.querySelector(".news-search__btn-loader"),clearBtn:document.querySelector(".search-form__btn-clear")},c={hero:[],latest:[]},i="/news-feed/assets/symbol-defs-cc70ba27.svg";function p(e,s,o){const a=s.map(({article_id:t,title:n,creator:l,description:u,pubDate:g,image_url:y})=>`<li data-id="${t}" class="${o}">
                
                  ${y?`<div class="news-img-wrapper">
        <img src="${y}" alt="News" style=" object-fit:cover;">
        <div class="news-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="${i}#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`:`<div class="news-img-wrapper__svg-wrapper">
                            <svg class="news-img-wrapper__svg" width="60" height="60">
                              <use
                                href="${i}#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`}
                  <div class="news__item-content">
                    <div class="news__item-label">
                      <span class="news__item-label-content">
                        <svg  width="25" height="20">
                          <use
                            href="${i}#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(g).toLocaleDateString()}</span>
                      </span>
                      <span class="news__item-label-content">
                        <svg  width="25" height="20">
                          <use href="${i}#icon-user"></use>
                        </svg>
                        <span>${l||"anon"}</span>
                      </span>
                    </div>
                    <div class="news__item-text">
                      <h3 class="news__item-title">${n}</h3>
                      <p class="news__item-description">${u||"there are no details on this post..."}</p>
                    </div>
                    <button class="news__item-btn" type="button">
                  <span>Read More</span>
                  <svg class="header__svg" width="25" height="20">
                    <use
                      href="${i}#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
                  </div>
              </li>`).join("");e.insertAdjacentHTML("beforeend",a)}const q="pub_fd056b01d6364d47ac3a6a4561f99d82",P="https://newsdata.io/api/1/latest";async function f({country:e,size:s,page:o,category:a="top",q:t=null}){const n=await N.get(`${P}`,{params:{apikey:q,country:e,category:a,size:s,image:1,removeduplicate:1,page:o,q:t}});return console.log(n.data),n.data}function k({title:e,image_url:s,pubDate:o,creator:a,category:t,language:n,description:l,link:u}){return`<div class="news-modal__container">
            <button class="news-modal__close-btn"><svg class="header__svg" width="15" height="15">
                  <use href="${i}#icon-close"></use>
                </svg></button>
            <h3 class="news-modal__title">${e}</h3>
            <div class="news-modal__content">
                ${s?`
                <div class="news-modal__news-img-wrapper">
                    <img src="${s}" alt="News" style="object-fit: cover" />
                    <div class="news-modal__news-fallback" style="display: none">
                    <svg class="header__svg" width="35" height="30">
                        <use href="${i}#icon-inbox-paper"></use>
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
                    <use href="${i}#icon-inbox-paper"></use>
                    </svg>
                </div>
                `}
                <div class="news-modal__main-info">
                    <div class="news-modal__label">
                    <div class="news-modal__label-content">
                        <span class="news-modal__label-text">
                        <svg width="25" height="20">
                            <use href="${i}#icon-calendar"></use>
                        </svg>
                        <span>${new Date(o).toLocaleDateString()}</span>
                        </span>
                        <span class="news-modal__label-text">
                        <svg width="25" height="20">
                            <use href="${i}#icon-user"></use>
                        </svg>
                        <span>${a||"anon"}</span>
                        </span>
                    </div>
                    <div class="news-modal__label-category">
                        ${t.map(g=>`<span>${g}</span>`).join(" ")}
                    </div>
                    <div class="news-modal__label-lang">
                        <span>Lang:</span>${n}
                    </div>
                    </div>
                    <p class="news-modal__description">${l||"there are no details on this post..."}</p>
                </div>
                <a href="${u}" target="_blank" class="news-modal__link"
                    >Link to the original source: <span>${u}</span></a>
            </div>
      </div>`}let m=null;function L(e,s){e.classList.remove("hidden-hero"),m&&e.removeEventListener("click",m),e.addEventListener("click",s),m=s}function _(e,s){e.classList.add("hidden-hero"),e.removeEventListener("click",s)}function S(e){e.classList.remove("hidden-hero")}function b(e){e.classList.add("hidden-hero")}function x(e,s){e.disabled=!0,s.classList.remove("hero-preload-hidden")}function T(e,s){e.disabled=!1,s.classList.add("hero-preload-hidden")}function M(e,s,o){const a=e.target.closest(o);if(!a)return;const t=a.dataset.id,n=s.find(l=>l.article_id===t);C(n),console.log(n)}function $(e){e.code==="Escape"&&E()}function C(e){r.newsModal.classList.remove("hidden-hero"),r.newsModal.innerHTML=k(e),document.body.style.overflow="hidden",r.newsModal.querySelector(".news-modal__close-btn").addEventListener("click",()=>{E()}),window.addEventListener("keydown",$)}function E(){r.newsModal.classList.add("hidden-hero"),document.body.style.overflow="",r.newsModal.innerHTML="",window.removeEventListener("keydown",$)}async function B({loadMoreBtn:e,preLoader:s,queryParams:o,newsStore:a,newsList:t,item:n}){x(e,s);try{const{results:l,nextPage:u}=await f(o);a.push(...l),p(t,l,n),o.page=null,o.page=u,u||(iziToast.info({title:"Message",message:"You've reached the end of results"}),_(e,handleLoadMoreHeroNews))}catch{}finally{T(e,s)}}const h={page:null,maxPage:0,country:"us",size:5},D={loadMoreBtn:r.loadMoreBtnHero,preLoader:r.heroPreLoader,queryParams:h,newsStore:c.hero,newsList:r.topHeadlinesHero,item:"hero__item"};async function H(){S(r.heroLoader);try{const{results:e,nextPage:s}=await f(h);if(c.hero.push(...e),console.log(c.hero),!e.length){h.country="us",w.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}h.page=s,r.topHeadlinesHero.innerHTML="",p(r.topHeadlinesHero,c.hero,"hero__item");const o=O(D);s?L(r.loadMoreBtnHero,o):_(r.loadMoreBtnHero,o)}catch(e){console.log(e),w.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{b(r.heroLoader)}}r.countrySelect.addEventListener("change",I);async function I(e){h.country=e.target.value,h.page=null,c.hero=[],H()}function O(e){return async function(){console.log(r.loadMoreBtnNewsSearch),await B(e)}}console.log(c.hero);const d={page:null,maxPage:0,country:"us",category:"top",q:null,size:4},j={loadMoreBtn:r.loadMoreBtnNewsSearch,preLoader:r.newsSearchPreLoader,queryParams:d,newsStore:c.latest,newsList:r.newsSearchList,item:"news-search__item"};async function v(e,s,o){d.q=e,d.category=s,d.country=o,S(r.newsSearchLoader);try{const{results:a,nextPage:t}=await f(d);if(c.latest.length=0,c.latest.push(...a),!a.length){d.country="us",w.error({title:"Error",message:"❌Sorry, nothing was found for your request!"});return}d.page=null,d.page=t,r.newsSearchList.innerHTML="",p(r.newsSearchList,c.latest,"news-search__item");const n=z(j);t?L(r.loadMoreBtnNewsSearch,n):_(r.loadMoreBtnNewsSearch,n)}catch(a){console.log(a),w.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{b(r.newsSearchLoader)}}function z(e){return async function(){console.log(r.loadMoreBtnNewsSearch),await B(e)}}async function A(e){e.preventDefault();const s=e.currentTarget,o=s.elements.searchInput.value||null,a=s.elements.formCountrySelect.value,t=s.elements.categoryRadio.value;d.page=null,v(o,t,a)}r.clearBtn.addEventListener("click",()=>{const e=r.newsSearchForm,s=e.elements.searchInput.value||null,o=e.elements.formCountrySelect.value,a=e.elements.categoryRadio.value;!s&&o=="us"&&a==="top"||(e.reset(),v(null,"top","us"))});function F(e){e.target!==e.currentTarget&&r.headerBurgerEl.classList.remove("active"),r.headerBurgerEl.classList.add("active")}function Q(e){r.headerBurgerEl.classList.remove("active")}H();v();r.headerBurgerBtn.addEventListener("click",F);r.headerBurgerBtnClose.addEventListener("click",Q);r.topHeadlinesHero.addEventListener("click",e=>{M(e,c.hero,".hero__item")});r.newsSearchList.addEventListener("click",e=>{M(e,c.latest,".news-search__item")});r.newsSearchForm.addEventListener("submit",A);document.addEventListener("error",function(e){if(e.target.tagName==="IMG"){e.target.style.display="none";const s=e.target.nextElementSibling;s&&(s.style.display="flex")}},!0);
//# sourceMappingURL=commonHelpers.js.map
