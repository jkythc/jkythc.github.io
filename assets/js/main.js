$(function () {
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');


	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});


	$body.addClass('is-loading');

	$window.on('load', function () {
		$body.removeClass('is-loading');
	});

	$("#year").html(new Date().getFullYear());
});