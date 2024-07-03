document.addEventListener('DOMContentLoaded', function() {
    console.log('Loaded');

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


function acceptCookies() {
    document.getElementById('cookieNotification').style.display = 'none';
}

window.onload = function() {
    document.getElementById('cookieNotification').style.display = 'block';
};