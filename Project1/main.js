
var tl = gsap.timeline({repeat: 2});
tl.from(".logo", {duration: 1.5, opacity:0, scale:0.3, ease: "back"});
tl.to(".logo", {duration: 1, rotation: 360});
tl.from(".circle", {duration: 1, opacity:0, delay:1.5, y: 150,
stagger: 0.25}, "+=1");