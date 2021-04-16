$(document).ready(function(){
    const slider = $("#sliderr").owlCarousel({
        loop: false,
        dots: true,
        margin:25,
        items: 1,
        responsive:{
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1920: {
                items: 4
            }

        }
    });
});

$(document).ready(function(){
    const slider = $("#aboutSlider").owlCarousel({
        loop: false,
        dots: true,
        margin:25,
        items: 1,
        responsive:{
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1920: {
                items: 4
            }

        }
    });
});