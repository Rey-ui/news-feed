import{a as v,i as l}from"./assets/vendor-db25513e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const o={countrySelect:document.querySelector(".header__country-select"),topHeadlinesHero:document.querySelector(".hero__list"),loadMoreBtnHero:document.querySelector(".hero__load-more"),heroLoader:document.querySelector(".hero-loader"),heroPreLoader:document.querySelector(".hero-btn-loader"),headerBurgerEl:document.querySelector(".header-burger"),headerBurgerBtn:document.querySelector(".header-burger__btn"),headerBurgerBtnClose:document.querySelector(".header-burger__btn-close")},d="/news-feed/assets/symbol-defs-cc70ba27.svg";function g(e,r){const i=r.map(({title:n,creator:t,description:s,pubDate:c,image_url:h})=>`<li class="hero__item">
                <a href="#" class="hero__item-link">
                  <div>${h?`<div class="news-img-wrapper">
        <img src="${h}" alt="News" style="width:100%; object-fit:cover;">
        <div class="news-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="${d}#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`:`<div class="news-img-wrapper__svg-wrapper">
                            <svg class="news-img-wrapper__svg" width="60" height="60">
                              <use
                                href="${d}#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`}</div>
                  <div class="hero__item-content">
                    <div class="hero__item-label">
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use
                            href="${d}#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(c).toLocaleDateString()}</span>
                      </span>
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use href="${d}#icon-user"></use>
                        </svg>
                        <span>${t||"anon"}</span>
                      </span>
                    </div>
                    <div class="hero__item-text">
                      <h3 class="hero__item-title">${n}</h3>
                      <p class="hero__item-description">${s}</p>
                    </div>
                  </div>
                </a>
                <button class="hero__item-btn" type="button">
                  <span>Read More</span>
                  <svg class="header__svg" width="25" height="20">
                    <use
                      href="${d}#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
              </li>`).join("");e.insertAdjacentHTML("beforeend",i)}const y="pub_fd056b01d6364d47ac3a6a4561f99d82",_="https://newsdata.io/api/1/latest";async function f({country:e,size:r,page:i,category:n="top"}){const t=await v.get(`${_}`,{params:{apikey:y,country:e,category:n,size:r,image:1,removeduplicate:1,page:i}});return console.log(t.data),t.data}function L(e,r){e.classList.remove("hidden-hero"),e.addEventListener("click",r)}function p(e,r){e.classList.add("hidden-hero"),e.removeEventListener("click",r)}function w(e){e.classList.remove("hidden-hero")}function b(e){e.classList.add("hidden-hero")}function B(e,r){e.disabled=!0,r.classList.remove("hero-preload-hidden")}function H(e,r){e.disabled=!1,r.classList.add("hero-preload-hidden")}const a={page:null,maxPage:0,country:"us",size:5};async function m(){w(o.heroLoader);try{const{results:e,nextPage:r}=await f(a);if(!e.length){a.country="us",l.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}a.page=r,o.topHeadlinesHero.innerHTML="",g(o.topHeadlinesHero,e),r?L(o.loadMoreBtnHero,u):p(o.loadMoreBtnHero,u)}catch(e){console.log(e),l.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{b(o.heroLoader)}}o.countrySelect.addEventListener("change",S);async function S(e){a.country=e.target.value,a.page=null,m()}async function u(){B(o.loadMoreBtnHero,o.heroPreLoader);try{const{results:e,nextPage:r}=await f(a);g(o.topHeadlinesHero,e),a.page=r,r||(l.info({title:"Message",message:"You've reached the end of results"}),p(o.loadMoreBtnHero,u))}catch{}finally{H(o.loadMoreBtnHero,o.heroPreLoader)}}function E(e){e.target!==e.currentTarget&&o.headerBurgerEl.classList.remove("active"),o.headerBurgerEl.classList.add("active")}function M(e){o.headerBurgerEl.classList.remove("active")}m();o.headerBurgerBtn.addEventListener("click",E);o.headerBurgerBtnClose.addEventListener("click",M);document.addEventListener("error",function(e){if(e.target.tagName==="IMG"){e.target.style.display="none";const r=e.target.nextElementSibling;r&&(r.style.display="flex")}},!0);
//# sourceMappingURL=commonHelpers.js.map
