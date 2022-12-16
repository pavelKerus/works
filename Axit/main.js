$(document).ready(function() {

    $('.reviews .block-items').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 950,
                settings:"unslick"
        }
        ]        
    });

});