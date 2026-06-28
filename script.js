/* ============================================
   PREENSADÃO DA XV - SCRIPTS
   Menu mobile, scroll suave, animações, filtros
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       MENU MOBILE (HAMBURGER)
       ============================================ */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /* ============================================
       HEADER SCROLL EFFECT
       ============================================ */
    const header = document.getElementById('header');
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    });

    /* ============================================
       SMOOTH SCROLL PARA LINKS ÂNCORA
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ============================================
       BOTÃO VOLTAR AO TOPO
       ============================================ */
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ============================================
       FILTRO DO CARDÁPIO
       ============================================ */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Atualizar botão ativo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filtrar cards
            menuCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    /* ============================================
       ANIMAÇÕES AO SCROLL (INTERSECTION OBSERVER)
       ============================================ */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Adicionar classe fade-in em elementos animados
    const animatedElements = [
        '.section-header',
        '.menu-card',
        '.feature',
        '.depoimento-card',
        '.promo-card',
        '.info-card',
        '.sobre-image-wrapper',
        '.sobre-content',
        '.contato-info',
        '.contato-form'
    ];

    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
            animationObserver.observe(el);
        });
    });

    /* ============================================
       FORMULÁRIO DE CONTATO
       ============================================ */
    const contatoForm = document.getElementById('contato-form');
    const formMessage = document.getElementById('form-message');

    if (contatoForm) {
        contatoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contatoForm);
            const nome = formData.get('nome');
            const assunto = formData.get('assunto');
            const mensagem = formData.get('mensagem');

            // Validação simples
            if (!nome || !assunto || !mensagem) {
                showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Simulação de envio
            const submitBtn = contatoForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Redireciona para WhatsApp com os dados do formulário
                const whatsappMsg = encodeURIComponent(
                    `Olá! Meu nome é ${nome}.\n\n` +
                    `*Assunto:* ${assunto}\n` +
                    `*Mensagem:* ${mensagem}`
                );

                showFormMessage('Mensagem preparada! Redirecionando para o WhatsApp...', 'success');

                setTimeout(() => {
                    window.open(`https://wa.me/554236231368?text=${whatsappMsg}`, '_blank');
                    contatoForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;

                    setTimeout(() => {
                        formMessage.className = 'form-message';
                        formMessage.style.display = 'none';
                    }, 3000);
                }, 1500);
            }, 1000);
        });
    }

    function showFormMessage(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = `form-message ${type}`;
    }

    /* ============================================
       MÁSCARA DE TELEFONE
       ============================================ */
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length <= 11) {
                value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
                value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            }

            e.target.value = value;
        });
    }

    /* ============================================
       EFEITO PARALLAX NO HERO
       ============================================ */
    const heroBg = document.querySelector('.hero-bg');
    const heroHotdog = document.querySelector('.hero-hotdog');

    if (heroBg && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
                if (heroHotdog) {
                    heroHotdog.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * 0.05}deg)`;
                }
            }
        });
    }

    /* ============================================
       CONTADOR ANIMADO (STATS HERO)
       ============================================ */
    const stats = document.querySelectorAll('.stat strong');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));

                if (!isNaN(number) && number > 0) {
                    animateNumber(target, 0, number, 1500, text);
                }
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    function animateNumber(element, start, end, duration, originalText) {
        const startTime = performance.now();
        const suffix = originalText.replace(/[\d]/g, '');

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * eased);

            element.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = originalText;
            }
        }

        requestAnimationFrame(update);
    }

    /* ============================================
       DESTACAR LINK ATIVO NA NAVEGAÇÃO
       ============================================ */
    const sections = document.querySelectorAll('section[id]');

    const navHighlight = () => {
        const scrollY = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-menu a[href="#${id}"]`);

            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    document.querySelectorAll('.nav-menu a').forEach(a => a.style.color = '');
                    link.style.color = 'var(--primary)';
                    link.style.background = 'rgba(230, 57, 70, 0.1)';
                } else {
                    link.style.color = '';
                    link.style.background = '';
                }
            }
        });
    };

    window.addEventListener('scroll', navHighlight);

    /* ============================================
       ADICIONAR ANIMAÇÃO DE PULSO NOS BOTÕES WHATSAPP
       ============================================ */
    document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-nav').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'pulse-btn 0.6s ease-in-out';
        });
        btn.addEventListener('animationend', () => {
            btn.style.animation = '';
        });
    });

    /* ============================================
       EASTER EGG - CLIQUE NO LOGO
       ============================================ */
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        let clickCount = 0;
        logo.addEventListener('click', (e) => {
            clickCount++;
            if (clickCount === 5) {
                e.preventDefault();
                document.body.style.animation = 'shake 0.5s';
                showEasterEgg();
                clickCount = 0;
            }
        });
    }

    function showEasterEgg() {
        const emojis = ['🌭', '🍔', '🍟', '🥤', '🥓', '🧀'];
        for (let i = 0; i < 30; i++) {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `
                position: fixed;
                font-size: 2rem;
                left: ${Math.random() * 100}vw;
                top: -50px;
                z-index: 9999;
                pointer-events: none;
                animation: fall ${2 + Math.random() * 2}s linear forwards;
            `;
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 4000);
        }
    }

    // Adicionar estilos das animações extras
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse-btn {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        @keyframes fall {
            to {
                transform: translateY(110vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    /* ============================================
       LOG DE INICIALIZAÇÃO
       ============================================ */
    console.log('%c🌭 Cachorrão Prensado 🌭', 'color: #E63946; font-size: 24px; font-weight: bold;');
    console.log('%cO cachorro-quente prensado tradicional de Guarapuava!', 'color: #F77F00; font-size: 14px;');
    console.log('%c📍 Rua XV de Novembro, 6968 - Centro, Guarapuava - PR', 'color: #6C757D; font-size: 12px;');

});