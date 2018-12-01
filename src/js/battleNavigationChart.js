class BattleNavigationChart {

  constructor(battleData) {
    this.battleData = battleData;
    this.trimmedBattleData = battleData.slice(0, -1);
    this.worldMap = worldMap;

    // Initializes the svg elements required for this chart
    this.margin = { top: 10, right: 20, bottom: 30, left: 50 };

    const divBattleChart = d3.select("div#battle-navigation-div");

    // Fetch the svg bounds
    this.svgBounds = divBattleChart.node().getBoundingClientRect();
    this.svgWidth = this.svgBounds.width - this.margin.left - this.margin.right;
    this.svgHeight = 100;

    // Add the svg to the div
    this.svg = divBattleChart.append("svg")
      .attr("width", this.svgWidth)
      .attr("height", this.svgHeight)
      .attr("id", "battle-navigation-chart")
      .append("g")
      .attr("transform", "translate(50, 50)");

    this.buildChart();
  }

  buildChart() {
    const scale = d3.scaleLinear()
      .domain([0, this.battleData.length + 1])
      .range([0, this.svgWidth]);

    // Create Battle Chart
    const rectBattleChart = this.svg
      .selectAll("circle")
      .data(this.trimmedBattleData)
      .enter();

    const circleBattleChart = this.svg
      .selectAll("circle")
      .data(this.battleData)
      .enter();

    rectBattleChart
      .append("rect")
      .attr("x", (_, i) => scale(i))
      .attr("width", (_, i) => (scale(i + 1) - scale(i)) / 2)
      .attr("y", -4)
      .attr("height", 10)
      .attr("stroke", "#FFFFFF")
      .attr("stroke-width", "2")
      .attr("id", (_, i) => "battle-chart-rectangle-" + i + "-1")
      .attr("fill", "none");

    rectBattleChart
      .append("rect")
      .attr("x", (_, i) => scale(i + 0.5))
      .attr("width", (_, i) => (scale(i + 1) - scale(i)) / 2)
      .attr("y", -4)
      .attr("height", 10)
      .attr("stroke", "#FFFFFF")
      .attr("stroke-width", "2")
      .attr("id", (_, i) => "battle-chart-rectangle-" + i + "-2")
      .attr("fill", "none");

    circleBattleChart
      .append("a")
      .attr("href", (_, i) => "#battle-" + (i + 1))
      .on("click", (_, i) => this.worldMap.updateMap(i))
      .append("circle")
      .attr("cx", (_, i) => scale(i))
      .attr("r", 25)
      .attr("stroke", "#FFFFFF")
      .attr("stroke-width", "2")
      .attr("fill", "white")
      .attr("id", (_, i) => "battle-chart-circle-" + i);
  }

  clearBattles() {
    d3.selectAll("circle")
      .classed("selected", false)
      .classed("done", false);

    d3.selectAll("rect")
      .classed("selected", false)
      .classed("done", false);
  }

  updateDirectionDown(battleNumber, textPosition) {
    d3.select("circle#battle-chart-circle-" + battleNumber)
      .classed("selected", true);

    for (let index = 0; index < battleNumber; index++) {
      d3.select("circle#battle-chart-circle-" + index)
        .classed("done", true);

      d3.select("rect#battle-chart-rectangle-" + index + "-1")
        .classed("done", true);
      d3.select("rect#battle-chart-rectangle-" + index + "-2")
        .classed("done", true);
    }

    // Rectangles
    d3.select("rect#battle-chart-rectangle-" + battleNumber + "-1")
      .classed("selected", true);
    if (textPosition == 2)
      d3.select("rect#battle-chart-rectangle-" + battleNumber + "-2")
        .classed("selected", true);
  }

  updateDirectionUp(battleNumber, textPosition) {
    if (textPosition == 1) {
      battleNumber -= 1;
      d3.select("rect#battle-chart-rectangle-" + battleNumber + "-2")
        .classed("selected", true);
    }

    for (let index = 0; index < battleNumber; index++) {
      d3.select("circle#battle-chart-circle-" + index)
        .classed("done", true);

      d3.select("rect#battle-chart-rectangle-" + index + "-1")
        .classed("done", true);
      d3.select("rect#battle-chart-rectangle-" + index + "-2")
        .classed("done", true);
    }

    d3.select("circle#battle-chart-circle-" + battleNumber)
      .classed("selected", true);
    d3.select("rect#battle-chart-rectangle-" + battleNumber + "-1")
      .classed("selected", true);
  }

  update(battleNumber, textPosition, direction) {
    this.clearBattles();

    if (direction == "down")
      this.updateDirectionDown(battleNumber - 1, textPosition);
    else
      this.updateDirectionUp(battleNumber - 1, textPosition);
  }
}
