document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  mobileMenuClose.addEventListener("click", function () {
    closeMobileMenu();
  });

  mobileMenuOverlay.addEventListener("click", function () {
    closeMobileMenu();
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Fechar menu ao clicar em um link
  const mobileLinks = document.querySelectorAll(".mobile-nav a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });
});
