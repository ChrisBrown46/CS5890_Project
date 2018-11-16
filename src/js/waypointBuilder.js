function buildBattle(battleNavigationChart, battleNumber, paragraphCount) {
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
