document.addEventListener('DOMContentLoaded', function() {
    // Atualizar data e hora
    function updateDateTime() {
        const now = new Date();
        
        // Formatar data
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('pt-BR', optionsDate);
        document.getElementById('current-date').textContent = formattedDate;
        
        // Formatar hora
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        document.getElementById('current-time').textContent = `${hours}:${minutes}`;
    }
    
    // Atualizar a cada minuto
    updateDateTime();
    setInterval(updateDateTime, 60000);
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.style.display = 'none';
            }
        });
    });
    
    // Efeito de carregar mais notícias
    const loadMoreBtn = document.querySelector('.load-more');
    const newsList = document.querySelector('.news-list');
    let currentItems = 5;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const newsItems = document.querySelectorAll('.news-item');
            
            for (let i = currentItems; i < currentItems + 5; i++) {
                if (newsItems[i]) {
                    newsItems[i].style.display = 'flex';
                }
            }
            
            currentItems += 5;
            
            // Esconder botão quando todas as notícias estiverem visíveis
            if (currentItems >= newsItems.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
    
    // Animação de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito parallax no hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Simular envio
            setTimeout(() => {
                alert('Obrigado por assinar nossa newsletter!');
                emailInput.value = '';
            }, 500);
        });
    }
    
    // Verificar largura da tela e ajustar menu
    function checkScreenSize() {
        if (window.innerWidth > 768) {
            mainNav.style.display = 'flex';
        } else {
            mainNav.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    
    // Adicionar classe de hover para dispositivos com mouse
    function hasHover() {
        return (window.matchMedia('(hover: hover)').matches);
    }
    
    if (hasHover()) {
        document.body.classList.add('has-hover');
    }
    
    // Efeito de digitação no título da notícia em destaque (opcional)
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle && window.innerWidth > 768) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
});