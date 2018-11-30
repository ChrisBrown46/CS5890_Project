d3.json("resources/battle-data/battle-data.json").then(battleData => {

  const worldMap = new WorldMap(battleData);
  const battleNavigationChart = new BattleNavigationChart(battleData, worldMap);
  const popupChart = new PopupChart(battleData);

  d3.json("resources/world.json")
    .then(function(world) {
      worldMap.drawMap(world);
    });

  buildStory(battleNavigationChart, worldMap, popupChart);
});
