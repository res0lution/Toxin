import RoomCard from "./room-card";

$(() => {
  const $rooms = $(".js-room-card");

  $rooms.each((i, val) => {
    new RoomCard(val);
  });
});
