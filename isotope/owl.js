$(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    dots:3,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    nav:true,
    navText : ["<ion-icon class='carousel-icon' name='arrow-forward-outline'></ion-icon>","<ion-icon class='carousel-icon' name='arrow-back-outline'></ion-icon>"],
    responsive:{
        0:{
            items:1
        },
        544:{
            items:2
        }
    }
});
