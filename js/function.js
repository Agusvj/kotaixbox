document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const button = document.getElementById("aparecer");
const div = document.getElementById("infoDesplegable");

button.addEventListener("click", function () {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});
