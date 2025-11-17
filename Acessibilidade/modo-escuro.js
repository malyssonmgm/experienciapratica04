const toggleBtn = document.getElementById("toggle-contraste");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });
}