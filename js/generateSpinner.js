import { renderLoading, imgContainer } from "./markupHTML.js";

export default () => {
  renderLoading(imgContainer);
  const spinnerEl = document.querySelector(".spinner");
  setTimeout(() => {
    spinnerEl.remove();
  }, 2000);
};
