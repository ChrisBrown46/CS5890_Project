class BattleNavigationChart {

  constructor(battleData) {
    this.battleData = battleData;

    // Initializes the svg elements required for this chart
    this.margin = { top: 10, right: 20, bottom: 30, left: 50 };
    const divBattleChart = d3.select("#battle-navigation-chart");

    // Fetch the svg bounds
    this.svgBounds = divBattleChart.node().getBoundingClientRect();
    this.svgWidth = this.svgBounds.width - this.margin.left - this.margin.right;
    this.svgHeight = 100;

    // Add the svg to the div
    this.svg = divBattleChart.append("svg")
      .attr("width", this.svgWidth)
      .attr("height", this.svgHeight)
      .append("g")
      .attr("transform", "translate(50, 50)");

    this.buildChart();

    $('[data-spy="scroll"]').each(function() {
      const $spy = $(this).scrollspy("refresh");
    });
  }

  buildChart() {
    const scale = d3.scaleLinear()
      .domain([0, this.battleData.length + 1])
      .range([0, this.svgWidth]);

    // Create Battle Chart
    const battleChart = this.svg
      .selectAll("circle")
      .data(this.battleData)
      .enter();

    battleChart
      .append("rect")
      .attr("x", (_, i) => scale(i))
      .attr("width", (_, i) => scale(i + 1) - scale(i))
      .attr("y", -4)
      .attr("height", 10)
      .attr("stroke", "#FFFFFF")
      .attr("stroke-width", "2")
      .attr("fill", "none");

    const battleChartCircles = battleChart
      .append("a")
      .attr("href", (_, i) => "#list-item-" + (i + 1))
      .append("circle")
      .attr("cx", (_, i) => scale(i))
      .attr("r", 25)
      .attr("stroke", "#FFFFFF")
      .attr("stroke-width", "2")
      .attr("fill", "white")
      .attr("href", (_, i) => "#list-item-" + (i + 1))
      .attr("class", "list-group-item list-group-item-action");
  }

  update() {
    d3.selectAll("circle")
      .attr("fill", "red");
    d3.selectAll(".active")
      .attr("fill", "green");
  }
}