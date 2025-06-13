// Contador de tempo juntos
function updateCounter() {
    const startDate = new Date('2022-11-12T00:00:00');
    const now = new Date();
    let diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * (1000 * 60 * 60 * 24 * 365.25);
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.42));
    diff -= months * (1000 * 60 * 60 * 24 * 30.42);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    document.getElementById('time-together').textContent = 
        `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}
updateCounter();
setInterval(updateCounter, 1000);

// Mostrar mensagem com animação
function showLoveMessage() {
    const message = document.getElementById('loveMessage');
    const backdrop = document.getElementById('loveMessageBackdrop');
    message.style.display = 'block';
    backdrop.style.display = 'block';
}

// Esconder mensagem
function hideLoveMessage() {
    const message = document.getElementById('loveMessage');
    const backdrop = document.getElementById('loveMessageBackdrop');
    message.style.display = 'none';
    backdrop.style.display = 'none';
}

// Redirecionar para página surpresa
function goToSurprisePage() {
    window.location.href = 'surpresa.html';
}