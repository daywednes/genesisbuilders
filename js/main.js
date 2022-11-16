

$(document).ready(function(){
    var containerHeight = $('.header').height();

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        // sticky header 
        
        if(wScroll >= ($('.section-team').offset().top - 60)){
            $('.nav').addClass('nav__sticky');
        } else {
            $('.nav').removeClass('nav__sticky');
        }
    });


    //menu modal
    $('.menu').click(function(){
        $('.nav__menu').toggleClass('visible');
        console.log('visible toggle')
    });
    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".nav__menu,.menu").length) {
          $("body").find(".nav__menu").removeClass("visible");
        }
    });
    bootstrap.Modal.getOrCreateInstance(document.getElementById('NotificationModal')).show();
});