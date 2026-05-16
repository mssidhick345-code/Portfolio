const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");
const copyButton = document.querySelector("#copyButton");
const typingText = document.querySelector("#typingText");
const typingWords = ["Full Stack Developer", "HTML Builder", "CSS Designer", "JavaScript Developer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

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

function typeRole() {
  const currentWord = typingWords[wordIndex];

  if (isDeleting) {
    letterIndex -= 1;
  } else {
    letterIndex += 1;
  }

  typingText.textContent = currentWord.slice(0, letterIndex);

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeRole, 1300);
    return;
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
  }

  setTimeout(typeRole, isDeleting ? 55 : 95);
}

typeRole();
