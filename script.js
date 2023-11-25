const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {

  question.innerHTML = "Yay,See you sooooooon! (^///^)";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    yesBtn.innerHTML="Text a date🗓️";

    yesBtn.addEventListener("click", ()=>redirectToNewPage());
    noBtn.innerHTML = "Cancel Date";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
function redirectToNewPage() {
    window.location.href = "https://wa.me/+918240501104";
  }