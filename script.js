document.addEventListener("DOMContentLoaded", function () {
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
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elementos.forEach((el) => observer.observe(el));


const videos = [
    "./video/jupiter video.mp4",
    "./video/marte video.mp4",
    "./video/saturno video.mp4",
    "./video/buraco negro.mp4"
];
const videoSorteado = videos[Math.floor(Math.random() * videos.length)];
const videoElement = document.getElementById('bg-video');
videoElement.src = videoSorteado;
if (videoSorteado.includes("saturno")) {
    videoElement.style.filter = "brightness(1.5) contrast(1.2)";
} else {
    videoElement.style.filter = "brightness(1) contrast(1)";
}


window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('loader-finish');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
        
    }, 2000); 
});