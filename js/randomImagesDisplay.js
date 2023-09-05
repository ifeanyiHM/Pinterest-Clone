import { imgContainer } from "./markupHTML.js";
import generateModal from "./generateModal.js";
import {
  generateImageModal,
  generateErrorMessage,
  generateMarkup,
  generateHTML,
} from "./markupHTML.js";

const searchOption = document.querySelectorAll(".search__option");
const accessKey = "wpIKHynwcTsaOIdWi7RoQZEzLYgT864TPEqSWb07vgc";

const fetchAndDisplay = async (url, container, generateFunction) => {
  try {
    const response = await fetch(url);
    generateImageModal();
    const data = await response.json();
    data.forEach((result) => {
      container.insertAdjacentHTML("beforeend", generateFunction(result));
    });
  } catch (err) {
    throw err;
  }
};

const randomImagesDisplay = async () => {
  try {
    const url = `https://api.unsplash.com/photos/random?count=20&client_id=${accessKey}`;
    await fetchAndDisplay(url, imgContainer, generateHTML);
    generateModal(imgContainer);
  } catch (err) {
    console.log(err);
    generateErrorMessage();
  }
};
//   for (let i = 0; i < 2; i++) {
//     randomImagesDisplay();
//   }

const displaySearch = async () => {
  const url = `https://api.unsplash.com/photos/random?count=6&client_id=${accessKey}`;
  searchOption.forEach((option) => {
    fetchAndDisplay(url, option, generateMarkup);
  });
};
//displaySearch();

export { randomImagesDisplay, displaySearch, accessKey };
