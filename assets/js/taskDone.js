document.addEventListener("DOMContentLoaded", function () {
  let taskCountElement = document.getElementById("task-number");
  let activityLog = document.querySelector(".activities");
  let completeButtons = document.querySelectorAll(".deadline-right button");

  let taskCount = parseInt(taskCountElement.textContent); // change string to number

  completeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (!button.disabled) {
        let deadlineBox = button.parentElement;

        // change the bg to gray
        deadlineBox.style.backgroundColor = "gray";
        deadlineBox.style.cursor = "not-allowed";

        // disable the button
        button.disabled = true;
        button.textContent = "Completed";

        // decrease task count
        taskCount -= 1;
        taskCountElement.textContent = taskCount;

        // get task name
        let taskName = button.closest(".card").querySelector("h3").textContent;

        // get current time
        let now = new Date();
        let time = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // update the activity history
        let activityEntry = document.createElement("div");
        activityEntry.textContent = `You have completed '${taskName}' at ${time}`;
        activityEntry.classList.add(
          "mt-2",
          "text-sm",
          "text-gray-600",
          "bg-slate-300",
          "p-[10px]",
          "rounded-lg"
        );
        activityLog.appendChild(activityEntry);

        // show conpleted alert
        alert(`You have completed '${taskName}' at ${time}`);

        // check if all tasks are completed and show "Congrates"
        if (taskCount === 0) {
          alert("Congratulations for completing all tasks!");
        }
      }
    });
  });
});
