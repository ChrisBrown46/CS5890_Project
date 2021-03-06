function buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, battleNumber, paragraphCount) {
  const halfway = Math.trunc(paragraphCount / 2);

  for (let index = 1; index <= paragraphCount; index += halfway) {
    const percent = index > halfway ? 2 : 1;

    new Waypoint({
      element: document.getElementById("battle-" + battleNumber + "-" + index),
      handler: function(direction) {
        battleNavigationChart.update(battleNumber, percent, direction);
        worldMap.update(battleNumber, percent, direction);
        popupChart1.update(battleNumber, percent, direction);
        popupChart2.update(battleNumber, percent, direction);
        popupChart3.update(battleNumber, percent, direction);
      },
      context: document.getElementById("story"),
      offset: "50%"
    });
  }
}

function buildConclusion(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3) {
  new Waypoint({
    element: document.getElementById("battle-13-1"),
    handler: function(direction) {
      battleNavigationChart.update(13, 1, "down");
      worldMap.update(13, 1, direction);
      popupChart1.update(13, 1, direction);
      popupChart2.update(13, 1, direction);
      popupChart3.update(13, 1, direction);
    },
    context: document.getElementById("story"),
    offset: "50%"
  });

  new Waypoint({
    element: document.getElementById("battle-13-2"),
    handler: function(direction) {
      battleNavigationChart.update(14, 1, direction);
    },
    context: document.getElementById("story"),
    offset: "95%"
  });
}

function buildWaypoints(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3) {
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 1, 2);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 2, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 3, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 4, 2);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 5, 2);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 6, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 7, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 8, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 9, 2);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 10, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 11, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3, 12, 4);
  buildConclusion(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3);
}
