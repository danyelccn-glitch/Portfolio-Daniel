window.addEventListener('load', () => {
    const bar = document.getElementById('bar');
    const percent = document.getElementById('percent');
    const preloader = document.getElementById('preloader');
    
    let width = 0;
    
    // Simulação de carregamento progressivo
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            
            // Pequeno delay para o usuário ver o 100%
            setTimeout(() => {
                preloader.classList.add('loader-finish');
            }, 500);
        } else {
            width += Math.floor(Math.random() * 10) + 1;
            if (width > 100) width = 100;
            bar.style.width = width + '%';
            percent.innerText = width + '%';
        }
    }, 100);
});

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links que começam com "http" (links externos)
    const linksExternos = document.querySelectorAll('a[href^="http"]');

    linksExternos.forEach(link => {
        // Define para abrir em nova aba
        link.setAttribute('target', '_blank');
        // Adiciona segurança (boa prática para links externos)
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

// Seleciona o formulário
const formulario = document.querySelector('.formulario-cyber');

// Verifica se o formulário existe na página atual (para não dar erro em outras páginas)
if (formulario) {
    formulario.addEventListener('submit', function (e) {
        // NÃO use e.preventDefault(); 
        // Apenas deixe o alerta rodar antes do redirecionamento
        alert('TRANSMISSÃO INICIADA! Resolva o Captcha na próxima tela para finalizar. SHOWWWWWWW!');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const menuLinks = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
        
        // Animação opcional no botão hambúrguer (transforma em X)
        menuToggle.classList.toggle('is-active');
    });

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.classList.remove('active');
        });
    });
});


// Remove Service Workers ativos que causam o erro de 'fetch handler nulo'
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
            registration.unregister();
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card-projeto');
    
    // Som de processamento (Bip tecnológico)
    const playScanSound = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime); // Frequência alta para o "bip"
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    };

    // Função para revelar os projetos um por um
    const revealProjects = () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                // Adiciona a classe que dispara o CSS de animação
                card.classList.add('reveal-active');
                playScanSound();
                
                // Log para debug no console (Estilo Terminal)
                console.log(`> BIO-SCAN: PROJETO ${index + 1} CARREGADO...`);
            }, index * 600); // 600ms de intervalo entre cada projeto
        });
    };

    // Dispara a animação após o carregamento do sistema (index.html)
    setTimeout(revealProjects, 1000);
});

// Adicione ao seu script.js
const revealOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Adiciona um delay baseado no índice para o efeito sequencial
                setTimeout(() => {
                    entry.target.classList.add('reveal-active');
                    playScanSound(); // Sua função de bip
                }, index * 200); 
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.card-projeto').forEach(card => {
        observer.observe(card);
    });
};

document.addEventListener('DOMContentLoaded', revealOnScroll);

function playScanSound() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine'; // Som limpo de tecnologia
    osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
}

window.abrirProjeto = function(event, url) {
    event.preventDefault();
    const card = event.currentTarget;

    // 1. Som de "Descompressão Digital"
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'pink'; // Ruído para efeito de fumaça/ar
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.8);

    // 2. Aplica a classe de animação
    card.classList.add('projeto-clicado');

    // 3. Redireciona após a animação terminar
    setTimeout(() => {
        window.location.href = url;
    }, 800);
};


