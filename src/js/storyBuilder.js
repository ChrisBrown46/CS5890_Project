function buildStory(battleNavigationChart, worldMap) {
 d3.json("resources/battle-text.json").then(function(data) {
    const text = d3
      .select("#story")
      .selectAll("div")
      .data(data)
      .enter()
      .append("div")
      .attr("id", (_, i) => "battle-" + (i + 1));

    text
      .append("p")
      .attr("class", "h1")
      .text(d => d.battle);

    text
      .selectAll("p#temp")
      .data(d => d.text)
      .enter()
      .append("p")
      .attr("class", "h3")
      .attr("id", function(_, i) { return this.parentNode.id + "-" + (i + 1); })
      .text(d => d);

    buildWaypoints(battleNavigationChart, worldMap);
  });
}
