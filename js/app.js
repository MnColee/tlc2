//navbar shrink funtion
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 40) {
      $('.navbar').removeClass('scroll_navbar')
      $('.logo img').removeClass('scroll_logo')
      $('.nav-item a').removeClass('scroll_nav-link')
    } else {
      $('.navbar').addClass('scroll_navbar')
      $('.logo img').addClass('scroll_logo')
      $('.nav-item a').addClass('scroll_nav-link')
    }
  })
})

//carousel funtion
$(function () {
  $('.carousel').carousel({
    interval: 5000,
    pause: false,
  })
})
