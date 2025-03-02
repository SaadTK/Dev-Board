document.addEventListener("DOMContentLoaded", function () {
  let discoverSection = document.getElementById("back-btn");

  if (discoverSection) {
    discoverSection.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});
