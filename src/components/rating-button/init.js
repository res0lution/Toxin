import RatingButton from "./rating-button";

document.addEventListener("DOMContentLoaded", () => {
  const ratingBtns = document.querySelectorAll(".js-rating-button");
  ratingBtns.forEach((val) => new RatingButton(val));
});
