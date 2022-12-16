$(document).ready(function() {

    $('.cool-projects__list').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        // centerMode:true,
        mobileFirst:true,
        responsive: [
            {
              breakpoint: 420,
              settings:"unslick",
            },
          ]
        // adaptiveHeight: true,       
    });

});