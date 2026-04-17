import spritePath from '../../../img/svg/symbol-defs.svg';

function markupModalNews({
  title,
  image_url,
  pubDate,
  creator,
  category,
  language,
  description,
  link,
}) {
  return `<div class="news-modal__container">
            <button class="news-modal__close-btn"><svg class="header__svg" width="15" height="15">
                  <use href="${spritePath}#icon-close"></use>
                </svg></button>
            <h3 class="news-modal__title">${title}</h3>
            <div class="news-modal__content">
                ${
                  image_url
                    ? `
                <div class="news-modal__news-img-wrapper">
                    <img src="${image_url}" alt="News" style="object-fit: cover" />
                    <div class="news-modal__news-fallback" style="display: none">
                    <svg class="header__svg" width="35" height="30">
                        <use href="${spritePath}#icon-inbox-paper"></use>
                    </svg>
                    </div>
                </div>
                `
                    : `
                <div class="news-modal__news-img-wrapper__svg-wrapper">
                    <svg
                    class="news-modal__news-img-wrapper__svg"
                    width="60"
                    height="60"
                    >
                    <use href="${spritePath}#icon-inbox-paper"></use>
                    </svg>
                </div>
                `
                }
                <div class="news-modal__main-info">
                    <div class="news-modal__label">
                    <div class="news-modal__label-content">
                        <span class="news-modal__label-text">
                        <svg width="25" height="20">
                            <use href="${spritePath}#icon-calendar"></use>
                        </svg>
                        <span>${new Date(pubDate).toLocaleDateString()}</span>
                        </span>
                        <span class="news-modal__label-text">
                        <svg width="25" height="20">
                            <use href="${spritePath}#icon-user"></use>
                        </svg>
                        <span>${creator || 'anon'}</span>
                        </span>
                    </div>
                    <div class="news-modal__label-category">
                        ${category
                          .map(categoryItem => {
                            return `<span>${categoryItem}</span>`;
                          })
                          .join(' ')}
                    </div>
                    <div class="news-modal__label-lang">
                        <span>Lang:</span>${language}
                    </div>
                    </div>
                    <p class="news-modal__description">${description ? description : 'there are no details on this post...'}</p>
                </div>
                <a href="${link}" target="_blank" class="news-modal__link"
                    >Link to the original source: <span>${link}</span></a>
            </div>
      </div>`;
}
export default markupModalNews;
