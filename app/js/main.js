$(function () {
  $('.header__select-button').on('click', function () {
    $('.header__select-menu').toggleClass('.header__select-menu--active');
    $('.header__select-button').toggleClass('.header__select-button--active');
    $('.header__content-catalog').toggleClass('.header__content-catalog--active');
  });

  $('.offers__slider').slick({
    prevArrow: $('.offers__btn--prev'),
    nextArrow: $('.offers__btn--next'),
    fade: true,
    // autoplay: true
  });

  var mixer = mixitup('.top-products__cards');
  
});



