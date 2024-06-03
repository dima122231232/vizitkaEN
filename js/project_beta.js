
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth:1.5,
        effects:false,
    
        
    })
var timer;
var bb = true;
var cursorDelayed = document.querySelector('.cursor-delayed');
var cursor = document.querySelector('.cursor');
var lastDistance;
let vh = window.innerHeight / 100;let vw = window.innerWidth / 100;


    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousemove', function(e) {
        setTimeout(function() {
            cursorDelayed.style.left = e.clientX + 'px';
            cursorDelayed.style.top = e.clientY + 'px';

        }, 70);
    });

    document.addEventListener('mousemove', function(e) {
        if (bb) {
            var cursorRect = cursor.getBoundingClientRect();
            var cursorDelayedRect = cursorDelayed.getBoundingClientRect();

            var distanceX = cursorDelayedRect.left - cursorRect.left;
            var distanceY = cursorDelayedRect.top - cursorRect.top;
            var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            lastDistance = distance;

            if (distance < 29) {
                cursorDelayed.style.height = 'calc(var(--index)*1.2)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '.8';
            } else if (distance > 29 && distance <= 59) {
                cursorDelayed.style.height = 'calc(var(--index)*.9)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '.8';
            
            } else {
                cursorDelayed.style.height = 'calc(var(--index)*0.7)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '.8';
            }

            var deltaX = e.clientX - cursorDelayedRect.left;
            var deltaY = e.clientY - cursorDelayedRect.top;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            cursorDelayed.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)';

        }

    });

    document.addEventListener('mousemove', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            if (bb) {
                cursorDelayed.style.height = 'calc(var(--index)*1.2)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '.8';
            }
        }, 20);
    });
 
//     gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

// gsap.defaults({ease: "none"});

// const main =gsap.timeline(
//     {
//         scrollTrigger: {
//           trigger: "#svg",
//           scrub: true,
//           start:0,
//           end:310*(vh+vw)
//         }
//       }
// )
// .from(".theLine",{drawSVG:0, duration:1})
// .to(".hepler", {motionPath:{
//     path:".theLine",
//     align:".theLine",
//     alignOrigin:[0.5, 0.5],
//   }, duration:1}, 0)
// .to(".lite-hepler", {motionPath:{
//     path:".theLine",
//     align:".theLine",
//     alignOrigin:[0.5, 0.5],
//   }, duration:1}, 0)
    
var currentSlide = 1;
var isScrolling = false;
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('wheel', function (event) {
        if (isScrolling) return;
        var delta = event.deltaY || event.detail || event.wheelDelta;
        var direction = delta > 0 ? 1 : -1;
        currentSlide = Math.min(Math.max(currentSlide + direction, 1), document.querySelectorAll('.slide').length); // увеличиваем или уменьшаем номер слайда

        isScrolling = true;

        window.scrollTo({
            top: (currentSlide - 1) * (100 * (vh + vw)),
            behavior: 'smooth'
        });
        if (currentSlide == 2){slider2()}if (currentSlide == 1){slider1()}
        console.log('Current Slide:', currentSlide);
        setTimeout(function() {
            isScrolling = false;
        }, 3000); 
    });
});
const animateText = (selector, delay, delayFactor) => {
    const text = document.querySelector(selector);
    const letters = text.textContent.split('');
    text.textContent = '';

    letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = 0;
        text.appendChild(span);
        setTimeout(() => {
            gsap.to(span, {
                opacity: 1,
                duration: 0,
                delay: i * delayFactor
            });
        }, delay);
    });
};

animateText('.h1__one1', 1000, 0.01);
animateText('.text__one1-p', 1200, 0.01);
animateText('.link__one1-one', 3000, 0.02);
animateText('.link__one1-two', 3300, 0.04);


const myText = new SplitType('#my-text')
gsap.to('#svg,.hepler', {opacity: 1,delay: .5,duration: .1})
gsap.to('#my-text .char', {y: 0,stagger: 0.05,delay: 1,duration: .1})
gsap.to('.section__one1', {opacity: 1,duration: .1})
gsap.fromTo('.lite-hepler', { opacity:"0"}, {opacity:"1", duration: 3,delay:1})
gsap.fromTo('.hepler', { marginTop:"100"}, {marginTop:"calc(var(--index)*17.25)", duration: 1.5})

gsap.fromTo('.full__image', { height:"0", borderBottom:'none'}, {borderBottom:'5px solid rgb(142, 255, 54)',height:"33vh", duration: .7,delay:.3})
gsap.fromTo('.header_one1-p ,.header__one1-img', { marginTop:-1000}, {marginTop:0, duration: 1,delay:.3})
gsap.fromTo('.fother__one1', { marginTop:1000,opacity:0}, {marginTop:0,opacity:1, duration: 1})
gsap.fromTo('.lorem', { marginTop:-1000}, {marginTop:0, duration: 1, })
function slider1(){
    gsap.fromTo('.heder__one1', { y:"-300"}, {y:"0", duration: 1})
    gsap.fromTo('.full__image', { height:"0"}, {height:"33vh", duration: .7,delay:1.5 })
    gsap.fromTo('.lorem', { marginTop:-1000}, {marginTop:0, duration: .8,delay:1.5 })
    gsap.fromTo('.section__one-left,.section__one-right', {opacity:.0}, {opacity:1,duration: 1,delay:1.5});
    gsap.fromTo('.full__image-vikla', { height:"calc(var(--index)*10)"}, {height:"calc(var(--index)*0)", duration: .3, })
    gsap.fromTo('.vikla', { marginTop:0}, {marginTop:-1000, duration: 1, })
    gsap.fromTo('.section__one2-left,.section__one2-right', {opacity:1}, {opacity:0,duration: .3,delay:0});
}
function slider2(){
    gsap.fromTo('.full__image-vikla', { height:"calc(var(--index)*0)"}, {height:"calc(var(--index)*10)", duration: .7,delay:1.5 })
    gsap.fromTo('.vikla', { marginTop:-1000}, {marginTop:0, duration: 1,delay:1.5 })
    gsap.fromTo('.section__one2-left,.section__one2-right', {opacity:.0}, {opacity:1,duration: 1,delay:1.5});
}