function buildStory(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3) {
 d3.json("resources/battle-text.json").then(function(data) {
    const text = d3
      .select("div#story")
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
      .selectAll("p#temp")  // Select the <p> group but not the existing <p> tags
      .data(d => d.text)
      .enter()
      .append("p")
      .attr("class", "h3")
      .attr("id", function(_, i) { return this.parentNode.id + "-" + (i + 1); })
      .text(d => d);

    buildWaypoints(battleNavigationChart, worldMap, popupChart1, popupChart2, popupChart3);
  });
}
