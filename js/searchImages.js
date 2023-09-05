import { imgContainer } from "./markupHTML.js";
import generateModal from "./generateModal.js";
import { inputCont, inputHeader } from "./searchFunction.js";
import { searchSect, searchSection } from "./searchFunction.js";
import { accessKey } from "./randomImagesDisplay.js";
import {
  generateImageModal,
  generateErrorMessage,
  generateHTML,
} from "./markupHTML.js";

const searchInputMobile = document.querySelector(".search__input--mobile");
const searchInputDesktop = document.querySelector(".search__input--desktop");

var page = 1;
const searchImages = async (inputValue, containerElement) => {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`;
  page === 1 ? (containerElement.innerHTML = "") : null;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    results.forEach((result) => {
      containerElement.insertAdjacentHTML("beforeend", generateHTML(result));
    });
    generateImageModal();
    generateModal(containerElement);
  } catch (err) {
    console.log(err);
    generateErrorMessage();
  }
  page++;
};

//For mobile || search images
searchInputMobile.addEventListener("submit", (e) => {
  e.preventDefault();
  searchSection.classList.remove("display__search--section");
  page = 1;
  for (let i = 0; i < 4; i++) {
    searchImages(inputCont.value, imgContainer);
    page++;
  }
  setTimeout(() => {
    displaySearchOptions("grid", "block");
  }, 1000);
});

//For Desktop || search images
searchInputDesktop.addEventListener("submit", (e) => {
  e.preventDefault();
  searchSect.style.display = "none";
  page = 1;
  for (let i = 0; i < 2; i++) {
    searchImages(inputHeader.value, imgContainer);
    page++;
  }
});

const increamentPage = () => page++;
export { searchImages, increamentPage };
