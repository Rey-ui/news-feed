import{a as m,i as d}from"./assets/vendor-db25513e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const n={countrySelect:document.querySelector(".header__country-select"),topHeadlinesHero:document.querySelector(".hero__list"),loadMoreBtnHero:document.querySelector(".hero__load-more"),heroLoader:document.querySelector(".hero-loader")};function u(e,t){const i=t.map(({title:a,author:r,description:s,publishedAt:c,urlToImage:h})=>`<li class="hero__item">
                <a href="#" class="hero__item-link">
                  <div>${h?`<img src="${h}" alt="News" class=""/>`:`<div>
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
                        <span>${new Date(c).toLocaleDateString()}</span>
                      </span>
                      <span>
                        <svg class="header__svg" width="35" height="30">
                          <use href="./img/svg/symbol-defs.svg#icon-user"></use>
                        </svg>
                        <span>${r||"anon"}</span>
                      </span>
                    </div>
                    <div class="hero__item-text">
                      <h3 class="hero__item-title">${a}</h3>
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
              </li>`).join("");e.insertAdjacentHTML("beforeend",i)}const y="1b829ccd00dd4f02b1e432714347e911",v="https://newsapi.org/v2";async function g({page:e,country:t,pageSize:i}){const a=`${v}/top-headlines?apiKey=${y}&country=${t}&pageSize=${i}&page=${e}`,r=`https://corsproxy.io/?${encodeURIComponent(a)}`,s=await m.get(r);return console.log(s.data),s.data}function _(e,t){e.classList.remove("hidden-hero"),e.addEventListener("click",t)}function p(e,t){e.classList.add("hidden-hero"),e.removeEventListener("click",t)}function L(e){e.classList.remove("hidden-hero")}function w(e){e.classList.add("hidden-hero")}const o={page:1,maxPage:0,country:"us",pageSize:5};async function f(){L(n.heroLoader);try{const{articles:e,totalResults:t}=await g(o);if(o.maxPage=Math.ceil(t/o.pageSize),!e.length){o.country="us",d.error({title:"Error",message:"❌Sorry, there is no news from this country!"});return}n.topHeadlinesHero.innerHTML="",u(n.topHeadlinesHero,e),e.length>0&&t!=e.length?_(n.loadMoreBtnHero,l):p(n.loadMoreBtnHero,l)}catch(e){console.log(e),d.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{w(n.heroLoader)}}n.countrySelect.addEventListener("change",H);async function H(e){o.country=e.target.value,o.page=1,f()}async function l(){o.page+=1;try{const{articles:e}=await g(o);u(n.topHeadlinesHero,e)}catch{}finally{o.page>=o.maxPage&&(d.error({title:"Message",message:`We're sorry, but you've reached the end of search results.
`}),p(n.loadMoreBtnHero,l))}}f();
//# sourceMappingURL=commonHelpers.js.map
