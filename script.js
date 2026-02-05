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