// Toggle on scroll
$(document).on('scroll', function() {
    if($(window).scrollTop() <= 60)
        $("#navbar").removeClass('toggle-on-scroll');
    else
        $("#navbar").addClass('toggle-on-scroll');
});

//Toggle on iten click
$('.nav-mobile > li > a').on('click', function() {
    $("#navbar").addClass('toggle-on-scroll');
});