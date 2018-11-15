function buildBattle1() {
  new Waypoint({
    element: document.getElementById("battle-1"),
    handler: function() {
      console.log("Battle 1 Loaded");
    },
    context: document.getElementById("story"),
    offset: "50%"
  });
}

function buildBattle2() {
  new Waypoint({
    element: document.getElementById("battle-2"),
    handler: function() {
      console.log("Battle 2 Loaded");
    },
    context: document.getElementById("story"),
    offset: "50%"
  });
}

function buildBattle3() {
  new Waypoint({
    element: document.getElementById("battle-3"),
    handler: function() {
      console.log("Battle 3 Loaded");
    },
    context: document.getElementById("story"),
    offset: "50%"
  });
}

function buildBattle4() {
  new Waypoint({
    element: document.getElementById("battle-4"),
    handler: function() {
      console.log("Battle 4 Loaded");
    },
    context: document.getElementById("story"),
    offset: "50%"
  });
}

function buildBattle5() {
  new Waypoint({
    element: document.getElementById("battle-5"),
    handler: function() {
      console.log("Battle 5 Loaded");
    },
    context: document.getElementById("story"),
    offset: "50%"
  });
}

function buildWaypoints() {
  buildBattle1();
  buildBattle2();
  buildBattle3();
  buildBattle4();
  buildBattle5();
}
