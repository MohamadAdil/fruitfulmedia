$(document).ready(function () {

  var interleaveOffset = 0.5;

  var swiper = new Swiper(".SwiperHero", {
    slidesPerView: 1,
    loop: true,
    speed: 2000,
    grabCursor: true,
    watchSlidesProgress: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    on: {
      progress: function () {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {

          var slide = swiper.slides[i];
          var slideProgress = slide.progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;

          var inner = slide.querySelector('::before'); // ❌ can't select pseudo
        }
      }
    }
  });

});