import { inputCont, inputHeader } from "./searchFunction.js";
import { randomImagesDisplay } from "./randomImagesDisplay.js";
import { searchImages, increamentPage } from "./searchImages.js";
import { imgContainer } from "./markupHTML.js";

export default () => {
  const viewportHeight = document.documentElement.clientHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const scrolledToEnd = window.scrollY + viewportHeight >= pageHeight;

  if (scrolledToEnd) {
    const inputs = [inputCont.value, inputHeader.value];
    const areInputsEmpty = inputs.every((input) => input === "");

    if (!areInputsEmpty) {
      inputs.forEach((input) => {
        if (input !== "") {
          for (let i = 0; i < 2; i++) {
            searchImages(input, imgContainer);
            increamentPage();
          }
        }
      });
    } else {
      randomImagesDisplay();
    }
  }
};
