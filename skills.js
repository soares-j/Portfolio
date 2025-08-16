document.addEventListener('DOMContentLoaded', function() {
    // Dark/Light mode toggle with localStorage
    const switchBtn = document.querySelector('.mode-switch');
    // Language switch with localStorage
    const langSwitch = document.getElementById('lang-switch');
    const header = document.querySelector('.header h1');
    const headerBtns = document.querySelectorAll('.header-buttons a button');
    const modeBtn = document.querySelector('.mode-switch');
    const welcomeText = document.querySelector('.welcome-text');
    const skillsCards = document.getElementById('skills-cards');

    const pt = {
        portfolio: "Meu Portfólio.",
        home: "Início",
        projects: "Projetos",
        skills: "Habilidades",
        contact: "Contato",
        github: "Github",
        mode_dark: "Modo claro",
        mode_light: "Modo escuro",
        welcome: "Conhecimentos",
        cards: [
            {
                icon: "../lib/img/html5-icon.png",
                title: "HTML5, CSS3 & JavaScript",
                desc: "Experiência em desenvolvimento web utilizando HTML5, CSS3 e JavaScript.",
                usage: "Aplicado em projetos acadêmicos e pessoais para construção e manutenção de interfaces web dinâmicas."
            },
            {
                icon: "../lib/img/python_icon.webp",
                title: "Python",
                desc: "Automação, análise de dados e programação backend com Python.",
                usage: "Utilizado em trabalhos acadêmicos, scripts de automação e análise de dados."
            },
            {
                icon: "../lib/img/mysql.png",
                title: "MySQL",
                desc: "Gerenciamento de banco de dados e integração com aplicações web.",
                usage: "Usado para armazenar e gerenciar dados em projetos acadêmicos e pessoais."
            },
            {
                icon: "../lib/img/power-bi-icon.webp",
                title: "Power BI & Pacote Office",
                desc: "Conhecimento avançado em Power BI, Excel, Word e PowerPoint para análise de dados e relatórios.",
                usage: "Criação de dashboards, automação de relatórios e apresentações em contextos acadêmicos e pessoais."
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
        welcome: "Skills",
        cards: [
            {
                icon: "../lib/img/html5-icon.png",
                title: "HTML5, CSS3 & JavaScript",
                desc: "Experience with web development using HTML5, CSS3, and JavaScript.",
                usage: "Applied in academic and personal projects for building and maintaining dynamic web interfaces."
            },
            {
                icon: "../lib/img/python_icon.webp",
                title: "Python",
                desc: "Backend scripting, automation, and data analysis using Python.",
                usage: "Used in academic works, automation scripts, and data analysis."
            },
            {
                icon: "../lib/img/mysql.png",
                title: "MySQL",
                desc: "Database management and integration with web applications.",
                usage: "Used for storing and managing data in academic and personal projects."
            },
            {
                icon: "../lib/img/power-bi-icon.webp",
                title: "Power BI &  Microsoft Office",
                desc: "Power BI, Excel, Word, and PowerPoint for data analysis and reporting.",
                usage: "Used for creating dashboards, automating reports, and presenting insights in academic and personal contexts."
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

    function render(lang) {
        header.textContent = lang.portfolio;
        headerBtns[0].textContent = lang.home;
        headerBtns[1].textContent = lang.projects;
        headerBtns[2].textContent = lang.skills;
        headerBtns[3].textContent = lang.contact;
        headerBtns[4].textContent = lang.github;
        updateButtonText();
        welcomeText.textContent = lang.welcome;
        skillsCards.innerHTML = lang.cards.map(card => `
            <div class="skills-block skills-block-big">
                <div class="skills-title">
                    <img class="skills-icon" src="${card.icon}" alt="${card.title} Icon">
                    ${card.title}
                </div>
                <div class="skills-desc">${card.desc}</div>
                <div class="skills-usage">${card.usage}</div>
            </div>
        `).join('');
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