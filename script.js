const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");
const copyButton = document.querySelector("#copyButton");
const progressFill = document.querySelector("#progressFill");
const completionText = document.querySelector("#completionText");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("Md Siddiq");
    copyButton.textContent = "Name Copied";
  } catch {
    copyButton.textContent = "Md Siddiq";
  }

  setTimeout(() => {
    copyButton.textContent = "Copy Name";
  }, 1800);
});

const completedItems = document.querySelectorAll(".tracker-list .done").length;
const totalItems = document.querySelectorAll(".tracker-list li").length;
const percentage = Math.round((completedItems / totalItems) * 100);

completionText.textContent = `${completedItems} / ${totalItems} done`;
requestAnimationFrame(() => {
  progressFill.style.width = `${percentage}%`;
});
