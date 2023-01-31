const multipleItemCarousel = document.querySelector('#carouselExampleControls');
const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false
})


if(window.matchMedia("(min-width:576px)").matches) {
var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth=$('.carousel-item').width();


$('.carousel-control-next').on('click', function(){
    if(scrollPosition <(carouselWidth - (cardWidth * 4) )){
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollleft:scrollPosition}, 600);
    }
});

$('.carousel-control-prev').on('click', function(){
    if(scrollPosition > 0){
        console.log('prev');
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-inner').animate({scrollleft:scrollPosition}, 600);
    }
});
}else {
    $(multipleItemCarousel).addClass('slide');

}