var typed = new Typed(".typing", {
    strings: ["Love", "Care", "Passion"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        
        navLinks.forEach(link => {
            link.classList.remove('active');
        });


        navLink.classList.add('active');
    });
});