// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
//   });

var tl= gsap.timeline()


tl.from("nav H3",{
  y:-75,
  opacity:0,
  duration:0.4,
  delay:0.6
})
tl.from(".nav2",{
  y:-75,
  opacity:0,
  duration:0.4,
  delay:0.6 ,
  stager:0.1
})
tl.from(".solo div",{
  x:-575,
  opacity:0,
  duration:0.4,
  delay:0.6
})
tl.from(".solo p",{
  x:-625,
  opacity:0,
  duration:0.4,
  delay:0.6
})

Shery.makeMagnet(".nav H3" , {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".nav2 :nth-child(1)" , {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.textAnimate(".solo p" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  // multiplier: 0.1,
  
});
Shery.mouseFollower();

Shery.imageEffect(".img1", {
  style: 5, 
  // debug: 1,
    gooey: true,
  config: {"a":{"value":1.15,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.729850071311789},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.06,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":1.27,"range":[0,2]},"discard_threshold":{"value":0.43,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} 
  })




  Shery.makeMagnet(".ss h2" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".ss a" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".foot1 h2" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".fotter2n .f2" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.makeMagnet(".fotter2n .f3" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".item" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".f4 div" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });