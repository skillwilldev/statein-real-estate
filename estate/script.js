gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();



gsap.from('header', {
    opacity: 0, y: -28, duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: 'header',
        start: 'top 85%',
        once: true,

    }
});


gsap.from('.dream__items li', {
    opacity: 0, y: 28, duration: 0.6,
    stagger: 0.3, ease: 'power2.out',
    scrollTrigger: {
        trigger: '.dream__items li',
        start: 'top 85%',
        once: true,

    }
});



mm.add("(min-width: 768px)", () => {
    gsap.from('.team__card', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.3, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.team__card',
            start: 'top 85%',
            once: true,

        }
    });
});

mm.add("(max-width: 768px)", () => {
    gsap.from('.team__card', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.6, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.team__card',
            start: 'top 85%',
            once: true,

        }
    });
});

mm.add("(min-width: 768px)", () => {
    gsap.from('.achievements__top.anime1', {
        opacity: 0, x: -100, duration: 0.6,
        stagger: 0.2, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.achievements__top.anime1',
            start: 'top 85%',
            once: true,

        }
    });
});

mm.add("(max-width: 768px)", () => {
    gsap.from('.achievements__top.anime1', {
        opacity: 0, x: -100, duration: 0.6,
        stagger: 0.6, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.achievements__top.anime1',
            start: 'top 85%',
            once: true,

        }
    });
});



gsap.from('.achievements__top.exp-top', {
    opacity: 0, x: -100, duration: 0.6,
    stagger: 0.2, ease: 'power2.out',
    scrollTrigger: {
        trigger: '.achievements__top.exp-top',
        start: 'top 85%',
        once: true,

    }
});

gsap.from('.achievements__top.team-top', {
    opacity: 0, x: -100, duration: 0.6,
    stagger: 0.2, ease: 'power2.out',
    scrollTrigger: {
        trigger: '.achievements__top.team-top',
        start: 'top 85%',
        once: true,

    }
});

gsap.from('.achievements__top.enterprises-top', {
    opacity: 0, x: -100, duration: 0.6,
    stagger: 0.2, ease: 'power2.out',
    scrollTrigger: {
        trigger: '.achievements__top.enterprises-top',
        start: 'top 85%',
        once: true,

    }
});



mm.add("(min-width: 768px)", () => {
    gsap.from('.achievements__item', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.3, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.achievements__item',
            start: 'top 85%',
            once: true,
        }
    });
});

mm.add("(max-width: 768px)", () => {
    gsap.from('.achievements__item', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.6, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.achievements__item',
            start: 'top 85%',
            once: true,
        }
    });
});


mm.add("(min-width: 768px)", () => {
    gsap.from('.experience__item', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.3, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.experience__item',
            start: 'top 85%',
            once: true,
        }
    });
});

mm.add("(max-width: 768px)", () => {
    gsap.from('.experience__item', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.6, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.experience__item',
            start: 'top 85%',
            once: true,
        }
    });
});


gsap.from('.story__values', {
    opacity: 0, x: -100, duration: 0.6,
    stagger: 0.2, ease: 'power2.out',
    scrollTrigger: {
        trigger: '.story__values',
        start: 'top 85%',
        once: true,
    }
});




mm.add("(min-width: 768px)", () => {
    gsap.from('.title-block', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.3, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.title-block',
            start: 'top 85%',
            once: true,
        }
    });
});

mm.add("(max-width: 768px)", () => {
    gsap.from('.title-block', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.6, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.title-block',
            start: 'top 85%',
            once: true,
        }
    });
});

gsap.from('.dream', {
    opacity: 0, x: -100, duration: 0.6,
    stagger: 0.2, ease: 'power2.out',
    scrollTrigger: {
        trigger: '.dream',
        start: 'top 85%',
        once: true,
    }
});


mm.add("(min-width: 768px)", () => {
    gsap.from('.story__trust', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.3, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.story__trust',
            start: 'top 85%',
            once: true,
        }
    });
});

mm.add("(max-width: 768px)", () => {
    gsap.from('.story__trust', {
        opacity: 0, y: 28, duration: 0.6,
        stagger: 0.6, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.story__trust',
            start: 'top 85%',
            once: true,
        }
    });
});





