function markupHeroNewsCard(listEl, news) {
  const markup = news
    .map(({ title, author, description, publishedAt, urlToImage }) => {
      return `<li class="hero__item">
                <a href="#" class="hero__item-link">
                  <div>${
                    urlToImage
                      ? `<img src="${urlToImage}" alt="News" class=""/>`
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
                        <span>${new Date(publishedAt).toLocaleDateString()}</span>
                      </span>
                      <span>
                        <svg class="header__svg" width="35" height="30">
                          <use href="./img/svg/symbol-defs.svg#icon-user"></use>
                        </svg>
                        <span>${author || 'anon'}</span>
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
