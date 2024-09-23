document.addEventListener('DOMContentLoaded', (event) => {
            const navItems = document.querySelectorAll('nav ul li');
            navItems.forEach((item, index) => {
                item.style.animation = `fadeInUp 0.5s ease-out forwards ${index * 0.1 + 0.5}s`;
                item.style.opacity = '0';
            });
        });
        
document.addEventListener('DOMContentLoaded', (event) => {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.style.animation = `fadeInUp 0.5s ease-out forwards ${index * 0.1 + 0.5}s`;
                card.style.opacity = '0';
            });
        });