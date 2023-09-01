"strict";

import {
  generateImageModal,
  generateHTML,
  generateMarkup,
  generateErrorMessage,
  renderLoading,
  imgContainer,
} from "./markupHTML.js";

import generateModal from "./generateModal.js";

import {
  displaySearchOptions,
  inputCont,
  searchSection,
  inputHeader,
  searchSect,
} from "./searchFunction.js";

document.addEventListener("DOMContentLoaded", function () {
  const accessKey = "wpIKHynwcTsaOIdWi7RoQZEzLYgT864TPEqSWb07vgc";
  const searchOption = document.querySelectorAll(".search__option");
  const searchInputMobile = document.querySelector(".search__input--mobile");
  const searchInputDesktop = document.querySelector(".search__input--desktop");

  function hideLoadingIcon(container) {
    container.innerHTML = "";
  }

  const fetchAndDisplay = async (url, container, generateFunction) => {
    try {
      renderLoading(container);
      const response = await fetch(url);
      if (response.ok) hideLoadingIcon(container);
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
      const url = `https://api.unsplash.com/photos/random?count=30&client_id=${accessKey}`;
      await fetchAndDisplay(url, imgContainer, generateHTML);
      generateModal(imgContainer);
    } catch (err) {
      console.log(err);
      generateErrorMessage();
    }
  };
  for (let i = 0; i < 2; i++) {
    randomImagesDisplay();
  }

  const displaySearch = async () => {
    const url = `https://api.unsplash.com/photos/random?count=6&client_id=${accessKey}`;
    searchOption.forEach((option) => {
      fetchAndDisplay(url, option, generateMarkup);
    });
  };
  displaySearch();

  //Search images function api call
  let page = 1;
  const searchImages = async (inputValue, containerElement) => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`;
    page === 1 ? (containerElement.innerHTML = "") : null;

    try {
      renderLoading(containerElement);
      const response = await fetch(url);
      if (response.ok) hideLoadingIcon(containerElement);
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
    for (let i = 0; i < 3; i++) {
      searchImages(inputHeader.value, imgContainer);
      page++;
    }
  });

  //Implementing infinite scrolling
  const infiniteScroll = () => {
    const viewportHeight = document.documentElement.clientHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrolledToEnd = window.scrollY + viewportHeight >= pageHeight;
    if (scrolledToEnd) {
      const inputs = [inputCont.value, inputHeader.value];
      inputs.forEach((input) => {
        if (input !== "")
          for (let i = 0; i < 2; i++) {
            searchImages(input, imgContainer);
            page++;
          }
      });
    }
  };
  window.addEventListener("scroll", infiniteScroll);
});
