import Icons from "../icons/icons";

class RatingButton {
  constructor(elem) {
    this.isFullStars = false;
    this.ratingButton = elem;

    this.findDOMElements();
    this.init();
  }

  findDOMElements() {
    this.stars = this.ratingButton.querySelectorAll(".js-rating-button__label");
  }

  init() {
    this.inputs = Array.from(this.stars, this.fillFullStars.bind(this));
  }

  fillFullStars(label) {
    if (!this.isFullStars) {
      const input = label.querySelector(".js-rating-button__input");
      const isChecked =
        input.getAttribute("checked") !== null ||
        input.getAttribute("checked") === "checked";
      const icon = new Icons(label);
      const starIcon = "star";

      icon.setTextContent(starIcon);

      if (isChecked) {
        this.isFullStars = true;
      }
    }
  }
}

export default RatingButton;
