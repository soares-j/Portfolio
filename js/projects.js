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
                desc: "Projeto web desenvolvido como iniciativa pessoal para criar e apresentar um personagem de jogo. O site foi criado para consolidar meus conhecimentos em desenvolvimento web, utilizando HTML5 e CSS3. O projeto serviu como exercício prático e marcou o início da minha jornada acadêmica, permitindo explorar conceitos de estrutura, estilização e responsividade em páginas web.",
                usage: "Exercício acadêmico com HTML5 e CSS3, disponível no GitHub."
            },
            {
                icon: "../lib/img/python_icon.webp",
                title: "Criptografia",
                subtitle: "Python",
                desc: "Programa de criptografia desenvolvido em Python como parte de um projeto acadêmico. O sistema aplica técnicas básicas de criptografia e descriptografia, reforçando conceitos essenciais de segurança da informação e lógica de programação. O projeto foi criado para praticar manipulação de dados, algoritmos e boas práticas de desenvolvimento em Python.",
                usage: "Projeto para praticar lógica de criptografia e programação em Python. Disponível no GitHub."
            },
            {
                icon: "../lib/img/java-icon.png",
                title: "WorldClicker",
                subtitle: "Java",
                desc: "WorldClicker é um projeto acadêmico em Java inspirado no jogo \"Cookie Clicker\". Desenvolvido para reforçar conceitos de programação orientada a objetos e interface gráfica, o projeto proporciona uma experiência divertida enquanto aprimora habilidades essenciais de desenvolvimento em Java. Permite praticar lógica de eventos, manipulação de interface e estruturação de código.",
                usage: "Projeto para praticar lógica orientada a objetos e interface gráfica em Java. Disponível no GitHub."
            },
            {
                icon: "../lib/img/java-icon.png",
                title: "SortingSystemTimer",
                subtitle: "Java",
                desc: "SortingSystemTimer é um projeto acadêmico em Java que implementa e compara algoritmos de ordenação (Bubble, Selection, Merge) em listas de nomes aleatórios ou sequenciais. O sistema mede o tempo de execução de cada algoritmo e exibe se a lista foi ordenada corretamente, permitindo estudar desempenho e funcionamento dos métodos de ordenação em Java.",
                usage: "Ideal para estudo de algoritmos de ordenação e análise de desempenho em Java. Disponível no GitHub."
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
                desc: "This web project was developed as a personal initiative to create and showcase a game character. The site was built to consolidate my web development skills using HTML5 and CSS3. It served as a practical exercise and marked the beginning of my academic journey, allowing me to explore structure, styling, and responsive design concepts for web pages.",
                usage: "Academic exercise with HTML5 and CSS3, available on GitHub."
            },
            {
                icon: "../lib/img/python_icon.webp",
                title: "Cryptography",
                subtitle: "Python",
                desc: "Cryptography program developed in Python as part of an academic project. The system applies basic encryption and decryption techniques, reinforcing essential concepts of information security and programming logic. The project was created to practice data manipulation, algorithms, and good development practices in Python.",
                usage: "Project to practice encryption logic and Python programming. Available on GitHub."
            },
            {
                icon: "../lib/img/java-icon.png",
                title: "WorldClicker",
                subtitle: "Java",
                desc: "WorldClicker is a Java academic project inspired by the game \"Cookie Clicker\". Developed to reinforce object-oriented programming and GUI concepts, the project provides a fun experience while improving essential Java development skills. It allows practicing event logic, interface manipulation, and code structuring.",
                usage: "Project to practice object-oriented logic and GUI in Java. Available on GitHub."
            },
            {
                icon: "../lib/img/java-icon.png",
                title: "SortingSystemTimer",
                subtitle: "Java",
                desc: "SortingSystemTimer is a Java academic project that implements and compares sorting algorithms (Bubble, Selection, Merge) on lists of random or sequential names. The system measures the execution time of each algorithm and shows if the list was sorted correctly, allowing the study of performance and operation of sorting methods in Java.",
                usage: "Ideal for studying sorting algorithms and performance analysis in Java. Available on GitHub."
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
            } else if (idx === 3) {
                link = "https://github.com/soares-j/SortingSystemTimer";
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
