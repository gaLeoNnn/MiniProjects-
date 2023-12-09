// Список видео элементов для показа справа
const playlistURL = "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist";

// Список видео для проигрывания
const videoURL = "https://5d76bf96515d1a0014085cf9.mockapi.io/video/";

const playListWrapper = document.querySelector("#playlist-wrapper");

let playList;

const request = async () => {
  try {
    const response = await fetch(playlistURL);

    if (!response.ok) {
      throw new Error();
    }

    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    playList = await request();

    playList.forEach((item, index) => {
      const isActive = index === 0 ? " active-card" : "";

      const card = ` <div id="${item.id}" class="playlist-card${isActive}">
              <img class="thumbnail" src="${item.thumbnail}" />
              <h3 class="video-card-title">${item.title}</h3>
            </div>`;

      playListWrapper.insertAdjacentHTML("beforeend", card);
    });

    // добавляем слушатель на каждую карточку
    const cards = document.querySelectorAll(".playlist-card");
    cards.forEach(item => {
      item.addEventListener("click", () => addActiveCard(item));
    });
  } catch (error) {
    console.log(error);
  }
};

getData();

function addActiveCard(clickedCard) {
  const cards = document.querySelectorAll(".playlist-card");
  cards.forEach(item => {
    item.classList.remove("active-card");
  });
  clickedCard.classList.add("active-card");
}
