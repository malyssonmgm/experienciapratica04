document.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    document.body.classList.add("teclado-ativo");
  }
});

document.addEventListener("mousedown", function () {
  document.body.classList.remove("teclado-ativo");
});