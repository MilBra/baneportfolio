function poruka() {
	alert ("I work on my contact form validation - please send me massage on: branislav.milosevic.91@gmail.com");
}


// code for menu navigation

$(document).ready(function(){
	$("#mobile_Left_Menu").click(function(){
	  $(".leviMeni").fadeToggle("fast");
	});
});

$(document).ready(function(){
	$("#mobile_Right_Menu").click(function(){
	  $(".desniMeni").fadeToggle("fast");
	});
});


