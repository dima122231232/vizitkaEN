const rand = (min, max) => Math.random() * (max - min) + min;const canvas = document.getElementById('canvas');const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var timer;
var bb = true;var shouldRun = true;
var cursorDelayed = document.querySelector('.cursor-delayed');
const text = document.querySelector('.Name');const letters = text.textContent.split('');
text.textContent = '';
bbb =0;

letters.forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.opacity = 0;
    text.appendChild(span);
    setTimeout(function() {
        gsap.to(span, {
            opacity: 1,
            duration: 0,
            delay: i * 0.1
        });
    }, 1000);
    
});
gsap.fromTo('.start', {y: 100}, {y: 0,duration: 1,delay:2.5});
gsap.fromTo('.i', {y: -500,}, {y: 0,duration: 1.5,delay:2});
gsap.fromTo('.start-Fake', {y: 100}, {y: 0,delay:.5});
gsap.fromTo('.start-Fake', {opacity: 0}, {opacity: 1,duration: 1,delay:3.5});
gsap.fromTo('.Name-Fake', {opacity: 0,}, {opacity: 1,duration: 1,delay:3.5});
gsap.fromTo('#canvas', {opacity: 0,}, {opacity: 1,duration:2,delay:3.5});
gsap.fromTo('.black-block', {opacity: 1,}, {opacity: 0,duration:.1,delay:3.5});
gsap.fromTo('.Name', {fontSize: "20vw",}, {fontSize: "14vw",duration: 1,delay:2.5});
gsap.fromTo('.Name', {letterSpacing: ".5vw",}, {letterSpacing: "2vw",duration: 1,delay:2.5});






document.querySelector('.i').addEventListener('mouseenter', function() {
        gsap.fromTo('.i', {rotate:0}, {rotate:360,duration: .5});
        cursorDelayed.style.height = 'calc(var(--index)*3.6)';
            cursorDelayed.style.width = 'calc(var(--index)*3.6)';
});

document.querySelector('.i').addEventListener('mouseleave', function() {
    gsap.fromTo('.i', {rotate:360}, {rotate:0,duration: .3});
});
document.querySelector('.i-skils').addEventListener('mouseenter', function() {
    gsap.fromTo('.i-skils', {rotate:0}, {rotate:360,duration: .5});
    cursorDelayed.style.height = 'calc(var(--index)*3.6)';
        cursorDelayed.style.width = 'calc(var(--index)*3.6)';
});

document.querySelector('.i-skils').addEventListener('mouseleave', function() {
gsap.fromTo('.i-skils', {rotate:360}, {rotate:0,duration: .3});
});

