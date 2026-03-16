import{a as y,i as l}from"./assets/vendor-db25513e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const s={countrySelect:document.querySelector(".header__country-select"),topHeadlinesHero:document.querySelector(".hero__list"),loadMoreBtnHero:document.querySelector(".hero__load-more"),heroLoader:document.querySelector(".hero-loader"),heroPreLoader:document.querySelector(".hero-btn-loader"),headerBurgerBtn:document.querySelector(".header-burger__btn"),headerBurgerBtnClose:document.querySelector(".header-burger__btn-close")},c="/news-feed/assets/symbol-defs-cc70ba27.svg";function f(e,r){const i=r.map(({title:a,creator:t,description:o,pubDate:d,image_url:h})=>`<li class="hero__item">
                <a href="#" class="hero__item-link">
                  <div>${h?`<div class="news-img-wrapper">
        <img src="${h}" alt="News" style="width:100%; object-fit:cover; height:400px">
        <div class="news-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="${c}#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`:`<div>
                            <svg class="header__svg" width="35" height="30">
                              <use
                                href="${c}#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`}</div>
                  <div class="hero__item-content">
                    <div class="hero__item-label">
                      <span>
                        <svg class="header__svg" width="35" height="30">
                          <use
                            href="${c}#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(d).toLocaleDateString()}</span>
                      </span>
                      <span>
                        <svg class="header__svg" width="35" height="30">
                          <use href="${c}#icon-user"></use>
                        </svg>
                        <span>${t||"anon"}</span>
                      </span>
                    </div>
                    <div class="hero__item-text">
                      <h3 class="hero__item-title">${a}</h3>
                      <p class="hero__item-description">${o}</p>
                    </div>
                  </div>
                </a>
                <button class="hero__item-btn" type="button">
                  <span>Read More</span>
                  <svg class="header__svg" width="35" height="30">
                    <use
                      href="${c}#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
              </li>`).join("");e.insertAdjacentHTML("beforeend",i)}const v="pub_fd056b01d6364d47ac3a6a4561f99d82",_="https://newsdata.io/api/1/latest";async function p({country:e,size:r,page:i,category:a="top"}){const t=await y.get(`${_}`,{params:{apikey:v,country:e,category:a,size:r,image:1,removeduplicate:1,page:i}});return console.log(t.data),t.data}function L(e,r){e.classList.remove("hidden-hero"),e.addEventListener("click",r)}function g(e,r){e.classList.add("hidden-hero"),e.removeEventListener("click",r)}function w(e){e.classList.remove("hidden-hero")}function b(e){e.classList.add("hidden-hero")}function H(e,r){e.disabled=!0,r.classList.remove("hero-preload-hidden")}function S(e,r){e.disabled=!1,r.classList.add("hero-preload-hidden")}const n={page:null,maxPage:0,country:"us",size:5};async function m(){w(s.heroLoader);try{const{results:e,nextPage:r}=await p(n);if(!e.length){n.country="us",l.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}n.page=r,s.topHeadlinesHero.innerHTML="",f(s.topHeadlinesHero,e),r?L(s.loadMoreBtnHero,u):g(s.loadMoreBtnHero,u)}catch(e){console.log(e),l.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{b(s.heroLoader)}}s.countrySelect.addEventListener("change",P);async function P(e){n.country=e.target.value,n.page=null,m()}async function u(){H(s.loadMoreBtnHero,s.heroPreLoader);try{const{results:e,nextPage:r}=await p(n);f(s.topHeadlinesHero,e),n.page=r,r||(l.info({title:"Message",message:"You've reached the end of results"}),g(s.loadMoreBtnHero,u))}catch{}finally{S(s.loadMoreBtnHero,s.heroPreLoader)}}m();document.addEventListener("error",function(e){if(e.target.tagName==="IMG"){e.target.style.display="none";const r=e.target.nextElementSibling;r&&(r.style.display="flex")}},!0);
//# sourceMappingURL=commonHelpers.js.map
