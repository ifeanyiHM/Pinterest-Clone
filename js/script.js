"strict";

import { randomImagesDisplay, displaySearch } from "./randomImagesDisplay.js";
import infiniteScroll from "./infiniteScrolling.js";
import { generateInquiry } from "./markupHTML.js";
import { inquireFunc } from "./searchFunction.js";
import generateSpinner from "./generateSpinner.js";

document.addEventListener("DOMContentLoaded", function () {
  //Loading Spinner before displaying random images
  generateSpinner();

  //Load the question mark element on the bottom right of the page
  generateInquiry();

  //Display random images
  for (let i = 0; i < 2; i++) {
    randomImagesDisplay();
  }

  //Display a few random images when the search input is focused
  displaySearch();

  //Infinite scrolling: loading more images when scrolled to the bottom
  window.addEventListener("scroll", infiniteScroll);

  //Listen for event when the question mark icon on the bottom right of the page is clicked
  inquireFunc();
});
