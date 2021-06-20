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

    // Portrait on Hover
    // var $img = $('#portrait');
    // $img.hide();
    // $('.imagehover').mousemove(function(e) {
    //     $img.stop(1, 1).fadeIn();
    //     $('#portrait').offset({
    //         top: e.pageY,
    //         left: e.pageX
    //     });
    // }).mouseleave(function() {
    //     $img.hide();
    // });

    // Services section hover effect
    $('.services').hover(
        function(){
            $('.hero-text').css("opacity", "0.1");
        },
        function() {
            $('.hero-text').css("opacity", "1");
    });

}