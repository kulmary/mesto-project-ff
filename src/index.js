// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import './pages/index.css';
import './scripts/cards.js'

const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function removeCard(nodeElement) {
    nodeElement.remove();
};


function addCard({ name, link, removeCard }) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = link;
    cardImage.alt = name;
    const removeButton = cardElement.querySelector('.card__delete-button');
    removeButton.addEventListener('click', function () { removeCard(cardElement) });
    return cardElement;
};


initialCards.forEach(function ({ name, link }) {
    console.log(name);
    placesList.append(addCard({ name, link, removeCard }));
});


