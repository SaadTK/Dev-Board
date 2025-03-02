document.addEventListener("DOMContentLoaded", function () {
  let themeButton = document.getElementById("theme-btn");
  let body = document.body;

  themeButton.addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = randomColor;
  });
});
