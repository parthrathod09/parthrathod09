const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoAnimation(){
    var videocon = document.querySelector("#video-container");
var platbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(platbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(platbtn,{
        scale:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(platbtn,{
        left:dets.x-80,
        top:dets.y-50
    })
})
}
function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    })
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.5,
        // stagger:0.2
    })
}
videoAnimation();
loadingAnimation();