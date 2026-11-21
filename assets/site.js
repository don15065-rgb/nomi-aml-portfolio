const burger = document.getElementById("navBurger");
const links = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});
links.addEventListener("click", e => { if (e.target.tagName === "A") links.classList.remove("open"); });

document.getElementById("year").textContent = new Date().getFullYear();
