$(document).ready(function() {



// End Nav

//Mobile Menu Toggle Button 

$(".toggle-mnu").click(function() {
	$(".toggle-mnu").toggleClass("on");
	$(".modal-overlay").toggleClass("active");
	$(".modal").toggleClass("is-opening");
	$('.topline-wrap').toggleClass('t-sticky-modal');
	$(".modal").show(500);
	return false;
});





// End

// Replace all SVG images with inline SVG

$('img.svg').each(function(){
	var $img = $(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	$.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = $(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
		if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		}

		// Replace image with new SVG
		$img.replaceWith($svg);

	}, 'xml');

});

//Replace SVG END

/*
if ($(window).width() < 600) {
   alert('Less than 600');
   //$(".interest").css(
    //{'background-color': 'rgba(0, 0, 0, 0.820)', 'box-shadow': '0px 0px 20px #000000'}
//);
}
else {
   alert('More than 1400');
}
*/

});