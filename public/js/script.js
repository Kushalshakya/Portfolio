

const timeline = gsap.timeline();

timeline.from('.main-character-image', {
    y: 200,
    duration: 1,
    opacity: 0,
})
.add([
    gsap.from('.fname-swiper', {
        x: 200,
        opacity: 0,
        duration: 0.5,
        stagger: {
            each: 0.05,
            from: 'end',
        }
    }),
    gsap.from('.lname-swiper', {
        x: -200,
        opacity: 0,
        duration: 0.5,
        stagger: {
            each: 0.05,
            from: 'end',
        }
    })
]);

$(window).on("scroll", () => {
    let value = window.scrollY
    $('.fname').css('margin-top', `${value * 2}px`)
    $('.lname').css('margin-bottom', `${value * 1.5}px`)

    if(window.scrollY > 100){
        $('.top-scroller').css("opacity","1");
    } else{
        $('.top-scroller').css("opacity","0");
    }
})

document.querySelectorAll('.animated:not(.react)').forEach(img => {
    const randomDuration = Math.floor(Math.random() * 5) + 10;
    img.style.animationDuration = `${randomDuration}s`;
});

gsap.from('.lang-contain img', {
    scale: 1.1,
    opacity: 0,
    scrollTrigger: ".lang-contain img",
})

gsap.from('.body-character', {
    x: -300,
    opacity: 0,
    scrollTrigger: ".body-character",
})

gsap.to(".body-controller", {
    scrollTrigger: {
      scrub: 1
    }, 
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
});

if($('.project-box-container').children().length <= 4){
    $('.project-box-container').addClass('justify-content-center');
} else{
    $('.project-box-container').addClass('justify-content-start');
}

gsap.from(".project-box-container", {
    x: 200,
    opacity: 0,
    stagger: {
        each: 0.3
    },
    scrollTrigger: ".project-box"
})
