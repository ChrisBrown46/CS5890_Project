class WorldMap {

  constructor(battleData) {
    this.battleData = battleData;

    this.projection = d3.geoMercator();

    this.margin = { top: 10, right: 20, bottom: 30, left: 50 };

    const divMap = d3.select("div#map-div");

    // Fetch the svg bounds
    this.svgBounds = divMap.node().getBoundingClientRect();
    this.svgWidth = this.svgBounds.width - this.margin.left - this.margin.right;
    this.svgHeight = 700;

    this.svg = divMap.append("svg")
      .attr("width", this.svgWidth)
      .attr("height", this.svgHeight)
      .attr("id", "map-chart")
      .append("g")
      .attr("transform", "translate(50, 50)");
  }

  drawMap(world) {
    const path = d3.geoPath().projection(this.projection);

    const geo = topojson.feature(world, world.objects.countries);

    const mapChart = this.svg
      .selectAll("path")
      .data(geo.features)
      .enter()

    mapChart
      .append("path")
      .attr("d", path)
      .attr("id", d => d.id)
      .attr("class", "countries");
  }

  update(battleNumber, textPosition, direction) {
    // TODO
  }
}
