// Script específico para a página de matéria
document.addEventListener("DOMContentLoaded", function () {
  // Compartilhamento em redes sociais
  const socialLinks = document.querySelectorAll(".social-share a");
  const articleTitle = encodeURIComponent(document.title);
  const articleUrl = encodeURIComponent(window.location.href);

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let shareUrl = "";

      if (this.classList.contains("facebook")) {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
      } else if (this.classList.contains("twitter")) {
        shareUrl = `https://twitter.com/intent/tweet?text=${articleTitle}&url=${articleUrl}`;
      } else if (this.classList.contains("whatsapp")) {
        shareUrl = `https://api.whatsapp.com/send?text=${articleUrl}`;
      } else if (this.classList.contains("linkedin")) {
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}&title=${articleTitle}`;
      } else if (this.classList.contains("telegram")) {
        shareUrl = `https://t.me/share/url?url=${articleUrl}&text=${articleTitle}`;
      }

      window.open(shareUrl, "_blank", "width=600,height=400");
    });
  });
});
