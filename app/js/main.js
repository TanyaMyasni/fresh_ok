$(function () {
  $('.catalog__btn').on('click', function () {
    $('.catalog__menu').slideToggle();
    $('.catalog__btn').toggleClass('catalog__btn--active');
    $('.header__catalog').toggleClass('header__catalog::after--active');
  });

  $('.offers__slider').slick({
    prevArrow: $('.offers__slider-btn--prev'),
    nextArrow: $('.offers__slider-btn--next'),
    fade: true,
    // autoplay: true
  });

  var mixer = mixitup('.top-products__cards');
  
});



