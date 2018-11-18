function buildBattle(battleNavigationChart, worldMap, battleNumber, paragraphCount) {
  const halfway = Math.round(paragraphCount / 2);

  for (let index = 1; index < paragraphCount; ++index) {
    const percent = index >= halfway ? 2 : 1;

    new Waypoint({
      element: document.getElementById("battle-" + battleNumber + "-" + percent),
      handler: function(direction) {
        battleNavigationChart.update(battleNumber, percent, direction)
      },
      context: document.getElementById("story"),
      offset: "50%"
    });
  }
}

function buildWaypoints(battleNavigationChart, worldMap) {
  buildBattle(battleNavigationChart, worldMap, 1, 4);
  buildBattle(battleNavigationChart, worldMap, 2, 4);
  buildBattle(battleNavigationChart, worldMap, 3, 2);
  buildBattle(battleNavigationChart, worldMap, 4, 3);
  buildBattle(battleNavigationChart, worldMap, 5, 3);
  buildBattle(battleNavigationChart, worldMap, 6, 3);
  buildBattle(battleNavigationChart, worldMap, 7, 3);
  buildBattle(battleNavigationChart, worldMap, 8, 3);
  buildBattle(battleNavigationChart, worldMap, 9, 3);
  buildBattle(battleNavigationChart, worldMap, 10, 5);
  buildBattle(battleNavigationChart, worldMap, 11, 3);
}
