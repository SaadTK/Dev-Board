document.addEventListener("DOMContentLoaded", function () {
  let clearHistoryButton = document.getElementById("clear-history-btn");
  let activityLog = document.getElementById("activity-history");

  clearHistoryButton.addEventListener("click", function () {
    activityLog.innerHTML = "";
  });
});
