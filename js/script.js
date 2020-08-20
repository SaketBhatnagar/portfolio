//(function($){
    var typed = new Typed("span.txt-rotate",{
        strings: ["I'm Artist","I'm Web Developer","I'm Graphic Designer","I'm Passionately Curious"],
        typeSpeed: 100,
        backSpeed:100,
        fadeOut:false,
        smartBackspace: true,
        loop:true
    });
//})(jQuery);
    


$(document).ready(function(){
    $('.projects-wrapper').isotope({
        filter:'*',
        layoutMode:'masonry'
    });

    $('.list-filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter:selector
        });
        return false;

    })

    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery:{
            enabled: true,
            
        }
    });


});  