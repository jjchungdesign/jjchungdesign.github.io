gsap.registerPlugin(ScrollTrigger);


//------------ Intro ------------ //

  // Mobile version
  function detectmob() {
    if(window.innerWidth <= 800) {
      return true;
    } else {
      return false;
    }
  }

  if(!detectmob()){

    // scrollTrigger for desktop
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

      // scrollTrigger for mobile
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
gsap.utils.toArray('.hero-wrapper').forEach(section => {
  const elems = section.querySelectorAll('#appear');
  // Set starting params for sections
  gsap.set(elems, {
    opacity: 0,
    duration: 0,
    ease: 'power3.out',
    overwrite: 'auto',
  });
  
  ScrollTrigger.create({
    trigger: '#appear-trigger',
    start: '250px bottom',
    end: 'bottom bottom',
    endTrigger: '#appear-end-trigger',
    // markers: true,
    onEnter: () => gsap.to(elems, {
      opacity: 1,
      duration: 0,
      stagger: 0.75,
    }),
    onLeave: () => gsap.to(elems, {
      opacity: 0,
      duration: 0.75,
    }),
    onEnterBack: () => gsap.to(elems, {
      opacity: 1,
      duration: 0,
      stagger: -0.75,
    }),
    onLeaveBack: () => gsap.to(elems, {
      opacity: 0,
      duration: 0.5,
    }),
  });
})

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

  // Mobile version
  function detectmob() {
    if(window.innerWidth <= 800) {
      return true;
    } else {
      return false;
    }
  }

  if(!detectmob()){

    // scrollTrigger for desktop
    let endingtl = gsap.timeline({
    scrollTrigger: {
        trigger: '.ending-section',
        start: "center 50%",
        end: "center 50%",
        // markers: true,
        toggleActions: "play none reset none"
    }})

    endingtl.to('#ending', { backgroundPosition: '0 30px', opacity: 1, duration: 0.1, ease: 'power3.out', stagger: 0.5 })
            .to('.ending-text:nth-of-type(2)', { transform: 'skewX(-20deg)' }, "-=0.9")
            .to('.container__left', { fontSize: '1.25em', color:'#fafafa', ease: 'power3.out' })
            .to('.name span', { opacity: 1, duration: 0.5, ease: 'power3.out' }, "+=1")

  }

  else {

    // scrollTrigger for mobile
    let endingtl = gsap.timeline({
    scrollTrigger: {
        trigger: '.ending-section',
        start: "center 50%",
        end: "center 50%",
        // markers: true,
        toggleActions: "play none reset none"
    }})

    endingtl.to('#ending', { backgroundPosition: '0 30px', opacity: 1, duration: 0.1, ease: 'power3.out', stagger: 0.5 })
            .to('.ending-text:nth-of-type(2)', { transform: 'skewX(-20deg)' }, "-=0.9")
            .to('.name span', { opacity: 1, duration: 0.5, ease: 'power3.out' })
  }

        

