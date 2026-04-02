import{a as L,i as g}from"./assets/vendor-db25513e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();const r={countrySelect:document.querySelector(".header__country-select"),topHeadlinesHero:document.querySelector(".hero__list"),loadMoreBtnHero:document.querySelector(".hero__load-more"),heroLoader:document.querySelector(".hero-loader"),heroPreLoader:document.querySelector(".hero-btn-loader"),headerBurgerEl:document.querySelector(".header-burger"),headerBurgerBtn:document.querySelector(".header-burger__btn"),headerBurgerBtnClose:document.querySelector(".header-burger__btn-close"),newsModal:document.querySelector(".news-modal")},l={hero:[],latest:[],trending:[]},d="/news-feed/assets/symbol-defs-cc70ba27.svg";function v(e,s){const i=s.map(({article_id:n,title:o,creator:t,description:a,pubDate:h,image_url:u})=>`<li data-id="${n}" class="hero__item">
                
                  ${u?`<div class="news-img-wrapper">
        <img src="${u}" alt="News" style=" object-fit:cover;">
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
                          </div>`}
                  <div class="hero__item-content">
                    <div class="hero__item-label">
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use
                            href="${d}#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(h).toLocaleDateString()}</span>
                      </span>
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use href="${d}#icon-user"></use>
                        </svg>
                        <span>${t||"anon"}</span>
                      </span>
                    </div>
                    <div class="hero__item-text">
                      <h3 class="hero__item-title">${o}</h3>
                      <p class="hero__item-description">${a||"there are no details on this post..."}</p>
                    </div>
                    <button class="hero__item-btn" type="button">
                  <span>Read More</span>
                  <svg class="header__svg" width="25" height="20">
                    <use
                      href="${d}#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
                  </div>
              </li>`).join("");e.insertAdjacentHTML("beforeend",i)}const b="pub_fd056b01d6364d47ac3a6a4561f99d82",$="https://newsdata.io/api/1/latest";async function m({country:e,size:s,page:i,category:n="top"}){const o=await L.get(`${$}`,{params:{apikey:b,country:e,category:n,size:s,image:1,removeduplicate:1,page:i}});return console.log(o.data),o.data}function M({title:e,image_url:s,pubDate:i,creator:n,category:o,language:t,description:a,link:h}){return`<div class="news-modal__container">
            <button class="news-modal__close-btn"><svg class="header__svg" width="15" height="15">
                  <use href="./img/svg/symbol-defs.svg#icon-close"></use>
                </svg></button>
            <h3 class="news-modal__title">${e}</h3>
            <div class="news-modal__content">
                ${s?`
                <div class="news-modal__news-img-wrapper">
                    <img src="${s}" alt="News" style="object-fit: cover" />
                    <div class="news-modal__news-fallback" style="display: none">
                    <svg class="header__svg" width="35" height="30">
                        <use href="${d}#icon-inbox-paper"></use>
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
                    <use href="${d}#icon-inbox-paper"></use>
                    </svg>
                </div>
                `}
                <div class="news-modal__main-info">
                    <div class="news-modal__label">
                    <div class="news-modal__label-content">
                        <span class="news-modal__label-text">
                        <svg width="25" height="20">
                            <use href="${d}#icon-calendar"></use>
                        </svg>
                        <span>${new Date(i).toLocaleDateString()}</span>
                        </span>
                        <span class="news-modal__label-text">
                        <svg width="25" height="20">
                            <use href="${d}#icon-user"></use>
                        </svg>
                        <span>${n||"anon"}</span>
                        </span>
                    </div>
                    <div class="news-modal__label-category">
                        ${o.map(u=>`<span>${u}</span>`).join(" ")}
                    </div>
                    <div class="news-modal__label-lang">
                        <span>Lang:</span>${t}
                    </div>
                    </div>
                    <p class="news-modal__description">${a||"there are no details on this post..."}</p>
                </div>
                <a href="${h}" class="news-modal__link"
                    >Link to the original source: <span>${h}</span></a>
            </div>
      </div>`}function H(e,s){e.classList.remove("hidden-hero"),e.addEventListener("click",s)}function f(e,s){e.classList.add("hidden-hero"),e.removeEventListener("click",s)}function E(e){e.classList.remove("hidden-hero")}function S(e){e.classList.add("hidden-hero")}function B(e,s){e.disabled=!0,s.classList.remove("hero-preload-hidden")}function N(e,s){e.disabled=!1,s.classList.add("hero-preload-hidden")}function P(e,s,i){const n=e.target.closest(i);if(!n)return;const o=n.dataset.id,t=s.find(a=>a.article_id===o);x(t),console.log(t)}function w(e){e.code==="Escape"&&_()}function x(e){r.newsModal.classList.remove("hidden-hero"),r.newsModal.innerHTML=M(e),document.body.style.overflow="hidden",r.newsModal.querySelector(".news-modal__close-btn").addEventListener("click",()=>{_()}),window.addEventListener("keydown",w)}function _(){r.newsModal.classList.add("hidden-hero"),document.body.style.overflow="",r.newsModal.innerHTML="",window.removeEventListener("keydown",w)}const c={page:null,maxPage:0,country:"us",size:5};async function y(){E(r.heroLoader);try{const{results:e,nextPage:s}=await m(c);if(l.hero.push(...e),console.log(l.hero),!e.length){c.country="us",g.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}c.page=s,r.topHeadlinesHero.innerHTML="",v(r.topHeadlinesHero,l.hero),s?H(r.loadMoreBtnHero,p):f(r.loadMoreBtnHero,p)}catch(e){console.log(e),g.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{S(r.heroLoader)}}r.countrySelect.addEventListener("change",k);async function k(e){c.country=e.target.value,c.page=null,l.hero=[],y()}async function p(){B(r.loadMoreBtnHero,r.heroPreLoader);try{const{results:e,nextPage:s}=await m(c);l.hero.push(...e),v(r.topHeadlinesHero,l.hero),c.page=s,s||(g.info({title:"Message",message:"You've reached the end of results"}),f(r.loadMoreBtnHero,p))}catch{}finally{N(r.loadMoreBtnHero,r.heroPreLoader)}}console.log(l.hero);function q(e){e.target!==e.currentTarget&&r.headerBurgerEl.classList.remove("active"),r.headerBurgerEl.classList.add("active")}function T(e){r.headerBurgerEl.classList.remove("active")}y();r.headerBurgerBtn.addEventListener("click",q);r.headerBurgerBtnClose.addEventListener("click",T);r.topHeadlinesHero.addEventListener("click",e=>{P(e,l.hero,".hero__item")});document.addEventListener("error",function(e){if(e.target.tagName==="IMG"){e.target.style.display="none";const s=e.target.nextElementSibling;s&&(s.style.display="flex")}},!0);
//# sourceMappingURL=commonHelpers.js.map
