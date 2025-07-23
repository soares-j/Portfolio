document.addEventListener('DOMContentLoaded', function() {
    const switchBtn = document.querySelector('.mode-switch');
    const langSwitch = document.getElementById('lang-switch');
    let pt = {
        portfolio: "Meu Portfólio.",
        home: "Início",
        projects: "Projetos",
        skills: "Habilidades",
        contact: "Contato",
        github: "Github",
        mode_dark: "Modo claro",
        mode_light: "Modo escuro",
        welcome: "Olá, Me chamo",
        name: "João Gabriel.",
        brief: "Busco oportunidade em TI e Análise de Dados, com foco em Python, MySQL e Banco de Dados. Motivado a desenvolver projetos de análise, relatórios e automação de dados.",
        extra: "Tenho experiência em projetos acadêmicos e pessoais, incluindo desenvolvimento web, Python e criação de dashboards interativos no Power BI. Sou proativo, organizado e busco sempre aprender novas tecnologias para aprimorar minhas habilidades e contribuir em equipe.",
        cv: "Baixar Currículo"
    };
    let en = {
        portfolio: "My Portfolio.",
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        github: "Github",
        mode_dark: "Light mode",
        mode_light: "Dark mode",
        welcome: "Hello, I am",
        name: "João Gabriel.",
        brief: "Looking for opportunities in IT and Data Analysis, focusing on Python, MySQL, and Databases. Motivated to develop analysis projects, reports, and data automation.",
        extra: "I have experience in academic and personal projects, including web development, Python, and creating interactive dashboards in Power BI. I am proactive, organized, and always eager to learn new technologies to improve my skills and contribute to teams.",
        cv: "Download CV"
    };
    let current = localStorage.getItem('lang') || 'en';

    function getLangObj() {
        return current === 'pt' ? pt : en;
    }

    function updateButtonText() {
        const langObj = getLangObj();
        if (document.body.classList.contains('light-mode')) {
            switchBtn.textContent = langObj.mode_light;
        } else {
            switchBtn.textContent = langObj.mode_dark;
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

    if (langSwitch) {
        langSwitch.textContent = current === 'pt' ? 'EN' : 'PT';
        function applyLang(lang) {
            document.querySelector('.header h1').textContent = lang.portfolio;
            document.querySelectorAll('.header-buttons a')[0].querySelector('button').textContent = lang.home;
            document.querySelectorAll('.header-buttons a')[1].querySelector('button').textContent = lang.projects;
            document.querySelectorAll('.header-buttons a')[2].querySelector('button').textContent = lang.skills;
            document.querySelectorAll('.header-buttons a')[3].querySelector('button').textContent = lang.contact;
            document.querySelectorAll('.header-buttons a')[4].querySelector('button').textContent = lang.github;
            updateButtonText();
            document.querySelector('.welcome-text').textContent = lang.welcome;
            document.querySelector('.home-name').textContent = lang.name;
            document.querySelector('.home-brief').textContent = lang.brief;
            document.querySelector('.home-extra').textContent = lang.extra;
            document.querySelector('.cv-btn').textContent = lang.cv;
        }
        applyLang(getLangObj());
        langSwitch.addEventListener('click', function() {
            current = current === 'pt' ? 'en' : 'pt';
            langSwitch.textContent = current === 'pt' ? 'EN' : 'PT';
            applyLang(getLangObj());
            localStorage.setItem('lang', current);
        });
    }
});