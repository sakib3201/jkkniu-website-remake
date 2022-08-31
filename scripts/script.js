//Script for carousel . Changes photo on clicking the buttons.
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button=>{

    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        
        if(newIndex<0) newIndex = slides.children.length - 1
        else newIndex %= slides.children.length
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})