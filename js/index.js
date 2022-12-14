function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to("#transition", {
        duration: 1,
        xPercent: 0,
        ease: "Expo.easeInOut",
    });

    tl.to("#transition", {
        duration: 1,
        xPercent: 100,
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set("#transition", { xPercent: -100 });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.to("#transition", { duration: 1, xPercent: 100, delay: .3, ease: "Expo.easeInOut" });
    tl.set("#transition", { xPercent: -100 });
}

barba.init({
    sync: true,

    transitions: [
        {
            async beforeLeave(data){
                return gsap.to("#transition", {
                    duration: 1.2,
                    xPercent: 0,
                    ease: "Expo.easeInOut",
                    delay: .1
                });
            },
            async leave(data) {
                console.log("leave");
                pageTransition();
            },

            async enter(data) {
                console.log("enter")
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },
        },
    ],
});

