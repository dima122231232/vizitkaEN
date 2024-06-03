gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth:1,
        effects:true,
})


let vh = window.innerHeight / 100;let vw = window.innerWidth / 100;
var indexJs = vh+vw;var slide2 =false;var position = 1;var position_repeat = 1;var pos=1;let animationInterval;
var spros = false;var super_costil=false;var stopp = false;
const P = document.getElementById("P");
const R = document.getElementById("R");
const O = document.getElementById("O");
const G = document.getElementById("G");
const Rr = document.getElementById("Rr");
const at = document.getElementById("at");
const M = document.getElementById("M");
const I = document.getElementById("I");
const S = document.getElementById("S");
const T = document.getElementById("T");
const vos = document.getElementById("exclamation");
const C = document.getElementById("C");
const gif = document.getElementById('myGif');

function playAnimation() {
    setTimeout(function() {
    const tl = gsap.timeline({ repeat: -1 });
  
    // Animation 1
    tl.fromTo(at, { top: "calc(var(--index)*0)" }, { top: "calc(var(--index)*-8)", duration: 0.5 });
    tl.fromTo("#A-dob", { top: "calc(var(--index)*0)" }, { top: "calc(var(--index)*-7.7)", duration: 0.5 }, "<");
  
    tl.fromTo(at, { top: "calc(var(--index)*-8)" }, { top: "calc(var(--index)*0)", duration: 0.5, delay: 5 });
    tl.fromTo("#A-dob", { top: "calc(var(--index)*-7.7)" }, { top: "calc(var(--index)*0)", duration: 0.5 }, "<");
    tl.to({}, { duration: 5 }); }, 5000);
}
  
  playAnimation();

gsap.to('.eays-left', {opacity: 1,delay: .25,duration: .1});
gsap.to('.eays-right', {opacity: 1,delay: .4,duration: .1});
gsap.to('#smile', {opacity: 1,delay: .25});
// TweenLite.from('.path', .25,{drawSVG:0, delay:.4});
gsap.fromTo(R,{marginTop:"calc(var(--index)*-7.2)"}, {marginTop:"calc(var(--index)*0)",delay: .55,duration: .4});
gsap.fromTo(O,{marginTop:"calc(var(--index)*8)"}, {marginTop:"calc(var(--index)*0)",delay: .55,duration: .5});
gsap.to('.div__eays-clone', {opacity: 1,delay:1,duration: .2});
gsap.to('.path-clone', {opacity: 1,delay:1.2});
// TweenLite.from('.path-clone', .5,{drawSVG:"50% 50%", delay:1.2});
gsap.fromTo('#smile-clone',{marginTop:'calc(var(--index)*-6.5)'}, {marginTop:'calc(var(--index)*-4.5)',delay:1.4,duration:.4});
gsap.to(G, {left:0,delay:.9,duration:.4});
gsap.fromTo('.car',{marginLeft:'calc(var(--index)*-4)'}, {marginLeft:'calc(var(--index)*20)',delay:1.1,duration:1.5});
gsap.fromTo(Rr,{top:"calc(var(--index)*8)"}, {top:"calc(var(--index)*0)",delay: 1.2,duration: .5});
gsap.fromTo(at,{top:"calc(var(--index)*8)"}, {top:"calc(var(--index)*0)",delay: 1.5,duration: .5});
gsap.fromTo(M,{top:"calc(var(--index)*8)"}, {top:"calc(var(--index)*0)",delay: 1.8,duration: .5});
gsap.fromTo(I,{top:"calc(var(--index)*-8)"}, {top:"calc(var(--index)*0)",delay: 1.2,duration: .5});
gsap.fromTo(S,{opacity:0}, {opacity:1,delay: 1.55});
gsap.fromTo(".fly",{top:"calc(var(--index)*6)"}, {top:"calc(var(--index)*-8)",delay: 1.7,duration: 1});
gsap.fromTo(T,{top:"calc(var(--index)*6)"}, {top:"calc(var(--index)*-7.7)",delay: 1.7,duration: 1});
gsap.to(vos, {opacity: 1,delay:1.9});
gsap.fromTo(C,{right:"calc(var(--index)*-8)"}, {right:"calc(var(--index)*0)",delay: 2.1,duration: .4});

