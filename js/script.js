$(function () {
  // On Init
  $(window).on('load', () => {
    var preloaderInterval = setInterval(() => {
      $('.preloader').fadeOut()

      // Clr Interval
      clearInterval(preloaderInterval)
    }, 2000)
  })

  //Banner Water Effect
  $('.slider-item').ripples({
    dropRadius: 60,
    perturbance: 0.02,
  })

  //Banner Slider
  $('.banner-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    fade: true,
  })

  // Navbar scroll effect
  var navbar = $('#navbar')

  $(window).scroll(() => {
    var scrollTopPosition = $(this).scrollTop()

    if (scrollTopPosition > 200) {
      navbar.addClass('navbarActive')
    } else if (scrollTopPosition <= 0) {
      navbar.removeClass('navbarActive')
    }
  })
  // Popup button scroll effect
  var popup = $('.contact-popup-button')

  $(window).scroll(() => {
    var scrollTopPosition = $(this).scrollTop()

    if (scrollTopPosition > 700) {
      popup.css('transform', 'scale(1)')
    } else if (scrollTopPosition <= 100) {
      popup.css('transform', 'scale(0)')
    }
  })

  //Contact-Popup
  $('.close').click(() => {
    $('.contact-popup').fadeOut()
  })

  //Contact-Popup-button
  $('.contact-popup-button').click(() => {
    $('.contact-popup').fadeIn()
  })
})
