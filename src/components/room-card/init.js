import RoomCard from "./RoomCard";

$(() => {
  const $rooms = $(".js-room-card");

  $rooms.each((i, val) => {
    new RoomCard(val);
  });
});
