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

    $('.artprojects-wrapper').isotope({
        filter:'*',
        layoutMode:'masonry'
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

    $("#touch").click(function () {
        $('#touchmodal').modal('toggle')
    });


    
   const scriptURL = 'https://script.google.com/macros/s/AKfycbzzGECUXaZMCXLffNJTTj8YO_7jPUn6L2DFzHSMLHG6HdbMmkXcP6Wz/exec'
   const form = document.forms['google-sheet']
   var name = document.getElementById('name');
   form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => alert("Thanks for Contacting me.."))
       .catch(error => console.error('Error!', error.message))
   })
 



});  