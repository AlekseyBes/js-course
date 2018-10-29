$(document).ready(function () {
  function openModal() {
    $('.overlay').fadeIn('slow');
    $('.modal').slideDown()('slow');
  }
  $('.main_btn').on('click', function () {
    openModal();
  });

  $('.main_btna').on('click', function () {
    openModal();
  });

  $('.main_nav').find('li:nth-child(2)').on('click', function () {
    openModal();
  });
  console.log($('.main_nav'));
  $('.close').on('click', function () {
    $('.overlay').fadeOut('slow');
    $('.modal').slideUp()('slow');
  });
});
