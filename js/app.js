//navbar shrink funtion
$(function () {
    $(window).scroll(function (){
        if ($(window).scrollTop() <= 40) {
            $('.navbar').removeClass('scroll_navbar')
            $('.logo img').removeClass('scroll_logo')
            }else{
                $('.navbar').addClass('scroll_navbar')
                $('.logo img').addClass('scroll_logo')
            }
        })
    })

//carousel funtion
$('.carousel').carousel();