const letters = ['W', 'O', 'R', 'K', 'S'];

letters.forEach((letter, index) => {
  gsap.fromTo(`#works-${letter}`, { top: `calc(var(--index)*8)` }, { top: `calc(var(--index)*0)`, delay: 2.3 + index * 0.1, duration: 0.35 });
});
gsap.fromTo(".poloska",{opacity:0}, {opacity:1,delay: 2.1,duration: 2});
gsap.fromTo(".about-me",{top:"calc(var(--index)*-8)"}, {top:"calc(var(--index)*0)",delay: 2.5,duration:1});
gsap.fromTo(".header__one-img",{top:"calc(var(--index)*-8)"}, {top:"calc(var(--index)*0)",delay: 2.6,duration:1});
gsap.fromTo(".my-project",{top:"calc(var(--index)*-8)"}, {top:"calc(var(--index)*0)",delay: 2.7,duration:1});










const eaysClone = document.querySelector('.div__eays-clone');
document.addEventListener('mousemove', event => {
    const {clientX, clientY} = event,
          {innerWidth, innerHeight} = window,
          maxOffsetX = 5, maxOffsetY = 5,
          offsetX = (clientX / innerWidth - 0.5) * maxOffsetX * 2,
          offsetY = (clientY / innerHeight - 0.5) * maxOffsetY * 2;
    eaysClone.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
const smile_clone = document.querySelector('#smile-clone');
document.addEventListener('mousemove', event => {
    const {clientX, clientY} = event,
          {innerWidth, innerHeight} = window,
          maxOffsetX = 3.5, maxOffsetY = 3.5,
          offsetX = (clientX / innerWidth - 0.5) * maxOffsetX * 2,
          offsetY = (clientY / innerHeight - 0.5) * maxOffsetY * 2;
          smile_clone.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
const roket = document.querySelector('.roket');
let prevX = window.innerWidth / 2; 

document.addEventListener('mousemove', event => {
    const {clientX, clientY} = event,
          {innerWidth, innerHeight} = window,
          maxOffsetX = innerWidth * 0.25, 
          maxOffsetY = innerHeight * 0.10,
          offsetX = (clientX / innerWidth - 0.5) * maxOffsetX * 2,
          offsetY = (clientY / innerHeight - 0.5) * maxOffsetY * 2;
    const direction = clientX > prevX ? -1 : 1;
    const scaleX = direction === 1 ? 1 : -1;
    roket.style.transform = `translate(${offsetX}px, ${offsetY}px) scaleX(${scaleX})`;
    prevX = clientX;
});




// 

// gsap.defaults({ease: "none"});

// const main =gsap.timeline(
//     {
//         scrollTrigger: {
//           trigger: "#svg",
//           scrub: true,
//           start:100*vh,
//           end:100*vh
//         }
//       }
// )
// .from(".theLine",{drawSVG:0, duration:1})





// const windowHeight = window.innerHeight;
// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     if (scrollY >= windowHeight*1.15) {
//         ears();
//     }
// });


var currentSlide = 1;
var isScrolling = false;
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('wheel', function (event) {
        if (isScrolling) return
        if(pos!==3){
        var delta = event.deltaY || event.detail || event.wheelDelta;
            var direction = delta > 0 ? 1 : -1;
            currentSlide = Math.min(Math.max(currentSlide + direction, 1), document.querySelectorAll('.slide').length);
        isScrolling = true;
        gsap.to(window, {scrollTo: {y:(currentSlide - 1) * (100 *vh)},duration: .7});
        if (currentSlide == 1){pos=1;slider1()}
        if (currentSlide == 2){pos=2;slider2()}
        if (currentSlide == 3){pos=3;slider3();setTimeout(function() {spros=true;document.body.style.overflowY = 'auto';}, 1000)}}
         window.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY;
            var windowHeight = window.innerHeight;
            var scrollPercent = (scrollPosition / windowHeight) * 100;
            if (scrollPercent <= 200) {
                document.body.style.overflowY = 'hidden';
                if(!spros)return;
                gsap.fromTo(".roket",{opacity:0},{opacity:1,duration:.55})
                    spros=false;isScrolling = true;
                    currentSlide=2;pos=2;repeat();gr();stopViklaAnimation();
                    gsap.to(window, {scrollTo: {y: 100 * vh},duration: .5});
                        setTimeout(function() {
                            isScrolling = false;
                        }, 1000);
            }
            if (scrollPercent >= 750) {
                if(stopp) return; 
                pstsTeleport()
                stopp=true;
                setTimeout(function() {
                    var currentURL = window.location.href;
                    var newURL = currentURL.replace("html/project.html", "html/psts.html");
                    window.location.href = newURL;
                }, 500)
            }
        });
        setTimeout(function() {
            if(pos==3)return;
            isScrolling = false;
        }, 3000); 
    });
});


