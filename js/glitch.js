function detectmob() {
    if(window.innerWidth <= 800) {
      return true;
    } else {
      return false;
    }
 }

 if(!detectmob()){
 
    // Site title glitch
    $('header a').hover(function() {
        $(this).attr('data-text', $(this).text() )
        $(this).addClass('glitch');
    }, function() {
        $(this).removeClass('glitch');
    }); 

    // Hero section glitch
    $('.hero-text span').hover(function() {
        $(this).attr('data-text', $(this).text() )
        $(this).addClass('glitch');
    }, function() {
        $(this).removeClass('glitch');
    }); 

    // Project list glitch
    $('.project-list').hover(function() {
        $(this).attr('data-text', $(this).text() )
        $(this).addClass('glitch');
    }, function() {
        $(this).removeClass('glitch');
    }); 

}