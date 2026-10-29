/**
 * Toggles hamburger menu state for mobile navigation and updates ARIA state.
 */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    const isOpen = icon.classList.contains("open");
    icon.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }
}

// Add event listeners for hamburger menu, navigation links, and keyboard accessibility
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", toggleMenu);
    hamburgerIcon.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
    });
  }

  const menuLinks = document.querySelectorAll(".menu-links a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector(".menu-links");
      if (menu && menu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  // Close hamburger menu when pressing Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const menu = document.querySelector(".menu-links");
      if (menu && menu.classList.contains("open")) {
        toggleMenu();
        if (hamburgerIcon) {
          hamburgerIcon.focus();
        }
      }
    }
  });

  // Close hamburger menu when clicking outside navigation
  document.addEventListener("click", (event) => {
    const hamburgerNav = document.getElementById("hamburger-nav");
    const menu = document.querySelector(".menu-links");
    if (menu && menu.classList.contains("open") && hamburgerNav && !hamburgerNav.contains(event.target)) {
      toggleMenu();
    }
  });
});
