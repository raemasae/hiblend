$(document).ready(function(){
	event.preventDefault();
	$('.mobile').click(function(){
		$(this).toggleClass('open', 2000,'easeOutSine');
	});
});

// SHOW/HIDE
var $ = jQuery.noConflict();
$(document).ready(function(){
  $('#menubowls, #menufood').hide();
		$('#a').click(function(){
		$('#menudrinks').show();
		$('#menubowls, #menufood').hide();
		});

		$('#b').click(function(){
		$('#menubowls').show();
		$('#menudrinks, #menufood').hide();
		});

		$('#c').click(function(){
		$('#menufood').show();
		$('#menudrinks, #menubowls').hide();
    });

});

$(".location-nav").on('click','li',function(){
    // remove classname 'active' from all li who already has classname 'active'
    $(".location-nav li.active").removeClass("active");
    // adding classname 'active' to current click li
    $(this).addClass("active");
});

$(".menu-subnav").on('click','li',function(){
    // remove classname 'active' from all li who already has classname 'active'
    $(".menu-subnav li.selected").removeClass("selected");
    // adding classname 'active' to current click li
    $(this).addClass("selected");
});

var $ = jQuery.noConflict();
$(document).ready(function(){
  $('.wahiawa-menu').hide();
		$('.wahiawa').click(function(){
		$(".menu-subnav li").addClass("wahiawamenu");
		$('.wahiawa-menu').show();
		$('.keeaumoku-menu').hide();
		});

		$('.keeaumoku').click(function(){
		$(".menu-subnav li").removeClass("wahiawamenu");
		$('.keeaumoku-menu').show();
		$('.wahiawa-menu').hide();
		});

});

$('.wahiawa').click(function() {
    $('.drinkscol').css({
        'width': 'calc(50% - 30px)'
    });
});

$('.keeaumoku').click(function() {
    $('.drinkscol').css({
        'width': 'calc(33% - 30px)'
    });
});

$(document).ready(function(){
  $('.main-nav a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });
});

$('.loc-btn').click(() => {
    $('html, body').animate({
        scrollTop: $('.location-nav').offset().top-100
    }, 200);
});
