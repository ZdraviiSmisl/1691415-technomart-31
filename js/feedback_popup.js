const feedbackLink = document.body.querySelector(".company-info__btn");
const popupForm = document.body.querySelector(".modal-feedback");
const popupClouse = document.body.querySelector(".form-feedback__modal-close");
const nameInput = popupForm.querySelector(".form-feedback__name-input");
const emailInput = popupForm.querySelector(".form-feedback__email-input");
const formFeedback = popupForm.querySelector(".form-feedback");
const areaFeedback = popupForm.querySelector(".form-feedback__text")

let isStorageSupport = true;
let storage = "";
let mail = "";

try {
  storage = localStorage.getItem("nameUser");
  mail = localStorage.getItem("emailUser");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.add("modal-show");
  if (storage) {
    nameInput.value = storage;
    nameInput.focus();
  }else if (mail) {
    emailInput.value = mail;
  }
});

popupClouse.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
  popupForm.classList.remove("modal-error");
});

formFeedback.addEventListener("submit", function (evt) {
  if (!emailInput.value || !nameInput.value || !areaFeedback.value) {
    evt.preventDefault();
    popupForm.classList.remove("modal-error");
    popupForm.offsetWidth = popupForm.offsetWidth;
    popupForm.classList.add("modal-error");


  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameUser", nameInput.value);
      localStorage.setItem("emailUser", emailInput.value);
    }
  }

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupForm.classList.contains("modal-show")) {
      evt.preventDefault();
      popupForm.classList.remove("modal-show");
      popupForm.classList.remove("modal-error");
    }
  }
});