function slider1() {
    stopAnimation();
    position_repeat=1;
    gsap.fromTo(".article__planets",{opacity:1}, {opacity:0,delay:.2});
    gsap.fromTo(".block__items-two",{left:'5%'}, {left:'-50%',duration:1,ease: "power1.out"});
    planetsAut()
    position=1;
}


function slider2() {
    stopViklaAnimation();
    position_repeat=2;
    gsap.fromTo(".roket",{opacity:0},{opacity:0,duration:.01})
    gsap.fromTo(".helper",{opacity:0},{opacity:1,delay:4})
    gsap.fromTo(".about-me1,.my-project1",{top:"calc(var(--index)*-8)"}, {top:"calc(var(--index)*0)",delay: 4,duration:.4});
    gsap.fromTo(".helper",{y:-20*vh}, {y:0,delay: 4,duration:.4});
    // gsap.fromTo("#svg",{opacity:0}, {opacity:1})
    // 
    // gsap.defaults({ease: "none"});
    // const main = gsap.timeline();
    // main.from(".theLine", {drawSVG: "0%", duration:6, delay: 1.4})
    // .to(".helper", {
    //     motionPath: {
    //         path: ".theLine",
    //         align: ".theLine",
    //         alignOrigin: [0.5, 0.5]
    //     },
    //     duration: 6,delay: 1.4
    // }, 0);

setTimeout(function() {meteors();}, 400); 
setTimeout(function() {repeat();gr();}, 10000); 
setTimeout(function() {
    if (slide2) return;
    gsap.fromTo(".block__items-two",{left:'-50%'}, {left:'5%',duration:1.2,ease: "power1.out"});
    gsap.fromTo(".block__two-h1",{left:'-50%'}, {left:'0%',duration:1.2,ease: "power1.out"});
    gsap.fromTo(".block__two-p",{left:'-50%'}, {left:'0%',duration:1.2,delay:.2,ease: "power1.out"});
    gsap.fromTo(".bbb",{left:'-50%'}, {left:'0%',duration:1.2,delay:.4,ease: "power1.out"});
    gsap.fromTo(".aaa",{left:'-50%'}, {left:'0%',duration:1.2,delay:.5,ease: "power1.out"});
    planets()
    gsap.fromTo(".roket",{opacity:0},{opacity:1,duration:1.2,delay:1})
}, 2000); 
    if (!slide2) return;
    if (position==3) return;
    setTimeout(function() {
    planets()
    gsap.fromTo(".block__items-two",{left:'-50%'}, {left:'5%',duration:1.2,ease: "power1.out"});
    gsap.fromTo(".block__two-h1",{left:'-50%'}, {left:'0%',duration:1.2,ease: "power1.out"});
    gsap.fromTo(".block__two-p",{left:'-50%'}, {left:'0%',duration:1.2,delay:.2,ease: "power1.out"});
    gsap.fromTo(".bbb",{left:'-50%'}, {left:'0%',duration:1.2,delay:.4,ease: "power1.out"});
    gsap.fromTo(".aaa",{left:'-50%'}, {left:'0%',duration:1.2,delay:.5,ease: "power1.out"});
    gsap.fromTo(".roket",{opacity:0},{opacity:1,duration:1,delay:.5})
    position=2;
}, 500); 
}

