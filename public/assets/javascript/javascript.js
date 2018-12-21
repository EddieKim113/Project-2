$(document).ready(function(event){

	$(".drop-menu").click(function() {
		$(".dd-items").toggle();
	});

	$(".about-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#about").offset().top},
	        'slow');
	});

	$(".team-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#team").offset().top},
	        'slow');
	});

	$(".experience-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#experience").offset().top},
	        'slow');
	});

	$(".service-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#service").offset().top},
	        'slow');
	});

	$(".contact-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#contact").offset().top},
	        'slow');
	});

	ScrollReveal().reveal('.content', {delay: 500});

	$(function() {
	    $('#exp-type').change(function(){
	        if($('#exp-type').val() == 1) {
	            $('.esop-exp').show(); 
	            $('.mna-exp').hide();
	            $('.cap-exp').hide();
	            $('.con-exp').hide();
	        } else if ($('#exp-type').val()==2) {
	          	$('.esop-exp').hide(); 
	            $('.mna-exp').show();
	            $('.cap-exp').hide(); 
	            $('.con-exp').hide();
	        } else if ($('#exp-type').val()==3) {
	        	$('.esop-exp').hide(); 
	            $('.mna-exp').hide();
	            $('.cap-exp').show(); 
	            $('.con-exp').hide();
	        } else {
	        	$('.esop-exp').hide(); 
	            $('.mna-exp').hide();
	            $('.cap-exp').hide(); 
	            $('.con-exp').show();
	        }
	    });
	});

}); 