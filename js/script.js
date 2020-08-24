//(function($){
    var typed = new Typed("span.txt-rotate",{
        strings: ["I'm Web Developer","I'm Graphic Designer","I'm Artist","I'm Passionately Curious"],
        typeSpeed: 100,
        backSpeed:100,
        fadeOut:false,
        smartBackspace: true,
        loop:true
    });
//})(jQuery);
    


$(document).ready(function(){
    $('.certiprojects-wrapper').isotope({
        filter:'*',
        layoutMode:'masonry'
    });

    $('.certilist-filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $('.certilist-filter a').removeClass('active');
        $(this).addClass('active');
        $('.certiprojects-wrapper').isotope({
            filter:selector
        });
        return false;

    })

    $('.certipopup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery:{
            enabled: true,
            
        }
    });

    $('.artlist-filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $('.artlist-filter a').removeClass('active');
        $(this).addClass('active');
        $('.artprojects-wrapper').isotope({
            filter:selector
        });
        return false;

    })
    $('.popup-artimage').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery:{
            enabled: true,
            
        }
    });


});  