d3.json("resources/battle-data/battle-data.json").then(battleData => {
  const battleNavigationChart = new BattleNavigationChart(battleData);

  $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    battleNavigationChart.update();
  });
});
