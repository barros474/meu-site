// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manipular envio do formulário de contato
const form = document.querySelector('.contato-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Pegar valores do formulário
        const nome = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensagem = this.querySelector('textarea').value;
        
        // Aqui você pode adicionar lógica para enviar para um servidor
        console.log('Formulário enviado:', { nome, email, mensagem });
        
        // Mostrar mensagem de sucesso
        alert('Obrigado pela sua mensagem! Em breve entraremos em contato.');
        
        // Limpar formulário
        this.reset();
    });
}

// Adicionar classe ativa à navegação baseado na seção visível
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});