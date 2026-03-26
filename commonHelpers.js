import{a as _,i as u}from"./assets/vendor-db25513e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const o={countrySelect:document.querySelector(".header__country-select"),topHeadlinesHero:document.querySelector(".hero__list"),loadMoreBtnHero:document.querySelector(".hero__load-more"),heroLoader:document.querySelector(".hero-loader"),heroPreLoader:document.querySelector(".hero-btn-loader"),headerBurgerEl:document.querySelector(".header-burger"),headerBurgerBtn:document.querySelector(".header-burger__btn"),headerBurgerBtnClose:document.querySelector(".header-burger__btn-close")},l="/news-feed/assets/symbol-defs-cc70ba27.svg";function f(e,r){const i=r.map(({article_id:n,title:t,creator:s,description:d,pubDate:y,image_url:g})=>`<li data-id="${n}" class="hero__item">
                
                  ${g?`<div class="news-img-wrapper">
        <img src="${g}" alt="News" style=" object-fit:cover;">
        <div class="news-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="${l}#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`:`<div class="news-img-wrapper__svg-wrapper">
                            <svg class="news-img-wrapper__svg" width="60" height="60">
                              <use
                                href="${l}#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`}
                  <div class="hero__item-content">
                    <div class="hero__item-label">
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use
                            href="${l}#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(y).toLocaleDateString()}</span>
                      </span>
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use href="${l}#icon-user"></use>
                        </svg>
                        <span>${s||"anon"}</span>
                      </span>
                    </div>
                    <div class="hero__item-text">
                      <h3 class="hero__item-title">${t}</h3>
                      <p class="hero__item-description">${d}</p>
                    </div>
                    <button class="hero__item-btn" type="button">
                  <span>Read More</span>
                  <svg class="header__svg" width="25" height="20">
                    <use
                      href="${l}#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
                  </div>
              </li>`).join("");e.insertAdjacentHTML("beforeend",i)}const L="pub_fd056b01d6364d47ac3a6a4561f99d82",w="https://newsdata.io/api/1/latest";async function p({country:e,size:r,page:i,category:n="top"}){const t=await _.get(`${w}`,{params:{apikey:L,country:e,category:n,size:r,image:1,removeduplicate:1,page:i}});return console.log(t.data),t.data}function b(e,r){e.classList.remove("hidden-hero"),e.addEventListener("click",r)}function m(e,r){e.classList.add("hidden-hero"),e.removeEventListener("click",r)}function H(e){e.classList.remove("hidden-hero")}function B(e){e.classList.add("hidden-hero")}function S(e,r){e.disabled=!0,r.classList.remove("hero-preload-hidden")}function E(e,r){e.disabled=!1,r.classList.add("hero-preload-hidden")}const c={page:null,maxPage:0,country:"us",size:5},a={hero:[],latest:[],trending:[]};async function v(){H(o.heroLoader);try{const{results:e,nextPage:r}=await p(c);if(a.hero.push(...e),console.log(a.hero),!e.length){c.country="us",u.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}c.page=r,o.topHeadlinesHero.innerHTML="",f(o.topHeadlinesHero,a.hero),r?b(o.loadMoreBtnHero,h):m(o.loadMoreBtnHero,h)}catch(e){console.log(e),u.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{B(o.heroLoader)}}o.countrySelect.addEventListener("change",M);async function M(e){c.country=e.target.value,c.page=null,a.hero=[],v()}async function h(){S(o.loadMoreBtnHero,o.heroPreLoader);try{const{results:e,nextPage:r}=await p(c);a.hero.push(...e),f(o.topHeadlinesHero,a.hero),c.page=r,r||(u.info({title:"Message",message:"You've reached the end of results"}),m(o.loadMoreBtnHero,h))}catch{}finally{E(o.loadMoreBtnHero,o.heroPreLoader)}}o.topHeadlinesHero.addEventListener("click",P);function P(e){const r=e.target.closest(".hero__item");if(!r)return;const i=r.dataset.id,n=a.hero.find(t=>t.article_id===i);console.log(n)}console.log(a.hero);function $(e){e.target!==e.currentTarget&&o.headerBurgerEl.classList.remove("active"),o.headerBurgerEl.classList.add("active")}function N(e){o.headerBurgerEl.classList.remove("active")}v();o.headerBurgerBtn.addEventListener("click",$);o.headerBurgerBtnClose.addEventListener("click",N);document.addEventListener("error",function(e){if(e.target.tagName==="IMG"){e.target.style.display="none";const r=e.target.nextElementSibling;r&&(r.style.display="flex")}},!0);
//# sourceMappingURL=commonHelpers.js.map
