document.addEventListener('DOMContentLoaded', function() {
    const switchBtn = document.querySelector('.mode-switch');
    const langSwitch = document.getElementById('lang-switch');
    const header = document.querySelector('.header h1');
    const headerBtns = document.querySelectorAll('.header-buttons a button');
    const modeBtn = document.querySelector('.mode-switch');
    const welcomeText = document.querySelector('.welcome-text');
    const projectsCards = document.getElementById('projects-cards');

    const pt = {
        portfolio: "Meu Portfólio.",
        home: "Início",
        projects: "Projetos",
        skills: "Habilidades",
        contact: "Contato",
        github: "Github",
        mode_dark: "Modo claro",
        mode_light: "Modo escuro",
        welcome: "Projetos",
        cards: [
            {
                icon: "../lib/img/html5-icon.png",
                title: "Site “grongos”",
                subtitle: "Desenvolvimento Web",
                desc: "Projeto web desenvolvido como iniciativa pessoal para criar e apresentar um personagem de jogo. Serviu como exercício prático para fortalecer e consolidar meus conhecimentos em desenvolvimento web. Sendo o começo da minha jornada acadêmica.",
                usage: "Desenvolvido com HTML5 e CSS3 como exercício acadêmico no início do curso de Ciências da Computação. Disponível no GitHub."
            },
            {
                icon: "../lib/img/python_icon.webp",
                title: "Criptografia",
                subtitle: "Python",
                desc: "Programa de criptografia desenvolvido em Python como parte de um projeto acadêmico. Foi projetado para aplicar técnicas básicas de criptografia e descriptografia, ajudando a reforçar conceitos essenciais de segurança da informação e programação em Python.",
                usage: "Utilizado para implementar lógica de criptografia e praticar conceitos de programação. Disponível no GitHub."
            },
            {
                icon: "../lib/img/java-icon.png",
                title: "WorldClicker",
                subtitle: "Java",
                desc: "WorldClicker é um projeto acadêmico em Java inspirado no jogo \"Cookie Clicker\". Desenvolvido para reforçar conceitos de programação orientada a objetos e interface gráfica, este projeto proporciona uma experiência divertida enquanto aprimora habilidades essenciais de desenvolvimento em Java.",
                usage: "Projeto para praticar lógica orientada a objetos e GUI em Java. Disponível no GitHub."
            }
        ]
    };

    const en = {
        portfolio: "My Portfolio.",
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        github: "Github",
        mode_dark: "Light mode",
        mode_light: "Dark mode",
        welcome: "Projects",
        cards: [
            {
                icon: "../lib/img/html5-icon.png",
                title: "“grongos” Website",
                subtitle: "Web Development",
                desc: "This web project was developed as part of a personal initiative to design and showcase a game character. It serves as a practical exercise to strengthen and consolidate my web development skills. It is part of the beginning of the course.",
                usage: "Built with HTML5 and CSS3 as an academic exercise at the beginning of the Computer Science course. Available on GitHub."
            },
            {
                icon: "../lib/img/python_icon.webp",
                title: "Cryptography",
                subtitle: "Python",
                desc: "Cryptography program developed in Python as part of an academic project. It was designed to apply basic encryption and decryption techniques, helping to reinforce core concepts of information security and Python programming.",
                usage: "Used to implement encryption logic and practice programming concepts. Available on GitHub."
            },
            {
                icon: "../lib/img/java-icon.png",
                title: "WorldClicker",
                subtitle: "Java",
                desc: "WorldClicker is a Java academic project inspired by the game \"Cookie Clicker\". Developed to reinforce object-oriented programming and GUI concepts, this project provides a fun experience while improving essential Java development skills.",
                usage: "Project to practice object-oriented logic and GUI in Java. Available on GitHub."
            }
        ]
    };

    let current = localStorage.getItem('lang') || 'en';

    function getLangObj() {
        return current === 'pt' ? pt : en;
    }

    function updateButtonText() {
        const langObj = getLangObj();
        if (document.body.classList.contains('light-mode')) {
            modeBtn.textContent = langObj.mode_light;
        } else {
            modeBtn.textContent = langObj.mode_dark;
        }
    }

    if (switchBtn) {
        switchBtn.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            updateButtonText();
            localStorage.setItem('mode', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        });
        if (localStorage.getItem('mode') === 'light') {
            document.body.classList.add('light-mode');
        }
        updateButtonText();
    }

    function render(langObj) {
        header.textContent = langObj.portfolio;
        headerBtns[0].textContent = langObj.home;
        headerBtns[1].textContent = langObj.projects;
        headerBtns[2].textContent = langObj.skills;
        headerBtns[3].textContent = langObj.contact;
        headerBtns[4].textContent = langObj.github;
        updateButtonText();
        welcomeText.textContent = langObj.welcome;

        projectsCards.innerHTML = langObj.cards.map((card, idx) => {
            let link = "";
            if (idx === 0) {
                link = "https://gragas.site";
            } else if (idx === 1) {
                link = "https://github.com/soares-j/Cryptography";
            } else if (idx === 2) {
                link = "https://github.com/soares-j/WorldClicker";
            }
            return `
                <div class="project-block">
                    <div class="project-title">
                        <img class="projects-icon" src="${card.icon}" alt="${card.title} Icon">
                        ${card.title}
                    </div>
                    <div class="project-subtitle">
                        ${card.subtitle}
                    </div>
                    <div class="project-desc">${card.desc}</div>
                    <div style="text-align:center;">
                        <a href="${link}" target="_blank">
                            <button class="project-btn" style="margin-top:1.2rem;">
                                ${idx === 0 
                                    ? (current === 'pt' ? 'Acessar Site' : 'Visit Website')
                                    : (current === 'pt' ? 'Ver no Github' : 'View on Github')}
                            </button>
                        </a>
                    </div>
                    <div class="project-usage">${card.usage}</div>
                </div>
            `;
        }).join('');
    }

    langSwitch.textContent = current === 'pt' ? 'EN' : 'PT';
    render(getLangObj());

    langSwitch.addEventListener('click', function() {
        current = current === 'pt' ? 'en' : 'pt';
        langSwitch.textContent = current === 'pt' ? 'EN' : 'PT';
        render(getLangObj());
        updateButtonText();
        localStorage.setItem('lang', current);
    });
});
