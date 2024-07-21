
// Confetti animation script
document.addEventListener("DOMContentLoaded", function() {
    function createConfetti() {
        const confettiColors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff'];
        const numberOfConfetti = 100;
        const confettiContainer = document.getElementById('confetti');
        
        for (let i = 0; i < numberOfConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confettiContainer.appendChild(confetti);
        }
    }

    createConfetti();
});


document.addEventListener("DOMContentLoaded", function() {
    function createStars() {
        const numberOfStars = 100;
        const starContainer = document.getElementById('stars');
        
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starContainer.appendChild(star);
        }
    }

    createStars();
});