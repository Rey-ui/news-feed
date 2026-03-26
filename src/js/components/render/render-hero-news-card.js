import spritePath from '../../../img/svg/symbol-defs.svg';

function markupHeroNewsCard(listEl, news) {
  const markup = news
    .map(({ article_id, title, creator, description, pubDate, image_url }) => {
      return `<li data-id="${article_id}" class="hero__item">
                
                  ${
                    image_url
                      ? `<div class="news-img-wrapper">
        <img src="${image_url}" alt="News" style=" object-fit:cover;">
        <div class="news-fallback" style="display:none">
          <svg class="header__svg"  width="35" height="30">
            <use href="${spritePath}#icon-inbox-paper"></use>
          </svg>
        </div>
     </div>`
                      : `<div class="news-img-wrapper__svg-wrapper">
                            <svg class="news-img-wrapper__svg" width="60" height="60">
                              <use
                                href="${spritePath}#icon-inbox-paper"
                              ></use>
                            </svg>
                          </div>`
                  }
                  <div class="hero__item-content">
                    <div class="hero__item-label">
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use
                            href="${spritePath}#icon-calendar"
                          ></use>
                        </svg>
                        <span>${new Date(pubDate).toLocaleDateString()}</span>
                      </span>
                      <span class="hero__item-label-content">
                        <svg  width="25" height="20">
                          <use href="${spritePath}#icon-user"></use>
                        </svg>
                        <span>${creator || 'anon'}</span>
                      </span>
                    </div>
                    <div class="hero__item-text">
                      <h3 class="hero__item-title">${title}</h3>
                      <p class="hero__item-description">${description}</p>
                    </div>
                    <button class="hero__item-btn" type="button">
                  <span>Read More</span>
                  <svg class="header__svg" width="25" height="20">
                    <use
                      href="${spritePath}#icon-arrow-right"
                    ></use>
                  </svg>
                </button>
                  </div>
              </li>`;
    })
    .join('');
  listEl.insertAdjacentHTML('beforeend', markup);
}
export default markupHeroNewsCard;
