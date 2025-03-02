document.addEventListener("DOMContentLoaded", function () {
  let discoverSection = document.getElementById("discover-something-new");

  if (discoverSection) {
    discoverSection.addEventListener("click", function () {
      window.location.href = "blog.html";
    });
  }
});
