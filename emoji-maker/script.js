const colors = document.querySelectorAll(".skin");
const rightСard = document.querySelector(".card.right-card");
const skinImg = rightСard.querySelector("#skin");
const eyeImg = rightСard.querySelector("#eyes");
const mouthImg = rightСard.querySelector("#mouth");

const skinCard = document.querySelector("#select-skin-card");
const eyeCard = document.querySelector("#select-eyes-card");
const mouthCard = document.querySelector("#select-mouth-card");

const yellowSkin = document.getElementById("yellow-skin");
const greenSkin = document.getElementById("green-skin");
const redSkin = document.getElementById("red-skin");

yellowSkin.addEventListener("click", function () {
  skinImg.src = "/emoji-maker/assets/skin/yellow.png";
});

greenSkin.addEventListener("click", function () {
  skinImg.src = "/emoji-maker/assets/skin/green.png";
});

redSkin.addEventListener("click", function () {
  skinImg.src = "/emoji-maker/assets/skin/red.png";
});

const arrowSkin = document.querySelector(".next-step.show-eyes-card");
const arrowEye = document.querySelector("#show-skin-card");
const arrowMouth = document.querySelector("#show-mouth-card");
const arrowPrev = document.querySelector(".previous-step.show-eyes-card");

arrowSkin.addEventListener("click", () => {
  skinCard.style.display = "none";
  eyeCard.style.display = "block";
});
arrowEye.addEventListener("click", () => {
  skinCard.style.display = "block";
  eyeCard.style.display = "none";
});

arrowMouth.addEventListener("click", () => {
  eyeCard.style.display = "none";
  mouthCard.style.display = "block";
});
arrowPrev.addEventListener("click", () => {
  eyeCard.style.display = "block";
  mouthCard.style.display = "none";
});

eyeCard.addEventListener("click", e => {
  const targetId = e.target.id;

  switch (targetId) {
    case "eye-normal":
      eyeImg.src = "./assets/eyes/normal.png";
      break;
    case "eye-closed":
      eyeImg.src = "./assets/eyes/closed.png";
      break;
    case "eye-long":
      eyeImg.src = "./assets/eyes/long.png";
      break;
    case "eye-laughing":
      eyeImg.src = "./assets/eyes/loughing.png";
      break;
    case "eye-rolling":
      eyeImg.src = "./assets/eyes/rolling.png";
      break;
    case "eye-winking":
      eyeImg.src = "./assets/eyes/winking.png";
      break;
    default:
      break;
  }
});

mouthCard.addEventListener("click", e => {
  const targetId = e.target.id;
  switch (targetId) {
    case "mouth-open":
      mouthImg.src = "./assets/mouth/open.png";
      break;
    case "mouth-smiling":
      mouthImg.src = "./assets/mouth/smiling.png";
      break;
    case "mouth-straight":
      mouthImg.src = "./assets/mouth/straight.png";
      break;
    case "mouth-sad":
      mouthImg.src = "./assets/mouth/sad.png";
      break;
    case "mouth-teeth":
      mouthImg.src = "./assets/mouth/teeth.png";
      break;
    case "eye-winking":
      mouthImg.src = "./assets/eyes/winking.png";
      break;
    default:
      break;
  }
});