document.querySelector('.start-Fake').addEventListener('mouseenter', function() {
    if (!shouldRun) return;
    gsap.fromTo('.cursor-delayed', {width: "calc(var(--index)*1.2)",height: "calc(var(--index)*1.2)"}, {width: "calc(var(--index)*3.6)",height: "calc(var(--index)*3.6)",duration: .5});
    bb = false;
});
document.querySelector('.start-Fake').addEventListener('mouseleave', function() {
    if (!shouldRun) return;
    gsap.fromTo('.cursor-delayed', {width: "calc(var(--index)*3.6)",height: "calc(var(--index)*3.6)"}, {width: "calc(var(--index)*1.2)",height: "calc(var(--index)*1.2)",duration: .5});
    bb = true;
});
setTimeout(function() {
window.addEventListener('resize', () => {
    if (!shouldRun) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const backgroundColors = ['#000', '#000'];
const colors = [
    ['rgba(142, 255, 54, 0.65)', 'rgba(174, 244, 119, 0.65)'],
    ['rgba(66, 146, 4, 0.65)', 'rgba(39, 228, 155, 0.65)'],
    ['rgba(107, 202, 33, 0.65)', 'rgba(225, 240, 213, 0.65)']
];

let particles = [];

function generateParticles() {
    if (!shouldRun) return;
    const count = 3; 
    const blur = [5, 20]; 
    const radius = [5, 50]; 
    
    for (let i = 0; i < count; i++) {
        const thisRadius = rand(radius[0] * 3, radius[1] * 3);
        const thisBlur = rand(blur[0], blur[1]);
        const x = rand(0, canvas.width);
        const y = rand(0, canvas.height);
        const colorIndex = Math.floor(rand(0, 299) / 100);
        const colorOne = colors[colorIndex][0];
        const colorTwo = colors[colorIndex][1];
        
        particles.push({
            x,
            y,
            blur: thisBlur,
            radius: thisRadius,
            initialXDirection: Math.round(rand(-99, 99) / 100),
            initialYDirection: Math.round(rand(-99, 99) / 100),
            initialBlurDirection: Math.round(rand(-99, 99) / 100),
            colorOne,
            colorTwo,
        });
    }
}

function drawParticles() {
    if (!shouldRun) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    const adjX = 0.2; 
    const adjY = 0.2;
    const adjBlur = 0.3; 
    
    particles.forEach(item => {
        if ((item.x + (item.initialXDirection * adjX) >= canvas.width && item.initialXDirection !== 0) || 
            (item.x + (item.initialXDirection * adjX) <= 0 && item.initialXDirection !== 0)) {
            item.initialXDirection *= -1;
        }
        
        if ((item.y + (item.initialYDirection * adjY) >= canvas.height && item.initialYDirection !== 0) || 
            (item.y + (item.initialYDirection * adjY) <= 0 && item.initialYDirection !== 0)) {
            item.initialYDirection *= -1;
        }
        
        if ((item.blur + (item.initialBlurDirection * adjBlur) >= item.radius && item.initialBlurDirection !== 0) || 
            (item.blur + (item.initialBlurDirection * adjBlur) <= 0 && item.initialBlurDirection !== 0)) {
            item.initialBlurDirection *= -1;
        }
        
        item.x += item.initialXDirection * adjX;
        item.y += item.initialYDirection * adjY;
        item.blur += item.initialBlurDirection * adjBlur;
        
        ctx.beginPath();
        ctx.filter = `blur(${item.blur}px)`;
        const grd = ctx.createLinearGradient(item.x - item.radius / 2, item.y - item.radius / 2, item.x + item.radius, item.y + item.radius);
        grd.addColorStop(0, item.colorOne);
        grd.addColorStop(1, item.colorTwo);
        ctx.fillStyle = grd;
        ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    });
    
    requestAnimationFrame(drawParticles);
}

generateParticles();
drawParticles();
},3000)



function full(){
    shouldRun = false;
    gsap.fromTo('.cursor-delayed', {opacity: 1,width: "calc(var(--index)*3.6)",height: "calc(var(--index)*3.6)"}, {width: "calc(var(--index)*150)",height: "calc(var(--index)*150)",opacity: 1,duration: .7,zIndex:9999});
    setTimeout(function() {
    gsap.fromTo('.cursor-delayed', {opacity: 1,width: "calc(var(--index)*150)",height: "calc(var(--index)*150)"}, {width: "calc(var(--index)*1.2)",height: "calc(var(--index)*1.2)",opacity: 1,duration: .7,delay:.5,zIndex:2});
    document.querySelector('.osnova').style.display = 'none';
    // var currentURL = window.location.href;
    // var newURL = currentURL.replace("main.html", "html/skills.html");
    // window.location.href = newURL;   
    document.querySelector('.sections__skils').style.display='block';
    document.querySelector('.header__skils').style.display='block';
    gsap.fromTo('.header__skils', {marginTop:"-30%"}, {marginTop:"0%",duration: 1.75});
    gsap.fromTo('.i-skils', {marginTop:"-30%"}, {marginTop:"0%",duration: 1.75});

    const text1 = document.querySelector('.kostil');const letterss = text1.textContent.split('');text1.textContent = '';
    letterss.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = 0;
        text1.appendChild(span);
        setTimeout(function() {
            gsap.to(span, {
                opacity: 1,
                duration: 0,
                delay: i * 0.07
            });
        }, 1400);
        
    });
},700)
setTimeout(function() {
bb = true;
},1700)
}


