function markCompleted() {
  localStorage.setItem("courseProgress", "100");
  alert("Lesson marked as completed!");
}

window.onload = function () {
  const progress = localStorage.getItem("courseProgress") || 0;
  const bar = document.getElementById("progressFill");

  if (bar) {
    bar.style.width = progress + "%";
    bar.innerText = progress + "%";
  }
};
