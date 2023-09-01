import { imgContainer } from "./markupHTML.js";

export default (container) => {
  const imgModal = document.querySelector(".img__modal");
  const imgResult = document.querySelectorAll(".expand__image");
  const imgResverse = document.querySelectorAll(".unexpand__image");
  const modalImage = document.querySelector(".modal__image");
  const imgModalMobile = document.querySelector(".img--modal__mobile");
  const imgDescc = document.querySelector(".img__descc");

  const nonDisplay = document.querySelectorAll(".non__display");
  const exitModal = document.querySelector(".exit__modal");
  const head = document.querySelector(".head");
  const spant1 = document.querySelector(".spant1");
  const spant2 = document.querySelector(".spant2");

  const updateStyles = (
    position,
    textAlign,
    marginBottom,
    displayStyle,
    spant1Display,
    spant2Display
  ) => {
    exitModal.style.position = position;
    head.style.textAlign = textAlign;
    head.style.marginBottom = marginBottom;
    nonDisplay.forEach((item) => {
      item.style.display = displayStyle;
    });
    spant1.style.display = spant1Display;
    spant2.style.display = spant2Display;
  };

  const nonDisplayFunc = () => {
    updateStyles("static", "start", "2rem", "none", "none", "none");
  };

  const displayFunc = () => {
    updateStyles("absolute", "center", "0", "flex", "inline", "block");
  };

  container.addEventListener("click", function (e) {
    const clicked = e.target.closest(".desc");
    const unclicked = e.target.closest(".exit__modal");

    if (imgModal) {
      clicked && imgModal.classList.add("expose");
      unclicked && imgModal.classList.remove("expose");
      clicked && clicked.classList.contains("img__descc")
        ? nonDisplayFunc()
        : null;
    }
  });

  const MediaQuery = window.matchMedia("(min-width: 1050px)");

  imgResult.forEach((result) => {
    result.addEventListener("click", () => {
      imgModalMobile.classList.add("expose");
      //console.log(result.src);
      modalImage.src = result.src;
      if (MediaQuery.matches) imgContainer.style.paddingTop = "105vh";
    });
  });

  const overlay = document.querySelectorAll(".overlay");
  overlay.forEach((item) => {
    item.addEventListener("click", (e) => {
      const expandClosest = e.target.parentElement.firstElementChild.src;
      imgModalMobile.classList.add("expose");
      if (MediaQuery.matches) imgContainer.style.paddingTop = "105vh";
      modalImage.src = expandClosest;
    });
  });

  imgResverse.forEach((result) => {
    result.addEventListener("click", () => {
      imgModalMobile.classList.remove("expose");
      if (imgDescc) displayFunc();
      if (MediaQuery.matches) imgContainer.style.paddingTop = "0";
    });
  });
};
