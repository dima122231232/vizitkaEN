let vh = window.innerHeight / 100;
var kostil = true , kostil2 = false, pos = 1;
gsap.to(window, {scrollTo: {y: 0 * vh},duration: .5});

// // gsap.to(window, {scrollTo: {y:250 *vh},duration: 1});
// // gsap.fromTo(".text-abobusa",{y:0},{y:-300*vh,duration:65,delay:1})
// // gsap.fromTo(".abobus",{height:250*vh},{height:100*vh,duration:65,delay:1})
// window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     var windowHeight = window.innerHeight;
//     var scrollPercent = (scrollPosition / windowHeight) * 100;
//     if (scrollPercent <= 190) {
//         // gsap.to(window, {scrollTo: {y:200 *vh},duration: 1}); 
//     }
// });
const titlesContainer = document.getElementById('titles');

titlesContainer.addEventListener('scroll', function() {
    if (titlesContainer.scrollTop + titlesContainer.clientHeight === titlesContainer.scrollHeight) {
        kostil2 = true;
    } else {
        kostil2 = false;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('wheel', function (event) {
        if(!kostil2) return;
        if(!kostil) return;
        var delta = event.deltaY || event.detail || event.wheelDelta;
        var direction = delta > 0 ? 1 : -1;
        if(direction==1){
            if(pos==2) return;
            gsap.fromTo("#titlecontent",{opacity:1},{opacity:0,duration:1})
            gsap.fromTo(".my_works-last",{opacity:0},{opacity:1,duration:1,delay:3})
            kostil = false;
            setTimeout(function(){
            pos = 2;
            gsap.to(window, {scrollTo: {y: 200 * vh},duration: 1,delay:.10});
            cina2();
            kostil2 = true;
            setTimeout(function(){
                kostil = true;kostil2 = true;
            },1000)},800)
        }
        if(direction==-1){
            if(pos==1) return;
            pos = 1;
            gsap.fromTo("#titlecontent",{opacity:0},{opacity:1,duration:.25})
            gsap.to(window, {scrollTo: {y: 0 * vh},duration: 1});
            kostil = false;
            setTimeout(function(){
                kostil = true;
            },1000)
        }
       
    });
});

function cina2(){
    gsap.fromTo(".PROGRAMISTIC-final",{marginTop:"-100%"},{marginTop:"0%",duration:1,delay:.25})
    gsap.fromTo(".TELEGRAM_i-final",{marginTop:"-100%"},{marginTop:"0%",duration:1,delay:.5})
    gsap.fromTo(".FRONTEND-final",{marginTop:"-100%"},{marginTop:"0%",duration:1,delay:1})

    gsap.fromTo(".IMAXXPEN-final",{marginTop:"-100%"},{marginTop:"0%",duration:1,delay:1.25})
    gsap.fromTo(".TELEGRAM_z-final",{marginTop:"-100%"},{marginTop:"0%",duration:1,delay:1.5})
    gsap.fromTo(".DESIGN-final",{marginTop:"-100%"},{marginTop:"0%",duration:1,delay:2})
}