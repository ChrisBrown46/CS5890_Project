function buildBattle(battleNavigationChart, battleNumber, paragraphCount) {
  for (let index = 1; index < paragraphCount; ++index) {
    new Waypoint({
      element: document.getElementById("battle-" + battleNumber + "-" + index),
      handler: function() {
        battleNavigationChart.update(battleNumber, index)
      },
      context: document.getElementById("story"),
      offset: "50%"
    });
  }
}

function buildWaypoints(battleNavigationChart) {
  buildBattle(battleNavigationChart, 1, 4);
  buildBattle(battleNavigationChart, 2, 4);
  buildBattle(battleNavigationChart, 3, 2);
  buildBattle(battleNavigationChart, 4, 3);
  buildBattle(battleNavigationChart, 5, 3);
  buildBattle(battleNavigationChart, 6, 3);
  buildBattle(battleNavigationChart, 7, 3);
  buildBattle(battleNavigationChart, 8, 3);
  buildBattle(battleNavigationChart, 9, 3);
  buildBattle(battleNavigationChart, 10, 5);
  buildBattle(battleNavigationChart, 11, 3);
}
