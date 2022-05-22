// import Swiper, {
//   Navigation,
//   Pagination
// } from 'swiper';


// const {
//   default: Swiper
// } = require("swiper");

$(function () {
  const $scaleInput = $('.product-filter__scale-input');
  const $inputMin = $('.product-filter__min-value');
  const $inputMax = $('.product-filter__max-value');
  const min = 50;
  const max = 1200;
  let instance;
  let from = 0;
  let to = 0

  $scaleInput.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1100,
    onStart: updateInputs,
    onChange: updateInputs,
  });

  instance = $scaleInput.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputMin.prop("value", from);
    $inputMax.prop("value", to);
  }

  $inputMin.on("input", function () {
    let val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputMax.on("input", function () {
    let val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  $('.catalog-menu__btn').on('click', function () {
    $('.catalog-menu__list').slideToggle();
    $('.catalog-menu__btn').toggleClass('catalog-menu__btn--active');
    $('.header__catalog').toggleClass('header__catalog::after--active');
  });

  $('.user-nav__link--cart').on('click', function () {
    $('.header__overlay').addClass('is-open');
    $('body').toggleClass('lock');
  })

  $('.basket__close-btn').on('click', function () {
    $('.header__overlay').removeClass('is-open');
    $('body').removeClass('lock');
  })

  $('.header-top__burger-btn').on('click', function () {
    $('.header-top__overlay').addClass('is-open');
    $('body').toggleClass('lock');
  })

  $('.burger-menu__close-btn').on('click', function () {
    $('.header-top__overlay').removeClass('is-open');
    $('body').removeClass('lock');
  })

  $('.user-nav__link--search').on('click', function () {
    $('.product-search').toggleClass('active');
    $('.product-search__btn').toggleClass('active');
  })

  $('.product-search__btn').on('click', function () {
    $('.product-search').removeClass('active');
    $('.product-search__btn').removeClass('active');
  })

  $('.product-filter__btn').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.product-filter__list').slideToggle();
  })

  $('.catalog-content__btn').on('click', function () {
    $('.catalog-content__btn').removeClass('catalog-content__btn--active');
    $(this).addClass('catalog-content__btn--active')
  });

  $('.catalog-content__btn--small-cards').on('click', function () {
    $('.catalog-content__items').addClass('catalog-content__items--list')
  })

  $('.catalog-content__btn--big-cards').on('click', function () {
    $('.catalog-content__items').removeClass('catalog-content__items--list')
  })

  $('.catalog__close-btn').on('click', function () {
    $('.catalog__filters').removeClass('is-open');
    $('body').toggleClass('lock');
  })

  $('.catalog-content__select').styler();


  $('.offers__slider').slick({
    prevArrow: $('.offers__slider-btn--prev'),
    nextArrow: $('.offers__slider-btn--next'),
    fade: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true,
      }
    }],
  });

  $('.brends-slider__list').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [{
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


  var inp = document.querySelector('.product-search__input');
  window.addEventListener('resize', changePlaceholder);
  changePlaceholder.call(window);

  function changePlaceholder() {
    inp.setAttribute('placeholder', this.innerWidth >= 992 ? 'Найти в магазине ...' : 'Я ищу...');
  }

  $('.calculator__minus-btn').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);
    const $input = $this.closest('div').find('input');
    let value = parseInt($input.val());

    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
    }

    $input.val(value);

  });

  $('.calculator__plus-btn').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);
    const $input = $this.closest('div').find('input');
    let value = parseInt($input.val());

    if (value < 99) {
      value = value + 1;
    } else {
      value = 99;
    }

    $input.val(value);
  });


  $('.stars').rateYo({
    starWidth: "16px",
    spacing: "6px",
    "starSvg": '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="url(#clip0_1922_514)">' + '<path d="M0.0229731 6.16426C0.0780973 5.99454 0.224753 5.87085 0.401315 5.84523L5.36139 5.12445L7.57966 0.629872C7.6586 0.469872 7.82157 0.368591 7.99997 0.368591C8.17841 0.368591 8.34135 0.469872 8.42032 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.4369 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141566 6.64472C0.0138168 6.52022 -0.0322151 6.33394 0.0229731 6.16426Z"/>' + '</g>' + '</svg>',
    normalFill: "#C1C1C130",
    ratedFill: "#FFB800",
    readOnly: true,
  });

  $('.product__link').on('click', function () {
    $('.product-overlay').addClass('is-open');
    $('body').toggleClass('lock');
  })

  $('.product-overlay__close-btn').on('click', function () {
    $('.product-overlay').removeClass('is-open');
    $('body').toggleClass('lock');
  })

  new Swiper('.product__slider', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    spaceBetween: 105,
    loop: true,
  }, );

  new Swiper('.product-overlay__slider', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  }, );

  $('.tabs__top-link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__top-link').removeClass('tabs__top-link--active');
    $(this).addClass('tabs__top-link--active');

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  })



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