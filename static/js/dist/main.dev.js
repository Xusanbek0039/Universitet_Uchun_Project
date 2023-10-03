"use strict";

;

(function () {
  'use strict';

  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  var mobileMenuOutsideClick = function mobileMenuOutsideClick() {
    $(document).click(function (e) {
      var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }
      }
    });
  };

  var offcanvasMenu = function offcanvasMenu() {
    $('#page').prepend('<div id="fh5co-offcanvas" />');
    $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
    var clone1 = $('.menu-1 > ul').clone();
    $('#fh5co-offcanvas').append(clone1);
    var clone2 = $('.menu-2 > ul').clone();
    $('#fh5co-offcanvas').append(clone2);
    $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#fh5co-offcanvas').find('li').removeClass('has-dropdown'); // Hover dropdown menu on mobile

    $('.offcanvas-has-dropdown').mouseenter(function () {
      var $this = $(this);
      $this.addClass('active').find('ul').slideDown(500, 'easeOutExpo');
    }).mouseleave(function () {
      var $this = $(this);
      $this.removeClass('active').find('ul').slideUp(500, 'easeOutExpo');
    });
    $(window).resize(function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-fh5co-nav-toggle').removeClass('active');
      }
    });
  };

  var burgerMenu = function burgerMenu() {
    $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
      var $this = $(this);

      if ($('body').hasClass('overflow offcanvas')) {
        $('body').removeClass('overflow offcanvas');
      } else {
        $('body').addClass('overflow offcanvas');
      }

      $this.toggleClass('active');
      event.preventDefault();
    });
  };

  var contentWayPoint = function contentWayPoint() {
    var i = 0;
    $('.animate-box').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .animate-box.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');

              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated-fast');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated-fast');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated-fast');
              } else {
                el.addClass('fadeInUp animated-fast');
              }

              el.removeClass('item-animate');
            }, k * 200, 'easeInOutExpo');
          });
        }, 100);
      }
    }, {
      offset: '85%'
    });
  };

  var dropdown = function dropdown() {
    $('.has-dropdown').mouseenter(function () {
      var $this = $(this);
      $this.find('.dropdown').css('display', 'block').addClass('animated-fast fadeInUpMenu');
    }).mouseleave(function () {
      var $this = $(this);
      $this.find('.dropdown').css('display', 'none').removeClass('animated-fast fadeInUpMenu');
    });
  };

  var goToTop = function goToTop() {
    $('.js-gotop').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');
      return false;
    });
    $(window).scroll(function () {
      var $win = $(window);

      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
    });
  }; // Loading page


  var loaderPage = function loaderPage() {
    $(".fh5co-loader").fadeOut("slow");
  };

  var counter = function counter() {
    $('.js-counter').countTo({
      formatter: function formatter(value, options) {
        return value.toFixed(options.decimals);
      }
    });
  };

  var counterWayPoint = function counterWayPoint() {
    if ($('#fh5co-counter').length > 0) {
      $('#fh5co-counter').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          setTimeout(counter, 400);
          $(this.element).addClass('animated');
        }
      }, {
        offset: '90%'
      });
    }
  };

  var sliderMain = function sliderMain() {
    $('#fh5co-hero .flexslider').flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function start() {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      },
      before: function before() {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      }
    });
  };

  var bibleVerseCarousel = function bibleVerseCarousel() {
    var owl = $('.owl-carousel-fullwidth');
    owl.owlCarousel({
      animateOut: 'fadeOut',
      autoplay: true,
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true
    });
  };

  $(function () {
    mobileMenuOutsideClick();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
    bibleVerseCarousel();
  });
})();