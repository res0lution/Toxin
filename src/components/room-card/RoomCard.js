import "slick-carousel";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";

class RoomCard {
  constructor(preview) {
    this.$roomPreview = $(preview);
    this.hasArrows = false;

    this.findDOMElements();
    this.checkArrows(this.$slider);
    this.initSlider();
  }

  findDOMElements() {
    this.$slider = this.$roomPreview.find(".js-room-card__slider");
  }

  checkArrows(element) {
    if ($(element).hasClass("room-card__slider_with-arrows")) {
      this.hasArrows = true;
    }
  }

  initSlider() {
    this.$slider.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: this.hasArrows,
      useCSS: false,
    });
  }
}

export default RoomCard;
