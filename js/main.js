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



// counter
$(function() {
  var time =3, ch=1;
  $(window).scroll(function(){
    $('#line').each(function(){
      var
      counter =$(this).offset().top,
      topWindow =$(window).scrollTop();
      if (counter<topWindow+200) {
        if (ch<2) {
        $('.experience-box__project').addClass('visible');
        $({blurRadius: 3}).animate({blurRadius: 0},{
    duration: 2000,
    easing: 'swing',
    step: function() {
      $('.experience-box__project').css({
        "filter": "blur("+this.blurRadius+"px)"
      });
    }
  });
  $('.experience-box__project').each(function(){
    var
    i=1,
    number=$(this).data('nmbr'),
    step = 10*time/number,
    that=$(this),
    int=setInterval(function(){
      if (i<=number) {
        that.html(i);
      }
      else{
        ch=ch+2;
        clearInterval(int);
      }
      i++;
    },step);
  });
  }
  }
  });
  });
  });

  // Animate blocks 
  (window.sr = ScrollReveal()),
    sr.reveal(".animate-bottom", { origin: "bottom", duration: 1e3, distance: "10em", delay: 5 });


// portfolio gallery links
// link two
$(".portfolio-nav__link--two").on("click", function () {
    $(".portfolio-nav__link--one").removeClass("portfolio-nav__link--active");
    $(".portfolio-nav__link--three").removeClass("portfolio-nav__link--active");
    $(".portfolio-nav__link--four").removeClass("portfolio-nav__link--active");
    $(".portfolio-nav__link--two").addClass("portfolio-nav__link--active");
    $(".portfolio-work__inner--two").toggleClass("portfolio-work__inner--viseble");
    $(".portfolio-work__inner--one").addClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--two").removeClass("portfolio-work__inner--disabled");

    

  $(".portfolio-work__inner--one").addClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--three").addClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--four").addClass("portfolio-work__inner--disabled");

    
});

// link three
$(".portfolio-nav__link--three").on("click", function () {
  $(".portfolio-nav__link--one").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--two").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--four").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--two").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--three").addClass("portfolio-nav__link--active");
  $(".portfolio-work__inner--three").addClass("portfolio-work__inner--viseble");
  $(".portfolio-work__inner--two").toggleClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--three").removeClass("portfolio-work__inner--disabled");



  $(".portfolio-work__inner--one").addClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--two").addClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--four").addClass("portfolio-work__inner--disabled");



});

// link four 
$(".portfolio-nav__link--four").on("click", function () {
  $(".portfolio-nav__link--one").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--three").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--two").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--three").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--four").addClass("portfolio-nav__link--active");
  $(".portfolio-work__inner--four").addClass("portfolio-work__inner--viseble");
  $(".portfolio-work__inner--three").toggleClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--four").removeClass("portfolio-work__inner--disabled");


  $(".portfolio-work__inner--one").addClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--two").addClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--three").addClass("portfolio-work__inner--disabled");



});

// link one 
$(".portfolio-nav__link--one").on("click", function () {
  $(".portfolio-nav__link--four").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--three").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--two").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--four").removeClass("portfolio-nav__link--active");
  $(".portfolio-nav__link--one").addClass("portfolio-nav__link--active");
  $(".portfolio-work__inner--one").removeClass("portfolio-work__inner--disabled");
  // $(".portfolio-work__inner--one").toggleClass("portfolio-work__inner--viseble");
  $(".portfolio-work__inner--four").toggleClass("portfolio-work__inner--disabled");


  $(".portfolio-work__inner--two").removeClass("portfolio-work__inner--viseble");
  $(".portfolio-work__inner--three").addClass("portfolio-work__inner--disabled");
  $(".portfolio-work__inner--four").addClass("portfolio-work__inner--disabled");

});

// slick slider 
$('.clients-wrapper').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  dots: true,
  autoplaySpeed: 4000,
  prevArrow:'<button class="slick-btn slick-prev"><img src="images/svg/slider-arrow-left.svg" alt="prev"></button>',
  nextArrow:'<button class="slick-btn slick-next"><img src="images/svg/slider-arrow-right.svg" alt="next"></button>',
  responsive: [
    {
      breakpoint: 976,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]

});


});


