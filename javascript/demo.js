$(document).ready(function() {
    var slide = 1;
    $('.vroom').on('click', function(event) {
        if (slide == 12) {
            return;
        }
        var x = `.slide${slide}, .slide${slide + 1}`;
        $(x).toggleClass('hidden');
        slide++;
        console.log(slide);
    });
    $('.back').on('click', function(event) {
        if (slide == 1) {
            return;
        }
        var x = `.slide${slide}, .slide${slide - 1}`;
        $(x).toggleClass('hidden');
        slide--;
    });
});