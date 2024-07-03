document.addEventListener('DOMContentLoaded', function() {
    console.log('Kişisel portfolyo sitesi yüklendi.');

    const links = document.querySelectorAll('.sidebar ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
