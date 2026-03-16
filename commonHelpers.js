import{a as m,i as c}from"./assets/vendor-db25513e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const o={countrySelect:document.querySelector(".header__country-select"),topHeadlinesHero:document.querySelector(".hero__list"),loadMoreBtnHero:document.querySelector(".hero__load-more"),heroLoader:document.querySelector(".hero-loader"),heroPreLoader:document.querySelector(".hero-btn-loader"),headerBurgerBtn:document.querySelector(".header-burger__btn"),headerBurgerBtnClose:document.querySelector(".header-burger__btn-close")};function h(e,r){r.filter(({image_url:n})=>{n.width>="200px"});const i=r.map(({title:n,creator:t,description:s,pubDate:d,image_url:u})=>`<li class="hero__item">
                <a href="#" class="hero__item-link">
                  <div>${u?`<div class="news-img-wrapper">
        <img src="${u}" alt="News" style="width:100%; object-fit:cover; height:400px">
        <div class="news-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="./img/svg/symbol-defs.svg#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`:`<div>
                            <svg class="header__svg" width="35" height="30">
                              <use
                                href="./img/svg/symbol-defs.svg#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`}</div>
                  <div class="hero__item-content">
                    <div class="hero__item-label">
                      <span>
                        <svg class="header__svg" width="35" height="30">
                          <use
                            href="./img/svg/symbol-defs.svg#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(d).toLocaleDateString()}</span>
                      </span>
                      <span>
                        <svg class="header__svg" width="35" height="30">
                          <use href="./img/svg/symbol-defs.svg#icon-user"></use>
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
                  <svg class="header__svg" width="35" height="30">
                    <use
                      href="./img/svg/symbol-defs.svg#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
              </li>`).join("");e.insertAdjacentHTML("beforeend",i)}const v="pub_fd056b01d6364d47ac3a6a4561f99d82",y="https://newsdata.io/api/1/latest";async function g({country:e,size:r,page:i,category:n="top"}){const t=await m.get(`${y}`,{params:{apikey:v,country:e,category:n,size:r,image:1,removeduplicate:1,page:i}});return console.log(t.data),t.data}function _(e,r){e.classList.remove("hidden-hero"),e.addEventListener("click",r)}function f(e,r){e.classList.add("hidden-hero"),e.removeEventListener("click",r)}function L(e){e.classList.remove("hidden-hero")}function w(e){e.classList.add("hidden-hero")}function b(e,r){e.disabled=!0,r.classList.remove("hero-preload-hidden")}function H(e,r){e.disabled=!1,r.classList.add("hero-preload-hidden")}const a={page:null,maxPage:0,country:"us",size:5};async function p(){L(o.heroLoader);try{const{results:e,nextPage:r}=await g(a);if(!e.length){a.country="us",c.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}a.page=r,o.topHeadlinesHero.innerHTML="",h(o.topHeadlinesHero,e),r?_(o.loadMoreBtnHero,l):f(o.loadMoreBtnHero,l)}catch(e){console.log(e),c.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{w(o.heroLoader)}}o.countrySelect.addEventListener("change",S);async function S(e){a.country=e.target.value,a.page=null,p()}async function l(){b(o.loadMoreBtnHero,o.heroPreLoader);try{const{results:e,nextPage:r}=await g(a);h(o.topHeadlinesHero,e),a.page=r,r||(c.info({title:"Message",message:"You've reached the end of results"}),f(o.loadMoreBtnHero,l))}catch{}finally{H(o.loadMoreBtnHero,o.heroPreLoader)}}p();document.addEventListener("error",function(e){if(e.target.tagName==="IMG"){e.target.style.display="none";const r=e.target.nextElementSibling;r&&(r.style.display="flex")}},!0);
//# sourceMappingURL=commonHelpers.js.map
