// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import "./pages/index.css";
import { addCard } from "./scripts/card.js";
import { closeModal, openModal } from "./scripts/modal.js";
import { enableValidation, clearValidation } from "./scripts/validation.js";
import {
  getUserProfile,
  getCards,
  updateProfile,
  postCard,
  deleteCard,
  apiAddLike,
  apiDeleteLike,
  apiUpdateAvatar,
} from "./scripts/api.js";

const placesList = document.querySelector(".places__list");

const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_edit");
const popupCloseButtons = document.querySelectorAll(".popup__close");
const profileAddButton = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popups = document.querySelectorAll(".popup");
const profileImage = document.querySelector(".profile__image");
const userName = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.elements.name;
const jobInput = formEditProfile.elements.description;
const formNewPlace = document.forms["new-place"];
const nameNewPlace = formNewPlace.elements["place-name"];
const linkNewPlace = formNewPlace.elements.link;
const popupUpdateAvatar = document.querySelector(".popup_type_update-avatar");
const formUpdateAvatar = document.forms["new-avatar"];
//const inputUpdateAvatar = formUpdateAvatar.querySelector(".popup__input");
const buttonSubmitUpdateAvatar =
  formUpdateAvatar.querySelector(".popup__button");
const buttonSubmitEditProfile = formEditProfile.querySelector(".popup__button");
const buttonSubmitNewPlace = formNewPlace.querySelector(".popup__button");
let userId = "";
//let userTitle = "";
//let userAbout = "";
let userAvatar = "";

const popupCard = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(validationConfig);

function loadInitialData() {
  Promise.all([getUserProfile(), getCards()])
    .then((res) => {
      userName.textContent = res[0].name;
      userDescription.textContent = res[0].about;
      userId = res[0]._id;
      userAvatar = res[0].avatar;
      profileImage.setAttribute("style", `background-image:url(${userAvatar})`);
      const initialCards = res[1];
      initialCards.forEach(function (item) {
        const card = {
          name: item.name,
          link: item.link,
          likes: item.likes,
          _id: item._id,
          owner: { _id: item.owner._id },
        };
        placesList.append(addCard(card, userId, removeCard, addLike,handleOpenCard));
      });
    })
    .catch((err) => {
      console.log("Ошибка: " + err);
    });
}

profileAddButton.addEventListener("click", function () {
  formNewPlace.reset();
  clearValidation(formNewPlace, validationConfig);
  openModal(popupNewCard);
});

profileEditButton.addEventListener("click", function () {
  nameInput.value = userName.textContent; 
  jobInput.value = userDescription.textContent;
  clearValidation(formEditProfile, validationConfig);
  openModal(popupProfile);
});

profileImage.addEventListener("click", () => {
  formUpdateAvatar.reset();
  clearValidation(formUpdateAvatar, validationConfig);
  openModal(popupUpdateAvatar);
});
formUpdateAvatar.addEventListener("submit", updateAvatar);

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  buttonSubmitEditProfile.textContent = "Сохранение...";
  updateProfile(nameInput.value, jobInput.value)
    .then((res) => {
      userName.textContent = nameInput.value;
      userDescription.textContent = jobInput.value;
      closeModal(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitEditProfile.textContent = "Сохранить";
    });
}

 export function handleOpenCard(card){
    openModal(popupCard);
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupCaption.textContent = card.name;
}


function removeCard(evt) {
  evt.preventDefault();
  deleteCard(evt.target.closest(".card").id)
    .then(() => {
      evt.target.closest(".card").remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function addLike(evt) {
  const card = evt.target.closest(".card");
  const likebox = card.querySelector(".card__likes");
  if (evt.target.closest(".card__like-button_is-active")) {
    console.log("id:", card._id);
    apiDeleteLike(card.id)
      .then((res) => {
        console.log("LIKE", res);
        likebox.textContent = res.likes.length;
        evt.target.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  } else {
    apiAddLike(card.id)
      .then((res) => {
        console.log("LIKE", res);
        likebox.textContent = res.likes.length;
        evt.target.classList.toggle("card__like-button_is-active");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function addNewCard(evt) {
  evt.preventDefault();
  buttonSubmitNewPlace.textContent = "Сохранение...";
  const dataCard = {
    name: nameNewPlace.value,
    link: linkNewPlace.value,
    likes: [],
  };
  dataCard.owner = { _id: userId };
  postCard(dataCard)
    .then((res) => {
      placesList.prepend(addCard(res, userId, removeCard, addLike,handleOpenCard));
      formNewPlace.reset();
      closeModal(evt.target.closest(".popup"));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitNewPlace.textContent = "Сохранить";
    });
}

formEditProfile.addEventListener("submit", handleFormProfileSubmit);

formNewPlace.addEventListener("submit", addNewCard);

popupCloseButtons.forEach((item) => {
  item.addEventListener("click", (evt) => {
    closeModal(evt.target.closest(".popup"));
  });
});

popups.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(evt.target);
    }
  });
});

function updateAvatar(evt) {
  evt.preventDefault();
  buttonSubmitUpdateAvatar.textContent = "Сохранение...";
  apiUpdateAvatar(formUpdateAvatar.avatar.value)
    .then((res) => {
      profileImage.removeAttribute("style");
      profileImage.setAttribute("style", `background-image:url(${res.avatar})`);
      closeModal(popupUpdateAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitUpdateAvatar.textContent = "Сохранить";
    });
}

loadInitialData();
