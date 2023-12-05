// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list');


function removeCard(card) {
    card.remove();
};


function addCard(cardName, cardLink, removeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = cardName;
    cardElement.querySelector('.card__image').src = cardLink;
    const removeButton = cardElement.querySelector('.card__delete-button');
    removeButton.addEventListener('click', removeCard(cardElement));
    return cardElement;
};

initialCards.forEach(function (element) {
    placesList.append(addCard(element.name, element.link, removeCard));
});


