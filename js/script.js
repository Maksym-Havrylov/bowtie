/*
    Get the curent slide
*/
function currentSlide( current ) {
    $(".current_slide").text(current + " of " + $("#slides").slides("status","total") );
}

$(function(){
  $("#slides").slides({
    play: {
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 3000,
        // [number] Time spent on each slide in milliseconds.
      auto: false,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    }
  });

  $("#slides").slides("play");
});

jQuery(function($) {

  $('#cart').click(function(){
    if($('#cart').attr('class') == 'active'){
        $('#cart').removeClass('active');
        $('.pop-up-cart').animate( { left:"200%" }, 500);
    } else {
        $('#cart').addClass('active');
        $('#booking').removeClass('active');
        $('.pop-up-cart').animate( { left:"0" }, 500);
        $('.pop-up-booking').animate( { right:"200%" }, 500);
    }
  });

  $('.pop-up-cart .close').click(function(){
    $('#cart').removeClass('active');
    $('.pop-up-cart').animate( { left:"200%" }, 500);
  });

  $('#booking').click(function(){
    if($('#booking').attr('class') == 'active'){
        $('#booking').removeClass('active');
        $('.pop-up-booking').animate( { right:"200%" }, 500);
    } else {
        $('#booking').addClass('active');
        $('#cart').removeClass('active');
        $('.pop-up-booking').animate( { right:"0" }, 500);
        $('.pop-up-cart').animate( { left:"200%" }, 500);
    }
  });

  $('.pop-up-booking .close').click(function(){
    $('#booking').removeClass('active');
    $('.pop-up-booking').animate( { right:"200%" }, 500);
  });

  $('#zakaz').click(function(){
    $('.pop-ua-zakaz').show(400);
    return false;
  });

  $('.pop-ua-zakaz .close').click(function(){
    $('.pop-ua-zakaz').hide(300);
    return false;
  });

  $('#galstyk').click(function(){
    if($('#galstyk').attr('class') == 'active'){
        return false;
    } else{
        $('#babochka').removeClass('active');
        $('.prodact').animate( { left:"-1024px" }, 500);
        $(this).addClass('active');
        return false;
    }
  });

  $('#babochka').click(function(){
    if($('#babochka').attr('class') == 'active'){
        return false;
    } else{
        $('#galstyk').removeClass('active');
        $('.prodact').animate( { left:"0" }, 500);
        $(this).addClass('active');
        return false;
    }
  });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".menu").css({
                'position' : 'fixed',
                'top' : '0',
                'border-bottom' : '1px solid #eee'
            });
            $('.up').show();
        } else {
            $(".menu").css({
                'position' : 'absolute',
                'top' : '100px',
                'border-bottom' : 'none'
            });
            $('.up').hide();
        }

        if ($(this).scrollTop() > 52) {
            $(".logo-small").css({
                'position' : 'fixed',
                'top' : '0'
            });
            $('.up').show();
        } else {
            $(".logo-small").css({
                'position' : 'absolute',
                'top' : '52px',
            });
            $('.up').hide();
        }
    });


});


$(function(){
   $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 300);
        return false;
   });
});
