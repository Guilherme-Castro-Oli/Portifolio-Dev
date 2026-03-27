document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');

    if (!header) {
        console.log("Header não encontrado!");
        return;
    }

    window.addEventListener('scroll', () => {
        console.log(window.scrollY);

        if (window.scrollY > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });
});


const elementos = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

elementos.forEach((el) => observer.observe(el));