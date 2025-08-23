// Dados dos posts - você pode personalizar com seus próprios conteúdos
const instagramPosts = [
  {
    profileImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    profileName: "tvareiabranca",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    likes: 245,
    caption: "Evento incrível que cobrimos esta semana! 🎉",
    hashtags: "#tvab #evento #cobertura",
    timestamp: "2 HORAS ATRÁS",
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    profileName: "tvareiabranca",
    imageUrl:
      "https://images.unsplash.com/photo-1586220180560-75539ba4f09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    likes: 512,
    caption: "Novo estúdio chegando! Fiquem ligados nas novidades. 🎙️",
    hashtags: "#novidades #estudio #tvab",
    timestamp: "1 DIA ATRÁS",
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    profileName: "tvareiabranca",
    imageUrl:
      "https://images.unsplash.com/photo-1572947650440-e8565f5f6dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    likes: 378,
    caption: "Entrevista exclusiva com o prefeito desta semana. Não percam!",
    hashtags: "#entrevista #prefeito #tvab",
    timestamp: "3 DIAS ATRÁS",
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    profileName: "tvareiabranca",
    imageUrl:
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    likes: 421,
    caption: "Nosso time de reportagem sempre em ação! 📹",
    hashtags: "#reportagem #equipe #tvab",
    timestamp: "4 DIAS ATRÁS",
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    profileName: "tvareiabranca",
    imageUrl:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    likes: 329,
    caption: "Programação especial no final de semana! 📺",
    hashtags: "#programacao #finaldesemana #tvab",
    timestamp: "5 DIAS ATRÁS",
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    profileName: "tvareiabranca",
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    likes: 467,
    caption: "Behind the scenes: como é produzir um jornal diário. 🎬",
    hashtags: "#bastidores #jornal #tvab",
    timestamp: "1 SEMANA ATRÁS",
  },
];

// Função para gerar os cards do Instagram
function generateInstagramCards() {
  const feed = document.getElementById("instagramFeed");

  instagramPosts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "instagram-card";
    card.addEventListener("click", () => {
      window.open("https://www.instagram.com/canalareiabranca/", "_blank");
    });

    card.innerHTML = `
                    <div class="card-header">
                        <img src="${post.profileImg}" alt="${
      post.profileName
    }" class="profile-img">
                        <span class="profile-name">${post.profileName}</span>
                    </div>
                    <img src="${
                      post.imageUrl
                    }" alt="Post image" class="card-image">
                    <div class="card-content">
                        <div class="card-actions">
                            <div>
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="far fa-comment"></i></button>
                                <button class="action-btn"><i class="far fa-paper-plane"></i></button>
                            </div>
                            <button class="action-btn"><i class="far fa-bookmark"></i></button>
                        </div>
                        <div class="likes">${post.likes.toLocaleString()} curtidas</div>
                        <p class="caption"><strong>${
                          post.profileName
                        }</strong> ${post.caption}</p>
                        <div class="hashtags">${post.hashtags}</div>
                        <div class="timestamp">${post.timestamp}</div>
                    </div>
                `;

    feed.appendChild(card);
  });
}

// Inicializar os cards quando a página carregar
document.addEventListener("DOMContentLoaded", generateInstagramCards);
