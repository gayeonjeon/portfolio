$(document).ready(function () {

    var webSlick = $('.web-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
    });

    $('.slider-box').slick({
        slidesToShow: 4,
        variableWidth: true,  
    });

    // On before slide change
    webSlick.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log('얍', nextSlide, currentSlide);

        //$('.content2 .box-bg').removeClass('type1 type2 type3'); =
        $('.content2 .box-bg').removeClass('type' + currentSlide);
        
        $('.content2 .box-bg').addClass('type' + nextSlide );
        
    });

    function modalShow() {
        document.querySelector(".modal").className = "modal show";
    }

    function modalClose() {
        document.querySelector(".modal").className = "modal";
    }

    document.querySelector("#show").addEventListener('click', modalShow);
    document.querySelector(".modal-close").addEventListener('click', modalClose);

    document.querySelector("#cta-radial-2").addEventListener('click', modalShow);

});
