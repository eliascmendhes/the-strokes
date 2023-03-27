$(window).on('scroll', function () {
  var scrollTop = $(window).scrollTop();
  $('.fade-in').each(function () {
    var elementOffsetTop = $(this).offset().top;
    if (elementOffsetTop - scrollTop < $(window).height() / 1.3) {
      $(this).addClass('visible');
    } else {
      $(this).removeClass('visible');
    }
  });
});
