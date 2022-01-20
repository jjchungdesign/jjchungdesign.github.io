// SkewY
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("#skew", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / 400);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew)
      });
    }
  }
});

gsap.set("#skew", {transformOrigin: "left center", force3D: true});