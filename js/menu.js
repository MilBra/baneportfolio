/*

$(".leviMeni li a").on('click', function(){
    $("a.active").removeClass('active');
    $(this).addClass('active'); 
    e.preventDefault();
});
*/


$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 500, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 500) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('.navscrool').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.leviMeni a.active').removeClass('active');
						$('.leviMeni a').eq(i).addClass('active');
				}
		});
}).scroll();


