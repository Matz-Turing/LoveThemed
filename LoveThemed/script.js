document.addEventListener('DOMContentLoaded', () => {
    const heartBtn = document.getElementById('heart-btn');
    const landingPage = document.getElementById('landing');
    const gallerySection = document.getElementById('gallery');

    const backgroundMusic = new Audio('sound.mp3');
    backgroundMusic.loop = true;

    const swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    heartBtn.addEventListener('click', () => {
        backgroundMusic.play();
        landingPage.classList.add('hidden');
        gallerySection.classList.add('visible');
    });
});
