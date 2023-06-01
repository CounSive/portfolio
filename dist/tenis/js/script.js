$(document).ready(function(){
    $('.trener__corousel').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 993,
              settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
      });

      $('.price__services__corousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                infinite: true,
                dots: true
              }
            }
            
          ]
        
      });

      const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.promo__menu'),
        closeElem = document.querySelector('.promo__menu__close');


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    $('ul li a').click(function() {
      if ( $('.promo__menu').hasClass('active')) {
       $('.promo__menu').removeClass('active');
      }
   }) 
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
})