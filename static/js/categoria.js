// Script específico para a página de categoria
document.addEventListener("DOMContentLoaded", function () {
  // Obter parâmetro da categoria da URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("cat");

  if (category) {
    // Atualizar título e conteúdo conforme a categoria
    const categoryNames = {
      politica: "Política",
      economia: "Economia",
      tecnologia: "Tecnologia",
      saude: "Saúde",
      mundo: "Mundo",
    };

    const categoryTitle = document.querySelector(".category-title");
    const categoryDescription = document.querySelector(".category-description");

    if (categoryNames[category]) {
      categoryTitle.textContent = categoryNames[category];

      // Atualizar descrição conforme a categoria
      const descriptions = {
        politica:
          "As últimas notícias sobre política nacional e internacional, eleições, governo e muito mais.",
        economia:
          "Tudo sobre economia, mercado financeiro, investimentos, criptomoedas e negócios.",
        tecnologia:
          "As novidades do mundo tech, inovações, startups, gadgets e tendências digitais.",
        saude:
          "Notícias sobre saúde, medicina, bem-estar, pesquisas científicas e qualidade de vida.",
        mundo:
          "Principais acontecimentos internacionais, relações entre países e eventos globais.",
      };

      categoryDescription.textContent = descriptions[category];

      // Atualizar o menu ativo
      const navLinks = document.querySelectorAll(".main-nav a, .mobile-nav a");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(category)) {
          link.classList.add("active");
        }
      });
    }
  }
});
