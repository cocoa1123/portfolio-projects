
/* ******* Header ******* */

$(document).ready(function(){
	$("#header-wrap").css('backgroundImage', 'url("images/pano_1.jpg")');
});

/* ******* Navigation ******* */
	$(document).ready(function(){
		$(".nav").mouseenter(function(){
			$(this).css({"border-bottom-style":"solid", "border-color":"#3E96D1"});	
		});
		$(".nav").mouseleave(function(){
			$(this).css("border", "none");
		});
});


/* ******* Projects ******* */

function gitNewTab() {
	window.open("https://github.com/cocoa1123");
}

/* ******* Gallery ******* */

function photo1 (){
	window.open("http://localhost/IMG_20140914-full_size.jpg");
}

/* ******* Social Icons ******* */

function socialFb() {
	window.open("https://www.facebook.com/Krissy135", '_blank');
}
function socialGit() {
	window.open ("https://github.com/cocoa1123", '_blank');
}
function socialLinkedIn() {
	window.open ("https://www.linkedin.com/profile/view?id=386163268&trk=nav_responsive_tab_profile_pic", '_blank');
}
function socialG() {
	window.open ("https://plus.google.com/u/0/102626922564967432885/posts");
}

/* ******* Date - Figure ****** */

function displayDate () {
	var d = Date("September 13, 2014");
	document.getElementById("date").innerHTML = d;
}

	
	
	
	
	
	
	
	
	
	
	
	
	