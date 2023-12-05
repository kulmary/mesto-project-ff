// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function removeCard(nodeElement) {
    nodeElement.remove();
};


function addCard(cardName, cardLink, removeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = cardName;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardLink;
    cardImage.alt = cardName;
    const removeButton = cardElement.querySelector('.card__delete-button');
    removeButton.addEventListener('click', function () { removeCard(cardElement) });
    return cardElement;
};


initialCards.forEach(function (element) {
    placesList.append(addCard(element.name, element.link, removeCard));
});


