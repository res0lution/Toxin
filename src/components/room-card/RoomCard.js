import "slick-carousel";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";

class RoomCard {
  constructor(card) {
    this.$roomCard = $(card);
    this.hasArrows = false;

    this.findDOMElement();
    this.checkArrows(this.$slider);
    this.initSlider();
  }

  findDOMElement() {
    this.$slider = this.$roomCard.find(".js-room-card__slider");
  }

  checkArrows(slider) {
    if ($(slider).hasClass("room-card__slider_with-arrows")) {
      this.hasArrows = true;
    }
  }

  initSlider() {
    this.$slider.slick({
      dots: true,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      arrows: this.hasArrows,
      useCSS: false,
    });
  }
}

export default RoomCard;
