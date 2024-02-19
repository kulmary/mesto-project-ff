function onResponce(res){
    return res.ok ? res.json() : res.json().then((err)=>{Promise.reject(`Ошибка: ${res.status}`)})
}

export const getUserProfile = () => {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/users/me`, {
    headers: {
      authorization: "5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4",
    },
  }).then((res)=>onResponce(res));
};


export const getCards = () => {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/cards`, {
    headers: {
      authorization: "5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4",
    },
  })
    .then((res)=>onResponce(res))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Ошибка: ", err);
    });
};

export const updateProfile = (profileName, profileAbout) => {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/users/me`, {
    method: "PATCH",
    headers: {
    authorization: "5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: profileName,
      about: profileAbout,
    }),
  })
    .then((res)=>onResponce(res))
};

export const postCard = (dataCard)=>{
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/cards`, {
    method: "POST",
    headers: {
    authorization: "5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: dataCard.name,
      link: dataCard.link,
    }),
  })
    .then((res)=>onResponce(res))
}

export const deleteCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: "5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: cardId,
    }),
  })
  .then((res)=>onResponce(res))
};

export const apiAddLike = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/cards/likes/${cardId}`, {
    method: "PUT",
    headers: {
      authorization: "5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4",
        "Content-Type": "application/json",
    },
  })
  .then((res)=>onResponce(res))
};

export const apiDeleteLike = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: "5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4",
        "Content-Type": "application/json",
    },
  })
  .then((res)=>onResponce(res))
};

export const apiUpdateAvatar = (avatar) => {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/users/me/avatar `, {
    method: "PATCH",
    headers: {
      authorization: "5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: avatar,
    }),
  })
  .then((res)=>onResponce(res))

};

