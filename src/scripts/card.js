import { openPopupImage } from "./modal";
import { popupCard, popupImage, popupCaption } from "../index.js"
const cardTemplate = document.querySelector('#card-template').content;

export function removeCard(nodeElement) {
    nodeElement.remove();
};

export function likeCard(evt) {
    if (evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle('card__like-button_is-active');
    }
}

export function addCard({ name, link, removeCard, likeCard }) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = link;
    cardImage.alt = name;
    const removeButton = cardElement.querySelector('.card__delete-button');
    removeButton.addEventListener('click', function () { removeCard(cardElement) });
    cardImage.addEventListener("click", function () {
        openPopupImage(popupCard);
        popupImage.src = link;
        popupImage.alt = name;
        popupCaption.textContent = name;
    })
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', function (evt) { likeCard(evt) })
    return cardElement;
};
