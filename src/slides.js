let slideIndex = 1;

const getSlideIndex = () => {
    return slideIndex;
}

const setSlideIndex = (n) => {
    slideIndex = n;
}

const showSlides = (n) => {
    setSlideIndex(n);
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n >= slides.length) {setSlideIndex(0)}
    if (n < 0) {setSlideIndex(slides.length-1)}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[getSlideIndex()].style.display = "block";
}

export {getSlideIndex, showSlides}