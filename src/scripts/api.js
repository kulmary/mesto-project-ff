const onResponce = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const baseUrl="https://nomoreparties.co/v1/cohort-magistr-2/";
const authToken="5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4"

export const getUserProfile = () => {
  return fetch(`${baseUrl}users/me`, {
    headers: {
      authorization: authToken,
    },
  }).then((res)=>onResponce(res));
};


export const getCards = () => {
  return fetch(`${baseUrl}cards`, {
    headers: {
      authorization: authToken,
      "Content-Type": "application/json",
    },
  }).then((res)=>onResponce(res));
};

export const updateProfile = (profileName, profileAbout) => {
  return fetch(`${baseUrl}users/me`, {
    method: "PATCH",
    headers: {
    authorization: authToken,
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
  return fetch(`${baseUrl}cards`, {
    method: "POST",
    headers: {
    authorization: authToken,
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
  return fetch(`${baseUrl}cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: authToken,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: cardId,
    }),
  })
  .then((res)=>onResponce(res))
};

export const apiAddLike = (cardId) => {
  return fetch(`${baseUrl}cards/likes/${cardId}`, {
    method: "PUT",
    headers: {
      authorization: authToken,
        "Content-Type": "application/json",
    },
  })
  .then((res)=>onResponce(res))
};

export const apiDeleteLike = (cardId) => {
  return fetch(`${baseUrl}cards/likes/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: authToken,
        "Content-Type": "application/json",
    },
  })
  .then((res)=>onResponce(res))
};

export const apiUpdateAvatar = (avatar) => {
  return fetch(`${baseUrl}users/me/avatar `, {
    method: "PATCH",
    headers: {
      authorization: authToken,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: avatar,
    }),
  })
  .then((res)=>onResponce(res))

};