document.addEventListener("DOMContentLoaded", () => {
    // 1. Simulação do Preloader (0% a 100%)
    let percent = document.getElementById("percent");
    let bar = document.getElementById("bar");
    let count = 0;
    
    let interval = setInterval(() => {
        count++;
        percent.innerHTML = count + "%";
        bar.style.width = count + "%";
        if (count === 100) {
            clearInterval(interval);
            document.getElementById("preloader").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("preloader").style.display = "none";
                revealProjects(); // Inicia revelação dos projetos
            }, 500);
        }
    }, 20);

    // 2. Som de Scan Tecnológico
    const playScanSound = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    };

    // 3. Revelação Sequencial (Efeito Varredura Laser)
    const revealProjects = () => {
        const items = document.querySelectorAll('.reveal-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
                playScanSound();
            }, index * 400); // 400ms entre cada projeto
        });
    };

    // 4. Efeito de Fumaça Digital ao Clicar
    window.abrirProjeto = function(event, url) {
        event.preventDefault();
        const card = event.currentTarget;
        card.classList.add('smoke-effect');
        
        setTimeout(() => {
            window.open(url, '_blank');
            card.classList.remove('smoke-effect');
        }, 800);
    };
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Controle do Preloader
    let count = 0;
    const bar = document.getElementById("bar");
    const percent = document.getElementById("percent");
    const preloader = document.getElementById("preloader");

    const loading = setInterval(() => {
        count++;
        if(percent) percent.innerText = count + "%";
        if(bar) bar.style.width = count + "%";

        if (count >= 100) {
            clearInterval(loading);
            iniciarApresentacao();
        }
    }, 15);

    // 2. Efeito de Apresentação de Projetos (Intro)
    function iniciarApresentacao() {
        const intro = document.getElementById('intro-apresentacao');
        const introText = document.getElementById('intro-text');
        const projetos = ["HNUNES IMOBILIÁRIA", "COMERCIAL ARAGUAIA", "THREE TECHNOLOGY", "CLÍNICA CORE", "DANIEL_PORTFOLIO v2.0"];
        
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.display = "none", 500);

        // Ciclo de exibição dos nomes dos projetos na intro
        let i = 0;
        const textCycle = setInterval(() => {
            introText.innerText = projetos[i];
            introText.setAttribute('data-text', projetos[i]); // Efeito glitch
            playScanSound(800 + (i * 100)); // Som sobe de tom
            i++;
            if (i >= projetos.length) {
                clearInterval(textCycle);
                setTimeout(liberarSistema, 1000);
            }
        }, 500);
    }

    function liberarSistema() {
        const intro = document.getElementById('intro-apresentacao');
        intro.style.filter = "blur(50px) brightness(5)";
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none";
            revealAllItems(); // Ativa os efeitos da página atual
        }, 800);
    }

    // 3. Efeito de Revelação Laser para qualquer página
    function revealAllItems() {
        const items = document.querySelectorAll('.reveal-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
                playScanSound(1000);
            }, index * 300);
        });
    }

    // 4. Gerador de Áudio Tech
    function playScanSound(freq = 1000) {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square'; // Som mais robótico
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dados para o Showcase (Imagens e Nomes de Módulo Tech)
    const projetosApresentacao = [
        { nome: "> MODULE: HNUNES_REAL_ESTATE", img: "./img/hn.png" },
        { nome: "> MODULE: VALE_ARAGUAIA_COMMERCIAL", img: "./img/ca.png" },
        { nome: "> MODULE: THREE_TECH_EDUCATION", img: "./img/trheee.png" },
        { nome: "> MODULE: CLINICA_CORE_HEALTH_TECH", img: "./img/cc.png" },
        { nome: "> MODULE: DANIEL_PORTFOLIO_V2", img: "./img/portifolio.png" }
    ];

    let count = 0;
    const bar = document.getElementById("bar");
    const percent = document.getElementById("percent");
    const preloader = document.getElementById("preloader");
    const intro = document.getElementById('intro-apresentacao');
    const introText = document.getElementById('intro-text');
    const introImg = document.getElementById('intro-img');

    // 2. Lógica do Preloader (0% a 100%) - Unificada
    const loading = setInterval(() => {
        count++;
        if (percent) percent.innerText = count + "%";
        if (bar) bar.style.width = count + "%";

        if (count >= 100) {
            clearInterval(loading);
            iniciarShowcaseTecnologico();
        }
    }, 15); // Velocidade do carregamento

    // 3. Função de Apresentação Visual Única
    function iniciarShowcaseTecnologico() {
        // Esconde o preloader e libera a intro
        if (preloader) {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.style.display = "none", 500);
        }

        if (!introImg || !introText) return liberarAcesso(); // Garante que não trave

        let i = 0;
        const showCycle = setInterval(() => {
            // Aplica a nova imagem e texto
            introImg.src = projetosApresentacao[i].img;
            introText.innerText = projetosApresentacao[i].nome;
            
            // Reinicia a animação de "Flash" na imagem (Efeito de Tecnologia)
            introImg.style.animation = 'none';
            introImg.offsetHeight; // Truque para resetar animação
            introImg.style.animation = 'imgFlash 0.4s ease-out forwards';
            
            // Toca som de "Data Processing" sincronizado
            playTechSound(1200 - (i * 100)); // Som sobe/desce de tom

            i++;
            // Quando terminar a lista de projetos, libera o site
            if (i >= projetosApresentacao.length) {
                clearInterval(showCycle);
                setTimeout(liberarAcesso, 1200);
            }
        }, 850); // Velocidade da troca (850ms por projeto)
    }

    function liberarAcesso() {
        if (intro) {
            intro.style.filter = "blur(30px) brightness(3)"; // Efeito de saída Tech
            intro.style.opacity = "0";
            setTimeout(() => {
                intro.style.display = "none";
                // Ativa os efeitos de laser verde nos elementos da página (reveal-item)
                document.querySelectorAll('.reveal-item').forEach((item, index) => {
                    setTimeout(() => item.classList.add('active'), index * 250);
                });
            }, 700);
        }
    }

    function playTechSound(freq) {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth'; // Som mais "digital/industrial"
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.start(); osc.stop(audioCtx.currentTime + 0.05);
        } catch(e) { console.log("Áudio bloqueado pelo browser."); }
    }
});