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

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  // var mixer = mixitup('.top-products__cards');

});