var cursor = document.querySelector('.cursor');
    
    var lastDistance;

    
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
   


    function animateOnHover(selector) {
        let isAnimating = false;
    
        document.querySelector(selector).addEventListener('mouseenter', function() {
            if (!isAnimating) {
                if(selector==".col3__skils-fake-super"){
                    gsap.fromTo('.pol-block-three', {height:"calc(var(--index)*4.6);"}, {height:"calc(var(--index)*0)",duration: 1,delay:.1})
                    gsap.fromTo('.full-block-three', {height:"calc(var(--index)*10);"}, {height:"calc(var(--index)*16)",lineHeight: "150%",duration: 1,delay:.1})
                    gsap.fromTo('.p_skils_dob', {lineHeight: "calc(var(--index)*1.3)",fontSize:'1.7vw'}, {lineHeight: "calc(var(--index)*1.6)",fontSize:'2.1vw',duration: 1,delay:.1})
                }
                isAnimating = true;
                gsap.fromTo(selector, {opacity: 1}, {opacity: 0,duration: 0.5,
                    onComplete: () => {
                        this.style.display = 'none';
                        isAnimating = false;
                        
                    }
                });
            }
        });
    }
    
    animateOnHover('.col1__skils-fake-super');
    animateOnHover('.col2__skils-fake-super');
    animateOnHover('.col3__skils-fake-super');
   
    
    function hoverBlock(selector) {
        document.querySelectorAll('.' + selector).forEach(element => {
          element.addEventListener('mouseenter', function() {
            gsap.fromTo('.i-skils', {}, {marginTop:"-20%",duration: .4});
            gsap.fromTo('.cursor-delayed', {width: "calc(var(--index)*1.2)",height: "calc(var(--index)*1.2)"}, {width: "calc(var(--index)*3.6)",height: "calc(var(--index)*3.6)",duration: .5});
                bb = false;
               gsap.fromTo('.' + selector, {backgroundColor: "rgba(85, 85, 85, .4)", color:"#8AFF2F"}, {backgroundColor: "rgba(142, 255, 54, 1)",color:"rgba(0, 0, 0, .6)",duration: 0.4,});
                if(selector=='spo-osnova'){  gsap.fromTo('.spo-o', {marginTop:"-20%"}, {marginTop:"0%",duration: .4});}if(selector=='spo-dop'){  gsap.fromTo('.spo-d', {marginTop:"-20%"}, {marginTop:"0%",duration: .4});}if(selector=='spo-libr'){  gsap.fromTo('.spo-l', {marginTop:"-20%"}, {marginTop:"0%",duration: .4});}if(selector=='spo-my'){  gsap.fromTo('.spo-m', {marginTop:"-20%"}, {marginTop:"0%",duration: .4});}
            });
            element.addEventListener('mouseleave', function() {
                gsap.fromTo('.i-skils', {marginTop:"-20%"}, {marginTop:"0%",duration: .4});
                gsap.fromTo('.cursor-delayed', {width: "calc(var(--index)*3.6)",height: "calc(var(--index)*3.6)"}, {width: "calc(var(--index)*1.2)",height: "calc(var(--index)*1.2)",duration: .5});
                    bb = true;
                gsap.fromTo('.' + selector, {backgroundColor: "rgba(142, 255, 54, 1)",color:"rgba(0, 0, 0, .6)"}, {backgroundColor: "rgba(85, 85, 85, .4)", color:"#8AFF2F",duration: 0.5,});
                if(selector=='spo-osnova'){gsap.fromTo('.spo-o', {marginTop:"0%"}, {marginTop:"-20%",duration: .4})};if(selector=='spo-libr'){gsap.fromTo('.spo-l', {marginTop:"0%"}, {marginTop:"-20%",duration: .4})};if(selector=='spo-dop'){gsap.fromTo('.spo-d', {marginTop:"0%"}, {marginTop:"-20%",duration: .4})};if(selector=='spo-my'){gsap.fromTo('.spo-m', {marginTop:"0%"}, {marginTop:"-20%",duration: .4})};

            });
        });
    }
    
    
    hoverBlock('spo-libr');
    hoverBlock('spo-dop');
    hoverBlock('spo-osnova');
    hoverBlock('spo-my');

    