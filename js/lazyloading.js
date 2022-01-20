if ( $(window).width() <= 600 ) {
    // Your mobile code goes here
  }else{
    // Your desktop code goes here
  

  
  // WORKS
var revealElements = document.getElementsByClassName("works-title");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 100,												 // start a little later
            triggerHook: 0.9
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({name: "works-title " + (i+1) }) // add indicators (requires plugin)
        .addTo(controller);
    }

// PARAGRAPH
var revealElements = document.getElementsByClassName("para-container");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 200,												 // start a little later
            triggerHook: 0.9
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({name: "works-title " + (i+1) }) // add indicators (requires plugin)
        .addTo(controller);
    }

// SERVICES
var revealElements = document.getElementsByClassName("services-wrapper");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 200,												 // start a little later
            triggerHook: 0.9
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({name: "works-title " + (i+1) }) // add indicators (requires plugin)
        .addTo(controller);
    }

// BRANDS
var revealElements = document.getElementsByClassName("brand-line");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 200,												 // start a little later
            triggerHook: 0.9
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({name: "works-title " + (i+1) }) // add indicators (requires plugin)
        .addTo(controller);
    }

// REACH
var revealElements = document.getElementsByClassName("contact");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 200,												 // start a little later
            triggerHook: 0.9
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({name: "works-title " + (i+1) }) // add indicators (requires plugin)
        .addTo(controller);
    }


}