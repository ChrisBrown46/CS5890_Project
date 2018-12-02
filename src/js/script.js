d3.json("resources/battle-data/battle-data.json").then(battleData => {

  const worldMap = new WorldMap(battleData);
  const battleNavigationChart = new BattleNavigationChart(battleData, worldMap);
  const popupChart1 = new PopupChart(battleData, 1);
  const popupChart2 = new PopupChart(battleData, 2);
  const popupChart3 = new PopupChart(battleData, 3);

  d3.json("resources/world.json")
    .then(function(world) {
      worldMap.drawMap(world);
    });

  buildStory(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3);
});
