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
    dots: true,
  });

  $('.brends-slider__list').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.user-nav__link--cart').on('click', function () {
    $('.header__overlay').toggleClass('is-open');
    $('.basket__close-btn').addClass('is-open');
    $('body').toggleClass('lock');
  })

  $('.basket__close-btn').on('click', function () {
    $('.basket__close-btn').removeClass('is-open');
    $('.header__overlay').removeClass('is-open');
    $('body').removeClass('lock');
  })

  $('.header-top__burger-btn').on('click', function () {
    $('.header-top__overlay').toggleClass('is-open');
    $('.burger-menu__close-btn').addClass('is-open');
    $('body').toggleClass('lock');
  })

  $('.burger-menu__close-btn').on('click', function () {
    $('.header-top__overlay').removeClass('is-open');
    $('.burger-menu__close-btn').removeClass('is-open');
    $('body').removeClass('lock');
  })

  $('.user-nav__link--search').on('click', function () {
    $('.form').toggleClass('active');
    $('.form__btn').toggleClass('active');
  })

  $('.form__btn').on('click', function () {
    $('.form').removeClass('active');
    $('.form__btn').removeClass('active');
  })

  var inp = document.querySelector('.form__input');
  window.addEventListener('resize', changePlaceholder);
  changePlaceholder.call(window);

  function changePlaceholder() {
    inp.setAttribute('placeholder', this.innerWidth >= 992 ? 'Найти в магазине ...' : 'Я ищу...');
  }
  

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});