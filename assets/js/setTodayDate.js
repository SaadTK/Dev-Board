document.addEventListener("DOMContentLoaded", function () {
  let dayElement = document.getElementById("today-day");
  let dateElement = document.getElementById("today-date");

  let today = new Date();

  let dayOptions = { weekday: "short" };
  let dateOptions = { year: "numeric", month: "short", day: "numeric" };

  let dayText = today.toLocaleDateString("en-US", dayOptions);
  let dateText = today.toLocaleDateString("en-US", dateOptions);

  dayElement.textContent = dayText + " ,";
  dateElement.textContent = dateText;
});
