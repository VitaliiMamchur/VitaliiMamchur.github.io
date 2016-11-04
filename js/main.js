//dropdown languages
$(document).ready(function(){
  $('div.dropdown>button').click(function(){
    $('ul.dropdown-menu').toggle();
	})
  })

//slight scroller
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
});

var top_edge = 1000;
  $(document).ready(function() {
    $(window).scroll(function (){
      if ($(this).scrollTop() > top_edge) $('div.scrollup>button').fadeIn();
      else $('div.scrollup>button').fadeOut();
    });
    $('div.scrollup>button').click(function(){
      $('body, html').animate({
        scrollTop: 0
      }, 1000);
    });
  });