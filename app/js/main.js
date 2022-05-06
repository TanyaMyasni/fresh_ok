$(function () {
  $('.product-filter__scale-input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.product-filter__min-value').text(data.from);
      $('.product-filter__max-value').text(data.to);
    },
    onChange: function (data) {
      $('.product-filter__min-value').text(data.from);
      $('.product-filter__max-value').text(data.to);
    },
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
  })

  $('.product-filter__btn--categories').on('click', function () {
    $('.product-filter__list--categories').slideToggle();
  });

  $('.product-filter__btn--offers').on('click', function () {
    $('.product-filter__list--offers').slideToggle();
  });

  $('.product-filter__btn--brends').on('click', function () {
    $('.product-filter__list--brends').slideToggle();
  });

  $('.product-filter__btn--price').on('click', function () {
    $('.product-filter__list--price').slideToggle();
  });

  $('.catalog-content__btn').on('click', function () {
    $('.catalog-content__btn').removeClass('catalog-content__btn--active');
    $(this).addClass('catalog-content__btn--active')
  });

  $('.catalog-content__btn--small-cards').on('click', function () {
    $('.catalog-content__items').addClass('list')
  })

  $('.catalog-content__btn--big-cards').on('click', function () {
    $('.catalog-content__items').removeClass('list')
  })

  $('.catalog-content__btn--filter').on('click', function () {
    $('.catalog-overlay').addClass('is-open');
    $('body').toggleClass('lock');
  })

  $('.catalog-overlay__close-btn').on('click', function () {
    $('.catalog-overlay').removeClass('is-open');
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