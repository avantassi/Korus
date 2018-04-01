$('#circle1').click(function() {
    $(this).css({'background' : '#808080'}).parent().parent().find(".timeline__step--third, .timeline__step--second").find(".timeline__step-line, .timeline__step-circle").css({ 'background' : '#dfdfdf'});
});
$('#circle2').click(function() {
    $(this).css({'background' : '#808080'}).parent().find(".timeline__step-line, .timeline__step--first").css({'background' : '#808080'}).parent().parent().find(".timeline__step--third").find(".timeline__step-line, .timeline__step-circle").css({ 'background' : '#dfdfdf'});
});
$('#circle3').click(function() {
    $(this).css({'background' : '#808080'})
        .parent().parent().find(".timeline__step-line, .timeline__step-circle").css({'background' : '#808080'});
});

