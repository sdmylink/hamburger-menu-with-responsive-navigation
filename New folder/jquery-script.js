// // open mobile menu
$('.hamburger-menu-wrapper').click(function (e) {
    e.preventDefault();
    $('nav').slideToggle();
    $(this).toggleClass('open');
});

(function () {
    'use strict';
    $('.hamburger-menu').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        } else {
            $(this).addClass('active');
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }
    })
})();


$(".parent").click(function () {
    $(this).children(".sub-menu").slideToggle();
    $(this).children(".list-menu").slideToggle();
});

$("ul").click(function (p) {
    p.stopPropagation();
});


//////////
