window.addEventListener('scroll',e =>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth:1,
        effects:true,
})
let vh = window.innerHeight / 100;
gsap.fromTo('.psts-new',{ marginTop:"-100%" },{ marginTop: "0%", duration: .4,delay:.4});
gsap.fromTo('.PSTS-section',{ opacity:0 },{ opacity:1,delay:.3});
gsap.fromTo('.vibor-left',{ left: "100%"},{ left: "0%",scrollTrigger:{trigger:'.set-3-psts',start:230*vh,end:"bottom bottom",scrub:true}});
gsap.fromTo('.vibor-right',{ left: "-100%"},{ left: "0%",scrollTrigger:{trigger:'.set-3-psts',start:230*vh,end:"bottom bottom",scrub:true}});

gsap.fromTo('#svg',{ top: "-102vh"},{ top: "0vh",duration:1,scrollTrigger: {trigger: "#svg",scrub: true,start:200*vh}});


// gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin, GSDevTools, ScrollTrigger);
//         gsap.defaults({ease: "none"});
//         const main = gsap.timeline({scrollTrigger: {trigger: "#svg",scrub: true,start:200*vh,end: "bottom bottom"}})
//         .from(".theLine", {drawSVG:0, duration:1}, 0)

setTimeout(function(){
    document.body.style.overflow = 'auto';
},800)


