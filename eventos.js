const divButton = document.querySelector("div");
const button = document.querySelector("button");

divButton.addEventListener("click", () => {
    alert('Hola! Soy el div');
});

button.addEventListener("click", (event) => {
    event.stopPropagation();
});