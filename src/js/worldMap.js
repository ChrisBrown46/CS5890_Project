class WorldMap {

  constructor(battleData) {
    this.battleData = battleData;

    this.projection = d3.geoMercator();

    this.margin = { top: 10, right: 0, bottom: 30, left: 0 };

    const divMap = d3.select("div#map-div");

    // Fetch the svg bounds
    this.svgBounds = divMap.node().getBoundingClientRect();
    this.svgWidth = this.svgBounds.width - this.margin.left - this.margin.right;
    this.svgHeight = 750;

    this.svg = divMap.append("svg")
      .attr("width", this.svgWidth)
      .attr("height", this.svgHeight)
      .attr("id", "map-chart")
      .append("g")
      .attr("transform", "translate(5, 150) scale(1.395, 1.395)");
  }

  updateSides() {
    const allies_iso = ["AUS", "BRA", "CAN", "NZL", "ZAF", "RUS", "GBR", "USA"]
    const axis_iso = ["DEU", "ITA", "JPN", "BGR", "HUN", "ROU", "SVK", "AUT", "ETH", "CHN"]

    allies_iso.forEach(allies_iso => {
      this.svg
        .selectAll("path#" + allies_iso)
        .classed("side-allies", true);
    })

    axis_iso.forEach(axis_iso => {
      this.svg
        .selectAll("path#" + axis_iso)
        .classed("side-axis", true);
    })
  }

  updateSides() {
    const allies_iso = ["AUS", "BRA", "CAN", "NZL", "ZAF", "RUS", "GBR", "USA"]
    const axis_iso = ["DEU", "ITA", "JPN", "BGR", "HUN", "ROU", "SVK", "AUT", "ETH", "CHN"]

    allies_iso.forEach(allies_iso => {
      this.svg
        .selectAll("path#" + allies_iso)
        .classed("side-allies", true);
    })

    axis_iso.forEach(axis_iso => {
      this.svg
        .selectAll("path#" + axis_iso)
        .classed("side-axis", true);
    })
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

    this.updateSides()
  }

  update(battleNumber, textPosition, direction) {
    // TODO
  }
}
