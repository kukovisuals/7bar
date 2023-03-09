

$('.st-content').scroll(function(){
  if ($('.st-content').scrollTop() >= 80) {
      $('.site-header').addClass('sticky');
      $('.logo').addClass('logo-min');
      $('.menu-icon').addClass('menu-icon-min');
      $('.hamburger-inner').addClass('hamburger-inner-black');
  }
  else {
      $('.site-header').removeClass('sticky');
      $('.logo').removeClass('logo-min');
      $('.menu-icon').removeClass('menu-icon-min');
      $('.hamburger-inner').removeClass('hamburger-inner-black');
  }
});
