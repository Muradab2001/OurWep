$(() => {
  let $mehsulSlider = $('.mehsulSlider');
  let $mehsulDots = $('.mehsulDots');
  let $mainCarousel = $('.main-carousel');
  let $kompaniyaSlider = $('.slider-kompaniya .owl-carousel');

  $kompaniyaSlider?.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    // autoplay: true,
    autoplayTimeout: 2000,
    navSpeed: 500,
    autoplaySpeed: 500,
    dots: true,
    nav: true,
    navText: [
      '<img src="/assets/slide-left-arrow.svg" />',
      '<img src="/assets/slide-right-arrow.svg" />',
    ],
  });
  $kompaniyaSlider?.find('.owl-nav').removeClass('disabled');
  $kompaniyaSlider?.on('changed.owl.carousel', function () {
    $(this).find('.owl-nav').removeClass('disabled');
  });
  $(document).on('click', '.slider-kompaniya .owl-item > div', function () {
    var $speed = 300;
    let position = $(this).parent().index();
    $kompaniyaSlider?.trigger('to.owl.carousel', [position, $speed]);
  });
  $mainCarousel?.owlCarousel({
    items: 1,
    nav: false,
    // autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    rewind: true,
  });
  $mainCarousel?.on('changed.owl.carousel', () => owlDotsChange($mainCarousel));
  owlDotsChange($mainCarousel);
  carouselInit();
  $('.mehsulDots .owl-item.active')?.eq(3)?.removeClass('active');
  mehsulDotsOpacity();
  $mehsulSlider?.on('translated.owl.carousel', (e) => {
    $mehsulDots.trigger('to.owl.carousel', [e.item.index, 300, true]);
    mehsulDotsOpacity();
  });

  $mehsulDots?.on('translated.owl.carousel', (e) => {
    $mehsulSlider.trigger('to.owl.carousel', [e.item.index, 300, true]);
    mehsulDotsOpacity();
  });

  $(window).on('resize', carouselInit);
  function owlDotsChange(container) {
    let $owlDots = container?.find('.owl-dot');
    $owlDots?.each((_, item) => {
      let svg = $(item).hasClass('active') ? 'yellowRomb' : 'strokeYellowRomb';
      $(item).html(
        `<svg width='14' height='14' viewBox='0 0 14 14'><use xlink:href='/assets/icons.svg#${svg}'></use></svg>`
      );
    });
  }
  function mehsulDotsOpacity() {
    $('.mehsulDots .owl-item.active').eq(3)?.removeClass('active');
    let lastActive = $('.mehsulDots .owl-item.active').eq(-1);
    $('.mehsulDots .opak').removeClass('opak');
    lastActive.addClass('opak');
  }
  function mehsulDotsClick() {
    let mehsulDots = $('.mehsulDots .owl-item');
    mehsulDots.each((i, item) => {
      $(item).click(() =>
        $mehsulSlider.trigger('to.owl.carousel', [i, 300, true])
      );
    });
  }
  function carouselInit() {
    $mehsulSlider?.trigger('destroy.owl.carousel');
    let width = $(window).width();
    $mehsulSlider?.owlCarousel({
      // loop: true,
      margin: 10,
      nav: false,
      items: 1,
      autoplayTimeout: 3000,
      // autoplay: true,
      responsiveClass: true,
      dots: width < 768,
    });
    $mehsulDots?.owlCarousel({
      // loop: true,
      margin: 10,
      nav: false,
      items: 3,
      autoplayTimeout: 3000,
      // autoplay: true,
    });
    if (width < 768) {
      $mehsulDots?.trigger('destroy.owl.carousel');
      $mehsulSlider?.trigger('refresh.owl.carousel');
      owlDotsChange($mehsulSlider);
      $mehsulSlider?.on('changed.owl.carousel', () => {
        owlDotsChange($mehsulSlider);
      });
    }
  }
  mehsulDotsClick();
});
