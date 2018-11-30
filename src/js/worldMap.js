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

  updateMap(mapBattleData) {
    switch(mapBattleData.number) {
      case "1":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-7200, -950) scale(15, 15)");
        break;

      case "2":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-900, -150) scale(4, 4)");
        break;

      case "3":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-6700, -1050) scale(15, 15)");
        break;

      case "4":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-6500, -800) scale(15, 15)");
        break;

      case "5":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-4800, -500) scale(10, 10)");
        break;

      case "6":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-5000, -375) scale(10, 10)");
        break;

      case "7":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-500, -3500) scale(20, 20)");
        break;

      case "8":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-2050, -340) scale(3, 3)");
        break;

      case "9":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-5000, -375) scale(10, 10)");
        break;

      case "10":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-11400, -2070) scale(25, 25)");
        break;

      case "11":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
          .transition()
          .duration(750)
          .attr("transform", "translate(-6700, -1050) scale(15, 15)");
        break;

      case "12":
        this.svg
          .transition()
          .duration(750)
          .attr("transform", "translate(5, 150) scale(1.395, 1.395)")
      break;
    }
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
