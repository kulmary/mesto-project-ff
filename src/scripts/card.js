import { openModal } from "./modal";
import { popupCard, popupImage, popupCaption } from "../index.js"
const cardTemplate = document.querySelector('#card-template').content;

export function addCard(card,userId,removeCard,addLike) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = card.name;
    const cardImage = cardElement.querySelector('.card__image');
    const cardLikes = cardElement.querySelector(".card__likes");
    cardElement.setAttribute("id", card._id);
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardLikes.textContent = card.likes.length;
    const removeButton = cardElement.querySelector('.card__delete-button');
    removeButton.addEventListener('click', removeCard);
    if (userId !== card.owner._id) {
        removeButton.remove();
    }
    card.likes.forEach((item) => {
        if (item._id === userId) {
          likeButton.classList.add("card__like-button_is-active");
        }
      });
    cardImage.addEventListener("click", function () {
        openModal(popupCard);
        popupImage.src = card.link;
        popupImage.alt = card.name;
        popupCaption.textContent = card.name;
    })
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener("click", addLike)
    return cardElement;
};
