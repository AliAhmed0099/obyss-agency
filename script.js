function loadingAnimation(){
    
var tl=gsap.timeline(); 
tl.from(".line h1",{
    y:140,
    stagger:0.25,
    duration:0.75,
    delay:0.6,
}) 

tl.from("#line-part1",{
opacity:0,
onStart:function(){
var h5=document.querySelector("#line-part1 h5");
var grow=0;
setInterval(function(){
    if(grow<100){
 h5.innerHTML=grow++;
    }
    else{
        h5.innerHTML=grow;
    }
},33);
}
});

tl.to(".line h2",{      
    animationName:"anime",
    opacity:1,
    
})

tl.to("#loader",{
    opacity:0,
    duration:0.3,
    delay:2.8,
})

tl.from("#page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    duration:0.5,   
    ease:Power4,    
})

tl.to("#loader",{
     display:"none",
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:140,
    stagger:0.2,
})
}

 function cursorAnimation(){

       document.addEventListener("mousemove",function(dets){
gsap.to("#crsr",{
    left:dets.clientX,
    top:dets.clientY, 
})
    })

    Shery.makeMagnet("#nav-part2 h4");


 }

loadingAnimation();
 cursorAnimation();
