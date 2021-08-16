$(document).ready(function() {
    $('.landing-section .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        autoplay: true
    });

    $('#testimonies .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        autoplay: true
    });

    $('.blog-section .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 3,
            },
            1000:{
                items: 4,
            }
        }
    });

    //typed
    var typed = new Typed(".typed",{
        strings: ["Know Kenya Safari"],
        typeSpeed: 0,
        backSpeed: 0,
        loop: true
    })
});