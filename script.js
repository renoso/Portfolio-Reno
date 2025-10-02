// 1. Alerta de Boas-Vindas Simples
// Executa a função assim que o documento HTML for completamente carregado.
document.addEventListener('DOMContentLoaded', (event) => {
    // Alerta que aparece quando a página carrega.
    // É uma interação básica, mas pode ser substituído por um modal Bootstrap mais profissional.
    alert('🚀 Bem-vindo(a) ao Portfólio de Reno Soares! Explore meus projetos e habilidades.');
});


// 2. Efeito de Interação na Foto de Perfil (usando o JS para modificar a classe CSS)
const profileImg = document.querySelector('.profile-img');

// Adiciona uma classe quando o mouse entra (hover)
profileImg.addEventListener('mouseover', () => {
    profileImg.classList.add('pulse-effect');
});

// Remove a classe quando o mouse sai
profileImg.addEventListener('mouseout', () => {
    profileImg.classList.remove('pulse-effect');
});


// 3. Função para Copiar Link do GitHub
// Seleciona o link do GitHub
const githubLink = document.querySelector('a[title="GitHub"]');

if (githubLink) {
    githubLink.addEventListener('click', (e) => {
        // Impede o comportamento padrão de navegação (para que não saia da página)
        e.preventDefault(); 
        
        const urlToCopy = githubLink.href;
        
        // Usa a API Clipboard para copiar o URL
        navigator.clipboard.writeText(urlToCopy).then(() => {
            alert('🔗 URL do GitHub copiado para a área de transferência!');
        }).catch(err => {
            // Caso a cópia falhe (ex: navegador antigo)
            console.error('Falha ao copiar:', err);
            alert('❌ Não foi possível copiar automaticamente. O link é: ' + urlToCopy);
        });
    });
}