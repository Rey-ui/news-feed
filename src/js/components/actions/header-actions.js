import { refs } from '../../services/refs.js';

function showModalBurger(e) {
  if (e.target !== e.currentTarget) {
    refs.headerBurgerEl.classList.remove('active');
  }
  refs.headerBurgerEl.classList.add('active');
}
function hideModalBurger(e) {
  refs.headerBurgerEl.classList.remove('active');
}
export { showModalBurger, hideModalBurger };
