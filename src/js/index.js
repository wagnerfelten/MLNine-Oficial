//dark model
const buttonWhite = document.querySelector(".white");
const buttonDark = document.querySelector(".black");

const mainCard = document.querySelector("#main-card");

buttonWhite.addEventListener("click", () => {
   mainCard.style.backgroundColor = "white";
   buttonDark.classList.remove("hide");
   buttonWhite.classList.add("hide");
})

buttonDark.addEventListener("click", () => {
   location.reload()

    
})
