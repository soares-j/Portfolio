document.addEventListener('DOMContentLoaded', function() {
    const switchBtn = document.querySelector('.mode-switch');
    const langSwitch = document.getElementById('lang-switch');
    const header = document.querySelector('.header h1');
    const headerBtns = document.querySelectorAll('.header-buttons a button');

    let pt = {
        portfolio: "Meu Portfólio.",
        home: "Início",
        projects: "Projetos",
        skills: "Habilidades",
        contact: "Contato",
        github: "Github",
        contact_title: "Fale comigo",
        contact_desc: "Sinta-se à vontade para entrar em contato para oportunidades, colaborações ou dúvidas!",
        name: "Seu Nome",
        email: "Seu Email",
        message: "Sua Mensagem",
        send: "Enviar",
        usage: 'Ou envie um email para: <a href="mailto:joaogabrielbarreiros2004@gmail.com">joaogabrielbarreiros2004@gmail.com</a>',
        note: "Ao clicar em enviar você será redirecionado para a página de confirmação do Formspree.",
        mode_dark: "Modo claro",
        mode_light: "Modo escuro"
    };
    let en = {
        portfolio: "My Portfolio.",
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        github: "Github",
        contact_title: "Contact Me",
        contact_desc: "Feel free to reach out for opportunities, collaborations or questions!",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send",
        usage: 'Or email: <a href="mailto:joaogabrielbarreiros2004@gmail.com">joaogabrielbarreiros2004@gmail.com</a>',
        note: "Clicking on send will redirect to the Formspree confirmation page.",
        mode_dark: "Light mode",
        mode_light: "Dark mode"
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

    function applyLang(lang) {
        // Translate header and header buttons
        if (header) header.textContent = lang.portfolio;
        if (headerBtns.length >= 5) {
            headerBtns[0].textContent = lang.home;
            headerBtns[1].textContent = lang.projects;
            headerBtns[2].textContent = lang.skills;
            headerBtns[3].textContent = lang.contact;
            headerBtns[4].textContent = lang.github;
        }
        document.getElementById('contact-title').textContent = lang.contact_title;
        document.getElementById('contact-desc').textContent = lang.contact_desc;
        document.getElementById('name').placeholder = lang.name;
        document.getElementById('email').placeholder = lang.email;
        document.getElementById('message').placeholder = lang.message;
        document.querySelector('.project-btn[type="submit"]').textContent = lang.send;
        document.querySelector('.contact-form-usage').innerHTML = lang.usage +
            `<div class="contact-form-usage-note">${lang.note}</div>`;
        updateButtonText();
    }

    langSwitch.textContent = current === 'pt' ? 'EN' : 'PT';
    applyLang(getLangObj());

    langSwitch.addEventListener('click', function() {
        current = current === 'pt' ? 'en' : 'pt';
        langSwitch.textContent = current === 'pt' ? 'EN' : 'PT';
        applyLang(getLangObj());
        localStorage.setItem('lang', current);
    });
});
