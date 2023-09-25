const slides = document.querySelectorAll('.imgslide');
console.log(slides);

slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        slide.classList.add('active');
    });
    slide.addEventListener('mouseleave', () => {
        slide.classList.remove('active');
    });

})