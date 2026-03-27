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


