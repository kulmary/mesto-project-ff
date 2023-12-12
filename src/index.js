// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import "./pages/index.css";
import { removeCard, addCard, likeCard } from './scripts/card.js';
import { initialCards } from './scripts/cards.js';
import { closeModal, openModal } from './scripts/modal.js';

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const profileAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popups = document.querySelectorAll('.popup');
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__description');
const formElement = document.forms['edit-profile'];
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;
const formNewPlace = document.forms['new-place'];
const nameNewPlace = formNewPlace.elements['place-name'];
const linkNewPlace = formNewPlace.elements.link;
export const popupCard = document.querySelector('.popup_type_image');
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');

profileAddButton.addEventListener('click', function () {
    openModal(popupNewCard);
})

profileEditButton.addEventListener('click', function () {
    openModal(popupProfile);
    nameInput.value = userName.textContent;
    jobInput.value = userDescription.textContent;
});

function handleFormProfileSubmit(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userDescription.textContent = jobInput.value;
    closeModal(evt.target.closest('.popup'));
}

function addNewCard(evt) {
    evt.preventDefault();
    const name = nameNewPlace.value;
    const link = linkNewPlace.value;
    placesList.prepend(addCard({ name, link}));
    nameNewPlace.value = '';
    linkNewPlace.value = '';
    closeModal(evt.target.closest('.popup'));
}

formElement.addEventListener('submit', handleFormProfileSubmit);

formNewPlace.addEventListener('submit', addNewCard)


popupCloseButtons.forEach((item) => {
    item.addEventListener('click', (evt) => {
        closeModal(evt.target.closest('.popup'))
    })
})


popups.forEach((item) => {
    item.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            closeModal(evt.target)
        }
    })
})

initialCards.forEach(function ({ name, link }) {
    placesList.append(addCard({ name, link}));
});