// Js transformation blocks 

// transform logo
const cards = document.querySelectorAll('.about');


for (let i = 0; i < cards.length; i++){
  const card = cards[i];
  card.addEventListener("mouseover", startRotate);
}

function startRotate(event) {
  const cardItem = this.querySelector('.about-photo');
  const halfheight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfheight) / 30 + 'deg) rotateY(' + (event.offsetX -
  halfheight) / 30 + 'deg)';
}


// transform section info 
// 1
const cardsOne = document.querySelectorAll('.info');

for (let i = 0; i < cardsOne.length; i++){
  const cardOne = cardsOne[i];
  cardOne.addEventListener("mouseover", startRotateOne);
  
}

function startRotateOne(event) {
  const cardItem = this.querySelector('.info-one');
  const halfheight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfheight) / 30 + 'deg) rotateY(' + (event.offsetX -
  halfheight) / 90 + 'deg)';
}

// 2
const cardsTwo = document.querySelectorAll('.info');

for (let i = 0; i < cardsTwo.length; i++){
  const cardTwo = cardsTwo[i];
  cardTwo.addEventListener("mouseover", startRotateTwo);
  
}

function startRotateTwo(event) {
  const cardItem = this.querySelector('.info-two');
  const halfheight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfheight) / 80 + 'deg) rotateY(' + (event.offsetX -
  halfheight) / 90 + 'deg)';
}

// 3
const cardsThree = document.querySelectorAll('.info');

for (let i = 0; i < cardsThree.length; i++){
  const cardThree = cardsThree[i];
  cardThree.addEventListener("mouseover", startRotateThree);
  
}

function startRotateThree(event) {
  const cardItem = this.querySelector('.info-three');
  const halfheight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfheight) / 120 + 'deg) rotateY(' + (event.offsetX -
  halfheight) / 190 + 'deg)';
}


// 4
const cardsFour = document.querySelectorAll('.info');

for (let i = 0; i < cardsFour.length; i++){
  const cardFour = cardsFour[i];
  cardFour.addEventListener("mouseover", startRotateFour);
  
}

function startRotateFour(event) {
  const cardItem = this.querySelector('.info-four');
  const halfheight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfheight) / 100 + 'deg) rotateY(' + (event.offsetX -
  halfheight) / 100 + 'deg)';
}


// transform section why 
// 1
const cardsBlockOne = document.querySelectorAll('.why');

for (let i = 0; i < cardsBlockOne.length; i++){
  const cardBlockOne = cardsBlockOne[i];
  cardBlockOne.addEventListener("mouseover", startRotateBlockOne);
  
}

function startRotateBlockOne(event) {
  const cardItem = this.querySelector('.why-one');
  const halfheight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfheight) / 25 + 'deg) rotateY(' + (event.offsetX -
  halfheight) / 45 + 'deg)';
}

// 2
const cardsBlockTwo = document.querySelectorAll('.why');

for (let i = 0; i < cardsBlockTwo.length; i++){
  const cardBlockTwo = cardsBlockTwo[i];
  cardBlockTwo.addEventListener("mouseover", startRotateBlockTwo);
  
}

function startRotateBlockTwo(event) {
  const cardItem = this.querySelector('.why-two');
  const halfheight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfheight) / 25 + 'deg) rotateY(' + (event.offsetX -
  halfheight) / 45 + 'deg)';
}

// 3
const cardsBlockThree = document.querySelectorAll('.why');

for (let i = 0; i < cardsBlockThree.length; i++){
  const cardBlockThree = cardsBlockThree[i];
  cardBlockThree.addEventListener("mouseover", startRotateBlockThree);
  
}

function startRotateBlockThree(event) {
  const cardItem = this.querySelector('.why-three');
  const halfheight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfheight) / 25 + 'deg) rotateY(' + (event.offsetX -
  halfheight) / 45 + 'deg)';
}