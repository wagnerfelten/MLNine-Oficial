//dark model
const buttonWhite = document.querySelector(".white");
const buttonDark = document.querySelector(".dark");

const mainCard = document.querySelector("#main-card");

buttonWhite.addEventListener("click", () => {
   mainCard.style.backgroundColor = "white";
   buttonWhite.classList.add("hide");
   buttonDark.classList.remove("hide")
})

buttonDark.addEventListener("click", () => {
    buttonWhite.classList.remove("hide");
   buttonDark.classList.add("hide")

   alert("oks")
})