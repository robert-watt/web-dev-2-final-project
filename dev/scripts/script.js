// Write your JavaScript here...

$('.toggle').on('click', () => {
  if ($('.menu').hasClass('active')) {
    $('.menu').removeClass('active');
  } else {
    $('.menu').addClass('active');
  }
});
