const searchTitle = document.querySelector(".search__title");
const footerContainer = document.querySelector(".cont");
const exitInput = document.querySelector(".exit__input");
const searchOptionMobile = document.querySelector(".search__option--mobile");
const inputCont = document.querySelector(".input__cont");
const inputHeader = document.querySelector(".input__header");
const searchSection = document.querySelector(".search__section");
const searchSect = document.querySelector(".search__sect");

//Click and focus event for the search function
const displaySearchOptions = (option, title) => {
  searchOptionMobile.style.display = option;
  searchTitle.style.display = title;
};

inputCont.addEventListener("focus", () => {
  displaySearchOptions("none", "none");
});

searchSection.addEventListener("click", (e) => {
  const ignored = e.target.closest(".input__cont");
  if (ignored) return;
  displaySearchOptions("grid", "block");
});

//For Desktop
inputHeader.addEventListener("focus", () => {
  searchSect.style.display = "block";
  exitInput.style.display = "inline";
});

exitInput.addEventListener("click", () => {
  searchSect.style.display = "none";
  exitInput.style.display = "none";
});

//Highlight footer icon on  click
const footerIcon = document.querySelectorAll(".footer__icon");
const toggleIcon = () =>
  footerIcon.forEach((icon) => icon.classList.remove("current"));
footerIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    toggleIcon();
    icon.classList.add("current");
  });
});

//Display searched page on mobile
footerContainer.addEventListener("click", (e) => {
  const searchClicked = e.target.closest(".search");
  searchClicked
    ? searchSection.classList.add("display__search--section")
    : null;

  const homeClicked = e.target.closest(".home");
  homeClicked
    ? searchSection.classList.remove("display__search--section")
    : null;
});

//Generate random number for message and notification
const afterContent = document.querySelectorAll(".notif");
afterContent.forEach((el) => {
  const random = Math.trunc(Math.random() * 20) + 1;
  el.setAttribute("data-after-content", random);
});

//Listen for event when the question mark icon on the bottom right of the page is clicked
const inquireFunc = () => {
  const inquiry = document.querySelectorAll(".center");
  const question = document.querySelector(".question");
  const quest = document.querySelector(".quest");

  const inquiryFunc = () => {
    inquiry.forEach((inquire) => {
      inquire.style.background = "none";
    });
  };

  inquiry.forEach((focusedInq) => {
    focusedInq.addEventListener("mouseover", () => {
      inquiryFunc();
      focusedInq.style.background = "#e4dfdf";
    });
  });

  question.addEventListener("click", () => {
    quest.classList.toggle("opac");
  });
};

export {
  displaySearchOptions,
  inputCont,
  searchSection,
  inputHeader,
  searchSect,
  inquireFunc,
};
