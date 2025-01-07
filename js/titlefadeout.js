// Ensure GSAP and ScrollTrigger plugin are included
gsap.registerPlugin(ScrollTrigger);

// Create the fade-out effect on scroll with precise control over when it starts and ends
gsap.to(".desc-container", {
  opacity: 0, // Fade out to 0 opacity
  scrollTrigger: {
    trigger: ".content-container", // Element to trigger the animation on
    start: "top 25%", // Fade out when the top of the element reaches 80% of the viewport height
    end: "top 25%", // Continue fading out until the top of the element reaches 30% of the viewport height
    scrub: true, // Smoothly animate the change as you scroll
    // markers: true, // Optional: shows the start and end markers for debugging
  },
});
