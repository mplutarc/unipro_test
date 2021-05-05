$('.info').click(function() {
	if($(this).hasClass('active') === false)
		$(this).addClass('active');
	else
		$(this).removeClass('active');
});
$('.menu').click(function() {
	if($(this).hasClass('active') === false)
		$(this).addClass('active');
	else
		$(this).removeClass('active');
});
