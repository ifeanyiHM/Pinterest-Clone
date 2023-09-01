const imgContainer = document.querySelector(".image__container");
const body = document.body;

const generateImageModal = () => {
  const modal = `
    <div class="img--modal__mobile">
      <img class="modal__image" src="" alt="" />
      <div class="img__nav--t">
        <i class="fa-solid fa-angle-left unexpand__image"></i>
        <i class="fa-solid fa-arrow-left unexpand__image"></i>
        <div class="desc img__descc">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="img__nav--b">
        <i class="fa-regular fa-comment"></i>
        <span class="save">Save</span>
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </div>
    </div>
    `;
  imgContainer.insertAdjacentHTML("beforeend", modal);
};

const generateHTML = (result) => {
  return `
      <div class="image__result">
        <img
          class="expand__image expand__closest"
          src="${result.urls.small}"
          alt="${result.alt_description}"
        />
        <div class="img__desc desc">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="overlay">
          <span class="save">Save</span>
          <div class="link">
            <a href="${result.links.download}" target="_blank">
              <i class="fa-solid fa-arrow-up"></i>
              unsplash.com
            </a>
            <div class="img__download">
              <a href="${result.links.html}" target="_blank" download>
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
              </a>
              <div class="img__des">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="img__modal">
          <div class="img__info">
            <div class="head">
              <i class="fa-solid fa-xmark exit__modal"></i>
              <span class="spant1">share</span>
            </div>
            <div class="socials non__display">
              <div>
                <i class="fa-brands fa-whatsapp"></i>
                <p>Whatsapp</p>
              </div>
              <div>
                <i class="fa-brands fa-facebook-messenger"></i>
                <p>Messenger</p>
              </div>
              <div>
                <i class="fa-solid fa-comment"></i>
                <p>Message</p>
              </div>
              <div>
                <i class="fa-brands fa-facebook"></i>
                <p>Facebook</p>
              </div>
              <div>
                <i class="fa-brands fa-twitter"></i>
                <p>Twitter</p>
              </div>
              <div>
                <i class="fa-solid fa-link"></i>
                <p>Link</p>
              </div>
              <div>
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                <p>Share</p>
              </div>
            </div>
            <div class="line non__display"></div>
            <div class="options">
              <p class="spant2">Options</p>
              <p class="non__display">
                <i class="fa-solid fa-thumbtack"></i>Save
              </p>
              <p><i class="fa-solid fa-arrow-up"></i>Open in app</p>
              <p>
                <i class="fa-solid fa-arrow-up-from-bracket"></i>Download
                image
              </p>
              <p class="non__display">
                <i class="fa-solid fa-xmark"></i>Hide
              </p>
              <p class="non__display" class="p">See fewer pins like this</p>
              <p><i class="fa-solid fa-ban"></i>Report</p>
              <p class="p non__display">
                This goes against the community guidelines
              </p>
              <p class="p non__display">
                This pin was inspired by your recent activity
              </p>
            </div>
          </div>
        </div>
      </div>`;
};

const generateMarkup = (res) => {
  return `
     <div class="img__result">
        <img
          src="${res.urls.small}"
          alt="${res.alt_description}"
        />
        <span>${res.user.name}</span>
      </div>
    `;
};

const generateErrorMessage = () => {
  const errorMessage = `
  <section id="error__message">
    <div>
      <i class="fa-brands fa-pinterest"></i>
      <p>
        It look like we are having trouble connecting.<br />
        Please check you internet connection and try again.
      </p>
    </div>
  </section>
  `;
  body.insertAdjacentHTML("beforeend", errorMessage);
};

const renderLoading = (el) => {
  const spinner = `
    <div class="spinner">
      <div class="cont">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    `;
  el.innerHTML = "";
  el.insertAdjacentHTML("afterbegin", spinner);
};

export {
  generateImageModal,
  generateHTML,
  generateMarkup,
  generateErrorMessage,
  renderLoading,
  imgContainer,
};
