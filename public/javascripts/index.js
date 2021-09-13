//settings btn\
const menuBar = document.querySelector(".hidden-menu-bar");
const menuBtn = document.querySelector(".menu-btn");
const settingsBtn = document.querySelector(".settings");
const accessoriesMenu = document.querySelector(".hidden-menu");
const closeBtn = document.querySelector("#close-nav");
const greeting = document.querySelector("#greet");
const quotesText = document.querySelector("#quotes-text");
const quoteBy = document.querySelector("#quote-by");

showAccessories();
showMenuBar();
greetUser();
randomQuote();
function showAccessories() {
  settingsBtn.addEventListener("click", () => {
    accessoriesMenu.classList.toggle("show-menu");
  });
}
function showMenuBar() {
  menuBtn.addEventListener("click", () => {
    menuBar.classList.toggle("menu-bar");
  });
  closeBtn.addEventListener("click", () => {
    menuBar.classList.toggle("menu-bar");
  });
}
function greetUser() {
  let date = new Date().getHours();
  if (date >= 0 && date < 12) {
    greeting.textContent = "Good Morning";
  } else if (date >= 12 && date < 18) {
    greeting.textContent = "Good afternoon";
  } else if (date >= 18 && date <= 23) {
    greeting.textContent = "Good evening";
  }
}
function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quotesText.textContent = `"${data.content}"`;
      quoteBy.textContent = `--${data.author}`;
      console.log(`Grand output : ${data.content} --${data.author}`);
    });
}