function slider3() {
    stopAnimation(); vikla();startViklaAnimation();textScrol();psts();
    setTimeout(function() {
        scrolTriger();
    }, 1000); 
    position_repeat=3;
    gsap.fromTo(".roket",{opacity:1},{opacity:0,duration:.55})
    position=3;
}

function meteors(){
    if (slide2) return;
    gsap.fromTo(".meteors",{opacity:0}, {opacity:1,delay:.25});
    gsap.fromTo('.header_img__meteor-white0',{ y:100*-(vh+vw),x:-(vh+vw)*100},{y:(vh+vw)*100,x:(vh+vw)*100,duration:1,delay:.25})
    gsap.fromTo('.header_img__meteor-yellow0',{ y:-indexJs*100,x:-indexJs*60},{y:indexJs*100,x:indexJs*60,duration:1,delay:.46})
    gsap.fromTo('.header_img__meteor-white1',{ y:-indexJs*100,x:-indexJs*45},{y:indexJs*100,x:indexJs*45,duration:.75,delay:.60})
    gsap.fromTo('.header_img__meteor-yellow1',{ y:-indexJs*100,x:-indexJs*25},{y:indexJs*100,x:indexJs*25,duration:.75,delay:.75})
    gsap.fromTo('.header_img__meteor-white2',{ y:-indexJs*45,x:-indexJs*100},{y:indexJs*20,x:indexJs*100,duration:1.5,delay:.85})
}

