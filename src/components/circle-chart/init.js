import CircleChart from "./circle-chart";

$(() => {
  const $circleChart = $(".js-circle-chart");

  const data = [
    { name: "голосов", value: 260 },
    { name: "голосов", value: 260 },
    { name: "голосов", value: 520 },
  ];
  const width = 120;
  const height = 120;

  $circleChart.each((i, val) => {
    new CircleChart(val, { data, width, height });
  });
});
