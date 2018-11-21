function buildBattle(battleNavigationChart, worldMap, popupChart, battleNumber, paragraphCount) {
  const halfway = Math.trunc(paragraphCount / 2);

  for (let index = 1; index <= paragraphCount; index += halfway) {
    const percent = index > halfway ? 2 : 1;

    new Waypoint({
      element: document.getElementById("battle-" + battleNumber + "-" + index),
      handler: function(direction) {
        battleNavigationChart.update(battleNumber, percent, direction);
        worldMap.update(battleNumber, percent, direction);
        popupChart.update(battleNumber, percent, direction);
      },
      context: document.getElementById("story"),
      offset: "50%"
    });
  }
}

function buildConclusion(battleNavigationChart, worldMap, popupChart) {
  new Waypoint({
    element: document.getElementById("battle-12-1"),
    handler: function() {
      battleNavigationChart.update(12, 1, "down");
      worldMap.update(12, 1, "down");
      popupChart.update(12, 1, "down");
    },
    context: document.getElementById("story"),
    offset: "50%"
  });

  new Waypoint({
    element: document.getElementById("battle-12-4"),
    handler: function() {
      battleNavigationChart.update(13, 1, "down");
    },
    context: document.getElementById("story"),
    offset: "95%"
  });
}

function buildWaypoints(battleNavigationChart, worldMap, popupChart) {
  buildBattle(battleNavigationChart, worldMap, popupChart, 1, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart, 2, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart, 3, 2);
  buildBattle(battleNavigationChart, worldMap, popupChart, 4, 2);
  buildBattle(battleNavigationChart, worldMap, popupChart, 5, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart, 6, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart, 7, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart, 8, 2);
  buildBattle(battleNavigationChart, worldMap, popupChart, 9, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart, 10, 4);
  buildBattle(battleNavigationChart, worldMap, popupChart, 11, 4);
  buildConclusion(battleNavigationChart, worldMap, popupChart);
}
