gsap.registerPlugin(ScrollTrigger);

//------------ Intro ------------ //

function detectmob() {
  if(window.innerWidth <= 800) {
    return true;
  } else {
    return false;
  }
}

if(!detectmob()){

  // desktop
    gsap.to('#reveal', {
      scrollTrigger: {
          trigger: '#fade-trigger',
          start: "top 87%",
          end: "bottom 87%",
          // markers: true,
          toggleActions: "play none reverse none"
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
}

else {

    // mobile
    gsap.to('#reveal', {
      scrollTrigger: {
          trigger: '#fade-trigger',
          start: "top 87%",
          end: "bottom 87%",
          endTrigger: ".intro-sticky",
          // markers: true,
          toggleActions: "play none reverse none"
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
}



// ------------ Hero ------------ //

let txtAppear = gsap.timeline ({

  scrollTrigger: {
    trigger: '.hero-sticky',
    start: 'top 20%',
    end: 'bottom bottom',
    endTrigger: '#appear-end-trigger',
    // markers: true,
    toggleActions: "play reset resume reset"
  }});

txtAppear.to('.appear1', { opacity: 1, duration: 0.0001, stagger: 0.75 })
         .to('.appear2', { opacity: 1, duration: 0.0001, stagger: 0.75 }, "-=1.5")




// ------------ Marquee Text ------------ //

$('.services__left').marquee({
  //speed in milliseconds of the marquee
  duration: 20000,
  //gap in pixels between the tickers
  gap: 0,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: -99999,
  //'left' or 'right'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true
});

$('.services__right').marquee({
  //speed in milliseconds of the marquee
  duration: 20000,
  //gap in pixels between the tickers
  gap: 0,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: -99999,
  //'left' or 'right'
  direction: 'right',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true
});



// ------------ Horizontal ------------ //

const hcontainer = document.querySelector(".horizontal-container");

gsap.to(hcontainer, {
  x: () => -(hcontainer.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: hcontainer,
    invalidateOnRefresh: true,
    pin: true,
    // markers: true,
    scrub: 1,
    end: () => "+=" + ((hcontainer.offsetWidth - innerWidth) / 1.5)
  }
})


// ------------ Ending ------------ //

function detectmob() {
  if(window.innerWidth <= 800) {
    return true;
  } else {
    return false;
  }
}

if(!detectmob()){

  // desktop
  let endingtl = gsap.timeline({
  scrollTrigger: {
      trigger: '.ending-section',
      start: "center 51%",
      end: "center 51%",
      // markers: true,
      toggleActions: "play none reset none"
  }})

  endingtl.to('.ending-text', { backgroundPosition: '0 30px', visibility: 'visible', duration: 0.0001, ease: 'power3.out', stagger: 0.5 })
          .to('#ending', { transform: 'skewX(-20deg)' }, "-=0.3")
          .to('.container__left, .arrow', { scale: 1.5, transformOrigin: 'left bottom', color:'#fafafa', duration: 1, ease: 'power3.out' })
          .to('.arrow', { scale: 0.75, fill: '#fafafa', duration: 1, ease: 'power3.out' }, "-=1")
          .to('.name span', { visibility: 'visible', duration: 0.5, ease: 'power3.out' }, "+=1")

}

else {

  // mobile
  let endingtl = gsap.timeline({
  scrollTrigger: {
      trigger: '.ending-section',
      start: "center 50%",
      end: "center 50%",
      // markers: true,
      toggleActions: "play none reset none"
  }})

  endingtl.to('.ending-text', { backgroundPosition: '0 30px', visibility: 'visible', duration: 0.0001, ease: 'power3.out', stagger: 0.5 })
          .to('#ending', { transform: 'skewX(-20deg)' }, "-=0.3")
          .to('.name span', { visibility: 'visible', duration: 0.5, ease: 'power3.out' }, "+=1")
}