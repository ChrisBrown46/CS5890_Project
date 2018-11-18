function buildBattle(battleNavigationChart, battleNumber, paragraphCount) {
  const halfway = Math.trunc(paragraphCount / 2);

  for (let index = 1; index <= paragraphCount; index += halfway) {
    const percent = index > halfway ? 2 : 1;

    new Waypoint({
      element: document.getElementById("battle-" + battleNumber + "-" + index),
      handler: function(direction) {
        battleNavigationChart.update(battleNumber, percent, direction)
      },
      context: document.getElementById("story"),
      offset: "50%"
    });
  }
}

function buildConclusion(battleNavigationChart) {
  new Waypoint({
    element: document.getElementById("battle-12-1"),
    handler: function() {
      battleNavigationChart.update(12, 1, "down")
    },
    context: document.getElementById("story"),
    offset: "50%"
  });

  new Waypoint({
    element: document.getElementById("battle-12-4"),
    handler: function() {
      battleNavigationChart.update(13, 1, "down")
    },
    context: document.getElementById("story"),
    offset: "95%"
  });
}

function buildWaypoints(battleNavigationChart) {
  buildBattle(battleNavigationChart, 1, 4);
  buildBattle(battleNavigationChart, 2, 4);
  buildBattle(battleNavigationChart, 3, 2);
  buildBattle(battleNavigationChart, 4, 2);
  buildBattle(battleNavigationChart, 5, 4);
  buildBattle(battleNavigationChart, 6, 4);
  buildBattle(battleNavigationChart, 7, 4);
  buildBattle(battleNavigationChart, 8, 2);
  buildBattle(battleNavigationChart, 9, 4);
  buildBattle(battleNavigationChart, 10, 4);
  buildBattle(battleNavigationChart, 11, 4);
  buildConclusion(battleNavigationChart);
}