function planets(){
slide2=true;
gsap.fromTo('.article__planets_0,.article__blur-0', {y: 0,x:0}, {y: 0,x:indexJs/5,duration: 3,delay:.5,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-0', {rotate:.7}, {rotate:-.7,delay: .5,duration: 3,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_0,.article__blur-0', {y: -1200,  ease: "power2.out"}, {y:0,duration: .6, ease: "power2.out"})
gsap.fromTo('.article__thread-0',{y:-1200},{y:0,duration: .6,ease: 'power2.out',});

gsap.fromTo('.article__planets_1', {y: 0,x:0}, {y: 0,x:indexJs/3,duration: 2.8,delay:.7,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-1', {rotate:1.7}, {rotate:0,delay: .7,duration: 2.8,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_1', {y: -1200,x:0,  ease: "power2.out"}, {y:0,x:indexJs*0,duration: .7, ease: "power2.out"})
gsap.fromTo('.article__thread-1',{y:-1200},{y:0, rotate:1.7,duration: .7,ease: 'power2.out',})

gsap.fromTo('.article__planets_2', {y: 0,x:0}, {y: 0,x:-indexJs ,duration: 5,delay:.7,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-2', { rotate:-2.5}, { rotate:2.5,delay: .7,duration: 5,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_2', {y: -1600,x:-50,  ease: "power2.out"}, {y: 0,x:0,duration: .6,delay:.1, ease: "power2.out"})
gsap.fromTo('.article__thread-2',{y:-2000},{y:0,rotate:-2.5,delay:.1,duration: .6,ease: 'power2.out',})
    
gsap.fromTo('.article__planets_3', {y: 0,x:0}, {y: 0,x:indexJs/2 ,duration: 2.3,delay:1.1,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', { rotate:1}, { rotate:-1,delay: 1.1,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_3', {y: -2600,x:30,  ease: "power2.out"}, {y: 0,x:0,duration: 1,delay:.1, ease: "power2.out"})
gsap.fromTo('.article__thread-3',{y:-2700},{y:0,rotate:1,delay:.1,duration: 1,ease: 'power2.out',})

gsap.fromTo('.article__planets_4', {y: 0,x:0}, {y: 0,x:indexJs/3.2 ,duration: 3.5,delay:1,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-4', { rotate:1}, { rotate:.2,delay: 1,duration: 3.5,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_4', {y: -2600,x:50,  ease: "power2.out"}, {y:0,x:0,duration: .7,delay:.3, ease: "power2.out"})
gsap.fromTo('.article__thread-4',{y:-2700},{y:0,rotate:1,delay:.3,duration: .7,ease: 'power2.out',})

gsap.fromTo('.article__planets_5', {y: 0,x:0}, {y: 0,x:-indexJs/6 ,duration: 2.6,delay:1.1,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-5', { rotate:-.4}, { rotate:0,delay: 1.1,duration: 2.6,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_5', {y: -3500,x:50,  ease: "power2.out"}, {y:0,x:0,duration: .8,delay:.3, ease: "power2.out"})
gsap.fromTo('.article__thread-5',{y:-3500},{y:0,rotate:-.4,delay:.3,duration: .8,ease: 'power2.out',})

gsap.fromTo('.article__planets_6', {y: 0,x:0}, {y: 0,x:indexJs/6 ,duration: 3.4,delay:1.2,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-6', { rotate:1.7}, { rotate:1,delay: 1.2,duration: 3.4,ease:'power2.inOut',yoyo: true,repeat: -1,}); 
gsap.fromTo('.article__planets_6', {y: -2600,x:50,  ease: "power2.out"}, {y: 0,x:0,duration: .9,delay:.3, ease: "power2.out"})
gsap.fromTo('.article__thread-6',{y:-2700},{y:0,rotate:1.7,delay:.3,duration: .9,ease: 'power2.out',})

gsap.fromTo('.article__planets_7', {y: 0,x:0}, {y: 0,x:indexJs ,duration: 5.65,delay:1,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-7', { rotate:2.3}, { rotate:-2.3,delay:1,duration: 5.65,ease:'power2.inOut',yoyo: true,repeat: -1,}); 
gsap.fromTo('.article__planets_7', {y: -1000,x:50,  ease: "power2.out"}, {y:0,x:0,duration: .7,delay:.3, ease: "power2.out"})
gsap.fromTo('.article__thread-7',{y:-1000},{y:0,rotate:2.3,delay:.3,duration: .7,ease: 'power2.out',})
gsap.fromTo(".article__planets",{opacity:0}, {opacity:1,delay:.3});
document.querySelector('.article__planets').style.display ='block';
}
function planetsAut(){
gsap.fromTo('.article__planets_7,.article__planets_6,.article__planets_5,.article__planets_4,.article__planets_3,.article__planets_2,.article__planets_1,.article__planets_0,.article__blur-0', {y: 0,  ease: "power2.out"}, {y:-1000,duration: .8, ease: "power2.out"})
gsap.fromTo('.article__thread-7,.article__thread-6,.article__thread-5,.article__thread-4,.article__thread-3,.article__thread-2,.article__thread-1,.article__thread-0',{y:0},{y:-1000,duration: .8,ease: 'power2.out',})
}

let animationIntervall;

function repeat(){
    const animations = [
        () => gsap.fromTo('.header_img__meteor-yellow-repeat1', { y: -indexJs*100, x: indexJs*0 }, { y: indexJs*500, x: indexJs*-325, duration: 5 }),
        () => gsap.fromTo('.header_img__meteor-yellow-repeat2', { y: -indexJs*100, x: indexJs*0 }, { y: indexJs*300, x: indexJs*-125, duration: 6 }),
        () => gsap.fromTo('.header_img__meteor-yellow-repeat3', { y: -indexJs*100, x: indexJs*0 }, { y: indexJs*300, x: indexJs*-75, duration: 7}),
        () => gsap.fromTo('.header_img__meteor-white-repeat1', { y: -indexJs*100, x: indexJs*0 }, { y: indexJs*300, x: indexJs*-175, duration: 8 }),
        () => gsap.fromTo('.header_img__meteor-white-repeat2', { y: -indexJs*100, x: indexJs*0 }, { y: indexJs*100, x: indexJs*-350, duration: 8 })
      ];
      function playRandomAnimation() {
        const randomIndex = Math.floor(Math.random() * animations.length);
        animations[randomIndex]();
      }
      setInterval(playRandomAnimation, 10000);
      playRandomAnimation();
}

function gr() {

    const elements = ['.gr1', '.gr2', '.gr3', '.gr4', '.gr5', '.gr6'];

    const animations = elements.map(selector => () => {
        const element = document.querySelector(selector);
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = 'move2 2.5s linear';
    });

    function playRandomAnimation() {
        const randomIndex = Math.floor(Math.random() * animations.length);
        animations[randomIndex]();
    }
    stopAnimation();
    animationInterval = setInterval(playRandomAnimation, 5000);
    playRandomAnimation();
}

function stopAnimation() {
    clearInterval(animationInterval);
    const elements = ['.gr1', '.gr2', '.gr3', '.gr4', '.gr5', '.gr6'];
    elements.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.animation = 'none';
        }
    });
}
const sections = gsap.utils.toArray(".container section");
const mask = document.querySelector(".mask");
let scrollTween = gsap.to(sections, {
    xPercent: -200 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      end: "+=3000",
    }
  });
  gsap.to(mask, {
    width: "100%",
    scrollTrigger: {
      trigger: ".section_three",
      start: "top left",
      end:"+=3000",
      scrub: 1
    }
  });

  function vikla(){

    gsap.fromTo(".vikla-color",{left:'-100%'}, {left:'0%',duration:.4,delay:.5 });
    gsap.fromTo(".vikla-text",{left:'-150%'}, {left:'0%',duration:.4,delay:.6 });
    gsap.fromTo(".vikla-b",{left:'-100%'}, {left:'0%',duration:.4,delay:.7 });
    gsap.fromTo(".vikla-a",{left:'-100%'}, {left:'0%',duration:.4,delay:.8 });

    gsap.fromTo(".rok-pi-1",{top:'100%'}, {top:'0%',duration:.6,delay:.9 });
    gsap.fromTo(".rok-pi-2",{left:'100%'}, {left:'0%',duration:.5,delay:1.2});
    gsap.fromTo(".rok-pi-4",{top:'-100%'}, {top:'0%',duration:.4,delay:1.4});
    gsap.fromTo(".rok-pi-3",{left:'-100%'}, {left:'0%',duration:.4,delay:1.6});
  }
  function scrolTriger(){
    gsap.fromTo('.items-rok1',{ y:0,x:0},{y:-50,x:0,scrollTrigger:{trigger:'.container',start: 200*vh,end:400*vh,scrub:true}})
    gsap.fromTo('.items-rok2',{ y:0,x:0},{y:0,x:100,scrollTrigger:{trigger:'.container',start: 200*vh,end:400*vh,scrub:true}})
    gsap.fromTo('.items-rok4',{ y:0,x:0},{y:50,x:0,scrollTrigger:{trigger:'.container',start: 200*vh,end:400*vh,scrub:true}})
    gsap.fromTo('.items-rok3',{ y:0,x:0},{y:0,x:-100,scrollTrigger:{trigger:'.container',start: 200*vh,end:400*vh,scrub:true}})
  }
  function viklaAnimation(){

  }



  let intervalId;

function viklaAnimation() {
    gsap.fromTo('.rok-pi-11', { top: '-100%' }, { top: '0%', duration: .25, delay: 5 });
    gsap.fromTo(".rok-pi-1", { top: '-100%' }, { top: '0%', duration: .25, delay: 5 });
    gsap.fromTo('.rok-pi-12', { left: '0%' }, { left: '-100%', duration: .25, delay: 5.3 });
    gsap.fromTo(".rok-pi-2", { left: '100%' }, { left: '0%', duration: .25, delay: 5.3 });
    gsap.fromTo('.rok-pi-14', { top: '-100%' }, { top: '-200%', duration: .25, delay: 5.6 });
    gsap.fromTo(".rok-pi-4", { top: '100%' }, { top: '0%', duration: .25, delay: 5.6 });
    gsap.fromTo('.rok-pi-13', { right: '0%' }, { right: '-100%', duration: .25, delay: 5.9 });
    gsap.fromTo(".rok-pi-3", { left: '-100%' }, { left: '0%', duration: .25, delay: 5.9 });

    gsap.fromTo('.rok-pi-11', { top: '0%' }, { top: '-100%', duration: .25 });
    gsap.fromTo(".rok-pi-1", { top: '0%' }, { top: '-100%', duration: .25 });
    gsap.fromTo('.rok-pi-12', { left: '-100%' }, { left: '0%', duration: .25, delay: .3 });
    gsap.fromTo(".rok-pi-2", { left: '0%' }, { left: '100%', duration: .25, delay: .3 });
    gsap.fromTo('.rok-pi-14', { top: '-200%' }, { top: '-100%', duration: .25, delay: .6 });
    gsap.fromTo(".rok-pi-4", { top: '0%' }, { top: '100%', duration: .25, delay: .6 });
    gsap.fromTo('.rok-pi-13', { right: '-100%' }, { right: '0%', duration: .25, delay: .9 });
    gsap.fromTo(".rok-pi-3", { left: '0%' }, { left: '-100%', duration: .25, delay: .9 });


}

function startViklaAnimation() {
    intervalId = setInterval(viklaAnimation, 7500);
}

function stopViklaAnimation() {
    clearInterval(intervalId);

    // Kill all tweens of the specified elements
    gsap.killTweensOf('.rok-pi-11');
    gsap.killTweensOf('.rok-pi-1');
    gsap.killTweensOf('.rok-pi-12');
    gsap.killTweensOf('.rok-pi-2');
    gsap.killTweensOf('.rok-pi-14');
    gsap.killTweensOf('.rok-pi-4');
    gsap.killTweensOf('.rok-pi-13');
    gsap.killTweensOf('.rok-pi-3');
    setTimeout(function() {
        gsap.fromTo('.rok-pi-11,.rok-pi-14', { top: '0%' }, { top: '-1000%', duration:0 });
        gsap.fromTo('.rok-pi-12', { left: '0%' }, { left: '-1000%', duration:0 });
        gsap.fromTo('.rok-pi-13', { right: '0%' }, { right: '-1000%', duration:0 });
    }, 1200)

}
function textScrol(){
gsap.fromTo('.div__terusik',{ left: "calc(var(--index)*5)" },{ left: "calc(var(--index)*30)",scrollTrigger:{trigger:'.text-1',start: 85*vw,end:300*vw,scrub:true}});
gsap.fromTo('.kolosok',{ left:"-110%",rotate:'35deg' },{ left: "0",rotate:'0deg', duration: .4,scrollTrigger: {trigger: '.text-1',start: 85*vw}});
gsap.fromTo('.div__kolosok',{ left: "calc(var(--index)*50)" },{ left: "calc(var(--index)*111)",scrollTrigger:{trigger:'.text-1',start:100*vw,end:300*vw,scrub:true}});
gsap.fromTo('.div__kolosok',{ y:0 },{ y:-40,scrollTrigger:{trigger:'.text-1',start:120*vw,end:160*vw,scrub:true}});
gsap.fromTo('.div__kolosok',{ y:-40 },{ y:-30,scrollTrigger:{trigger:'.text-1',start:160*vw,end:235*vw,scrub:true}});
gsap.fromTo('.kolosok',{ rotate: "0deg"},{ rotate: "-20deg",scrollTrigger:{trigger:'.text-1',start:120*vw,end:160*vw,scrub:true}});
gsap.fromTo('.kolosok',{ rotate: "-20deg" },{ rotate: "10deg",scrollTrigger:{trigger:'.text-1',start:160*vw,end:235*vw,scrub:true}});
gsap.fromTo('.star',{ top:"-100px" },{ top: "0",scrollTrigger:{trigger:'.text-1',start:210*vw,end:235*vw,scrub:true}});
gsap.fromTo('.star',{ rotate: "0deg"},{ rotate: "1080deg",scrollTrigger:{trigger:'.text-1',start:210*vw,end:385*vw,scrub:true}});
gsap.fromTo('.div__star',{ left: "calc(var(--index)*120)"},{ left: "calc(var(--index)*170)",scrollTrigger:{trigger:'.text-1',start:210*vw,end:305*vw,scrub:true}});
gsap.fromTo('.blokus',{left:"-100%"},{left: "0%",scrollTrigger:{trigger:'.text-1',start:208*vw,end:220*vw,scrub:true}});


gsap.fromTo('.text-1',{ y: -2000 },{ y: 0, duration: 1,scrollTrigger: {trigger: '.text-1',start: 220*vh}});
gsap.fromTo('.text-2',{ left:"-100%" },{ left: "0%", duration: .8,scrollTrigger: {trigger: '.text-1',start: 250*vh}});
gsap.fromTo('.terusik',{ left:"-100%" },{ left: "0%", duration: 1,scrollTrigger: {trigger: '.text-1',start: 125*vw}});
gsap.fromTo('.text-3',{ y: 2000 },{ y: 0, duration: 1,scrollTrigger: {trigger: '.text-1',start: 270*vh}});
gsap.fromTo('.text-4',{ left:"-100%"},{ left: "0%", duration: .4,scrollTrigger:{trigger: '.text-1',start: 285*vh}});
gsap.fromTo('.text-5',{ top:"-100%" },{ top: "0%", duration: .4,scrollTrigger: {trigger: '.text-1',start: 295*vh}});
gsap.fromTo('.text-6',{ top:"-100%" },{ top: "0%", duration: .4,scrollTrigger: {trigger: '.text-1',start: 310*vh}});
gsap.fromTo('.text-7',{ top:"-100%" },{ top: "0%", duration: .4,scrollTrigger: {trigger: '.text-1',start: 320*vh}});
gsap.fromTo('.text-8',{ top:"-100%" },{ top: "0%", duration: .4,scrollTrigger: {trigger: '.text-1',start: 335*vh}});
gsap.fromTo('.text-9',{ left:"-100%"},{ left: "0%", duration: .8,scrollTrigger:{trigger: '.text-1',start: 365*vh}});
gsap.fromTo('.text-9-2',{right:"-100%"},{right: "0%", duration: .8,scrollTrigger:{trigger: '.text-1',start: 365*vh}});
gsap.fromTo('.text-9-3',{ y: -2000 },{ y: 0, duration: 1,scrollTrigger: {trigger: '.text-1',start: 395*vh}});
gsap.fromTo('.text-10',{ top:"100%"},{ top: "0%", duration: .8,scrollTrigger:{trigger: '.text-1',start: 455*vh}});
gsap.fromTo('.text-11',{ top:"-100%"},{ top: "0%", duration: .8,scrollTrigger:{trigger: '.text-1',start: 455*vh}});
}

function psts(){
    gsap.fromTo('.div__PSTS',{ marginTop: "0px"},{ marginTop: "180vh",scrollTrigger:{trigger:'.section_four',start:"top bottom",end:"bottom bottom",scrub:true}});

}
function pstsTeleport(){
    document.body.style.overflow = 'hidden';
    gsap.fromTo('.PSTS',{ marginTop:"0%" },{ marginTop: "-100%", duration: .35});
    
}