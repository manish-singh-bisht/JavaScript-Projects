const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dotsBottom");

let index = 0;
prev.addEventListener("click", prevSlide);
function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlide(index);
    dotChange(index);
    reset();
}
next.addEventListener("click", nextSlide);
function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide(index);
    dotChange(index);
    reset();
}
function changeSlide(index) {
    for (const slide of slides) {
        slide.classList.add("hidden");
    }
    slides[index].classList.remove("hidden");
    slides[index].classList.add("flex");
}
function dotChange(index) {
    for (const dot of dots) {
        dot.classList.add("bg-green-400");
    }
    dots[index].classList.remove("bg-green-400");
    dots[index].classList.add("bg-black");
}

dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
        index = e.target.id;
        changeSlide(index);
        dotChange(index);
        reset();
    });
});
function autoPlay() {
    nextSlide();
}
let timer = setInterval(autoPlay, 2000);
function reset() {
    let reset = clearInterval(timer);
    timer = setInterval(autoPlay, 2000);
}
