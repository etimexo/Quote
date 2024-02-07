const quote = document.querySelector(".quote");
const owner = document.querySelector(".author");
const reloadBtn = document.querySelector(".reload");
// const leftIcon = document.querySelector(".icon-left")
reloadBtn.addEventListener("click", randomQuote);
window.addEventListener("DOMContentLoaded", randomQuote)

async function randomQuote() {
  const data = await fetch("https://api.quotable.io/random");
  const display = await data.json();
  const { content, author } = display;
  quote.textContent = content;
  owner.textContent = author;
  console.log(display)
}
