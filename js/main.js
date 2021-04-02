$(document).ready(function() {
    
$(".nav__icon").on("click", function () {
    $(".header-wrapper").toggleClass("header-modal"),
        $(".header-logo__text").toggleClass("menu-hidden"),
        $(".header-menu__list").toggleClass("menu-visible"),
        $(".header-links").toggleClass("links-visible"),

        $(".header-inner").toggleClass("header-inner--block"),
        $(".header-menu__list-link").toggleClass("menu-list__link"),
        $(".nav__icon").toggleClass("open"),
        $(".header-menu__wrapper").toggleClass("header-menu__wrapper--active"),
        $("html").toggleClass("modal--overflow");
});


// $(".portfolio-nav__link--two").on("click", function () {
//     $(".portfolio-nav__link--one").removeClass("portfolio-nav__link--active")
//     $(".portfolio-nav__link--two").toggleClass("portfolio-nav__link--active")
//     $(".portfolio-work__inner--two").toggleClass("portfolio-work__inner--active")
//     $(".portfolio-work__inner--one").removeClass("portfolio-work__inner--active");

// })

// $(".portfolio-nav__link--three").on("click", function () {
//   // $(".portfolio-nav__link--one").removeClass("portfolio-nav__link--active")
//   $(".portfolio-nav__link--three").toggleClass("portfolio-nav__link--active"),
//   $(".portfolio-work__inner--three").toggleClass("portfolio-work__inner--active");
//   // $(".portfolio-work__inner--one").removeClass("portfolio-nav__link--active")

// })

// $(".portfolio-nav__link--four").on("click", function () {
//   // $(".portfolio-nav__link--one").removeClass("portfolio-nav__link--active")
//   $(".portfolio-nav__link--four").toggleClass("portfolio-nav__link--active"),
//   $(".portfolio-work__inner--four").toggleClass("portfolio-work__inner--active");
//   // $(".portfolio-work__inner--one").removeClass("portfolio-nav__link--active")

// })

// $(".portfolio-nav__link--two").on("click", function () {
//   $(".portfolio-nav__link--one").removeClass("portfolio-nav__link--active")
//   $(".portfolio-nav__link--two").toggleClass("portfolio-nav__link--active")
//   $(".portfolio-work__inner--two").toggleClass("portfolio-nav__link--active")
//   $(".portfolio-work__inner--one").removeClass("portfolio-nav__link--active")

// })

$('.clients-wrapper').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  dots: true,
  autoplaySpeed: 4000,
  prevArrow:'<button class="slick-btn slick-prev"><img src="images/svg/slider-arrow-left.svg" alt="prev"></button>',
  nextArrow:'<button class="slick-btn slick-next"><img src="images/svg/slider-arrow-right.svg" alt="next"></button>',
});


});

