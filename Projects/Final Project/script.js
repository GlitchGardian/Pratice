gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var main = document.querySelector('.main')
var curse = document.querySelector('.curser');
var tl = gsap.timeline();
var infinitetl = gsap.timeline({ repeat: -1 });
var web = document.querySelector("#web")
var webtext = document.querySelector("#web p")
var graphic = document.querySelector("#graphic")
var graphictext = document.querySelector("#graphic p")
var img = document.querySelector(".inner img")
var video = document.querySelector('.video-container video')
var player = document.querySelector('.player')
var hovpara = document.querySelector('.page-4 .texts-right .inner p')

function hovonpara() {
    hovpara.addEventListener("mouseover", function () {
        gsap.to('.page-4 .texts-right .inner p span', {
            fontFamily: 'silk serif',
            opacity: [0.3, 0.7, 1],
            ease: 'power2.inOut',
            stagger: 0.05
        })
        gsap.set('.page-4 .texts-right .inner p span', {
            '-webkit-text-stroke': '1px white',
            'color': 'transparent'
        });
    })

    hovpara.addEventListener("mouseout", function () {
        gsap.to('.page-4 .texts-right .inner p span', {
            fontFamily: 'plain',
            opacity: [0.3, 0.7, 1],
            ease: 'power2.inOut',
            stagger: 0.05,
        })
        gsap.set('.page-4 .texts-right .inner p span', {
            'color': 'white'
        });
    })
}

hovonpara();

function loaderAnimation() {
    var counter = document.querySelector(".line1-counter p")
    var count = 0;



    tl.from(".line h1", {
        y: 120,
        duration: 0.5,
        delay: 0.4,
        stagger: 0.3
    })

    tl.to(".line1-counter,.para-bottom", {
        opacity: 1,
        duration: 0.3,
        onStart: function () {
            var countInterval = setInterval(function () {
                if (count < 100) {
                    count++
                    counter.textContent = count;
                } else {
                    clearInterval(countInterval);
                }
            }, 40)
        }
    })



    tl.to(".line h1,.para-bottom,.line1-counter", {
        y: -100,
        opacity: 0,
        duration: 0.5,
        delay: 2.5
    })

    tl.to('.loader', {
        y: "-100%",
        duration: 0.3,
    })
}
loaderAnimation();

function mousemoveAnimation() {

    // function curser() {
    //     main.addEventListener('mousemove', function (e) {
    //         curse.style.left = e.clientX - 25 + 'px';
    //         curse.style.top = e.clientY - 25 + 'px';
    //     })
    // }


    // same thing with gsap

    addEventListener('mousemove', function (e) {
        gsap.to('.curser', {
            top: e.y,
            left: e.x
        })
    })

    Shery.makeMagnet(".left .ham img,.right .horizontal p");


}
mousemoveAnimation();

function scrollpara() {
    infinitetl.to('.scroll p', {
        opacity: 0.2,
        y: 20,
        duration: 1.5
    })
}
scrollpara();

function texthovershowimage() {
    web.addEventListener("mousemove", function (e) {
        webtext.classList.add("hovereffect")
        webtext.style.border = 'none'
        img.style.display = 'inline-block'
        img.style.left = e.clientX + 'px';
        img.style.top = e.clientY - 150 + 'px';
        webtext.addEventListener("mouseout", function () {
            webtext.classList.remove("hovereffect")
            webtext.style.borderBottom = "solid 0.6vw white";
            img.style.display = 'none'
        })
    })
    graphic.addEventListener("mousemove", function (e) {
        graphictext.classList.add("hovereffect")
        graphictext.style.border = 'none'
        img.style.display = 'inline-block'
        img.style.left = e.clientX + 'px';
        img.style.top = e.clientY - 150 + 'px';
        graphictext.addEventListener("mouseout", function () {
            graphictext.classList.remove("hovereffect")
            graphictext.style.borderBottom = "solid 0.6vw white";
            img.style.display = 'none'
        })
    })

}
texthovershowimage();

function pageonetextAnimation() {

    tl.from('.number p', {
        y: 100,
        opacity: 0,
        delay: 0.5
    })

    tl.from('.texts-right p', {
        y: 110,
        duration: 0.3,
        stagger: 0.2
    })
}

// pageonetextAnimation();


function pagetwovideoplayer() {
    video.addEventListener("mousemove", function (e) {
        player.style.top = e.clientY + 'px'
        player.style.left = e.clientX + 'px'
        curse.style.display = 'none'
    })
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            player.style.height = '5vw'
            player.style.width = '5vw'
            player.innerHTML = '<i class="ri-pause-mini-fill"></i>'
        } else {
            video.pause();
            player.style.height = '8vw'
            player.style.width = '8vw'
            player.innerHTML = '<i class="ri-play-mini-fill"></i>'
        }
    });

}
pagetwovideoplayer();


