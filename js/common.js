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


//Contact form

$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  
$('textarea').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('textarea').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  


// End




});