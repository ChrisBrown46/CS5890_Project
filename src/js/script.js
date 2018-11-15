buildStory();

buildWaypoints();

d3.json("resources/battle-data/battle-data.json").then(battleData => {
  const battleNavigationChart = new BattleNavigationChart(battleData);

  battleNavigationChart.update();
});
