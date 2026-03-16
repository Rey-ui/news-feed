function markupHeroNewsCard(listEl, news) {
  const newNews = news.filter(({ image_url }) => {
    image_url.width >= '200px';
  });
  const markup = news
    .map(({ title, creator, description, pubDate, image_url }) => {
      return `<li class="hero__item">
                <a href="#" class="hero__item-link">
                  <div>${
                    image_url
                      ? `<div class="news-img-wrapper">
        <img src="${image_url}" alt="News" style="width:100%; object-fit:cover; height:400px">
        <div class="news-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="./img/svg/symbol-defs.svg#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`
                      : `<div>
                            <svg class="header__svg" width="35" height="30">
                              <use
                                href="./img/svg/symbol-defs.svg#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`
                  }</div>
                  <div class="hero__item-content">
                    <div class="hero__item-label">
                      <span>
                        <svg class="header__svg" width="35" height="30">
                          <use
                            href="./img/svg/symbol-defs.svg#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(pubDate).toLocaleDateString()}</span>
                      </span>
                      <span>
                        <svg class="header__svg" width="35" height="30">
                          <use href="./img/svg/symbol-defs.svg#icon-user"></use>
                        </svg>
                        <span>${creator || 'anon'}</span>
                      </span>
                    </div>
                    <div class="hero__item-text">
                      <h3 class="hero__item-title">${title}</h3>
                      <p class="hero__item-description">${description}</p>
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
              </li>`;
    })
    .join('');
  listEl.insertAdjacentHTML('beforeend', markup);
}
export default markupHeroNewsCard;
