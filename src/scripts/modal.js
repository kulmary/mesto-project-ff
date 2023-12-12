export const openModal = (element) => {
    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalEsc);
}

export const closeModal = (element) => {
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalEsc);
}


export const closeModalEsc = (element) => {
    if (element.key === 'Escape') {
        const currentPopup = document.querySelector('.popup_is-opened');
        closeModal(currentPopup)
    }
}

