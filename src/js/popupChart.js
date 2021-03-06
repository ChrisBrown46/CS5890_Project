const options = [
  "aircraft",
  "aircraft-damaged",
  "aircraft-lost",
  "artillery",
  "battleships",
  "battleships-lost",
  "carrier-aircraft",
  "carriers",
  "carriers-lost",
  "casualties",
  "cruisers",
  "cruisers-damaged",
  "civilian-casualties",
  "civilian-wounded",
  "divisions",
  "destroyers",
  "destroyers-damaged",
  "destroyers-lost",
  "float-aircraft",
  "heavy-cruisers",
  "heavy-cruisers-lost",
  "kia",
  "land-aircraft",
  "light-cruisers",
  "merchants-kia",
  "merchant-ships",
  "mortars",
  "mia",
  "pow",
  "sick",
  "soldiers",
  "soldiers-evacuated",
  "submarines",
  "submarines-lost",
  "tankers",
  "tanks",
  "tanks-lost",
  "vessels",
  "warships",
  "warships-lost",
  "weapons-captured",
  "weapons-lost",
  "wounded"
];

class PopupChart {

  constructor(battleData, chartNumber) {
    this.battleData = battleData;

    this.currentAttribute = "aircraft";
    this.currentBattle = null;
    // this.currentBattle = this.battleData[0];

    this.chartNumber = chartNumber;

    this.chartDiv = d3.select(`div#chartDiv${chartNumber}`);
    this.dimensions = this.chartDiv.node().getBoundingClientRect();
    this.height = parseFloat(this.dimensions.height);
    this.width = parseFloat(this.dimensions.width);

    this.selectBox = this.chartDiv.append("div")
      .attr("class", "select")
      .append("select").node();
    this.selectBox.onchange = () => this.updateBars();

    for (const option of options) {
      const newOption = document.createElement("option");
      newOption.text = option;
      newOption.value = option;
      this.selectBox.add(newOption);
    }

    this.defaultOption = this.selectBox.options[9];
    this.defaultOption.setAttribute("id", `default${chartNumber}`);

    this.chartSvg = this.chartDiv
      .append("svg")
      .attr("id", `chart${chartNumber}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("height", "100%");

    this.popup = this.chartSvg
      .append("g")
      .attr("transform", `scale(1, -1) translate(0, -${this.height})`);

    // Initialize the Y-axis line
    this.popupY = this.popup
      .append("line")
      .attr("x1", this.width * 0.20)
      .attr("x2", this.width * 0.20)
      .attr("y2", this.height * 0.85)
      .attr("y1", this.height * 0.15)
      .attr("class", "axis-line");

    // Initialize the X-axis line
    this.popupX = this.popup
      .append("line")
      .attr("x1", this.width * 0.20)
      .attr("x2", this.width * 0.95)
      .attr("y1", this.height * 0.15)
      .attr("y2", this.height * 0.15)
      .attr("class", "axis-line");

    // Initialize the "no data found" text
    this.noDataText = this.popup
      .append("text")
      .text("No data found!")
      .attr("x", this.width * 0.2)
      .attr("y", this.height * -0.6)
      .attr("transform", "scale(1,-1)")
      .attr("hidden", "true")
      .style("fill", "white");

    this.tooltipDiv = d3
      .select("body")
      .append("div")	
      .attr("class", "tooltip")				
      .style("opacity", 0);
    
    this.update(1, 1, "down");
  }

  update(battleNumber, textPosition, direction){
    battleNumber -= 1;
    if (textPosition !== 1) return;

    if (direction === "up")
      battleNumber -= 1;

    if (battleNumber === 0) {
      this.chartDiv.classed("inner", false);
      this.chartDiv.classed("hidden", true);
    } else {
      this.chartDiv.classed("hidden", false);
      this.chartDiv.classed("inner", true);
    }
      
    this.currentBattle = this.battleData[battleNumber];
    this.popup.selectAll("text.label").remove();
    this.popup.selectAll("rect").remove();

    if (this.currentBattle === undefined) return;
    if (this.currentBattle.categories === undefined) return;
    this.configureOptions();
    this.updateBars();
  }

  updateBars(){
    // First figure out which attribute has been selected.
    this.currentAttribute = this.selectBox.options[this.selectBox.selectedIndex].value;
    

    // Then see if there is data for this category for the currently selected battle and behave accordingly:
    let categoryDomain = this.currentBattle.categories[this.currentAttribute];
    if(categoryDomain === undefined || this.chartNumber === 1) {
      this.currentAttribute = "casualties";
      categoryDomain = this.currentBattle.categories[this.currentAttribute];
      $(`#default${this.chartNumber}`).prop('selected', true);
    }
    if(categoryDomain != undefined){
      this.popupX.attr("hidden", null);
      this.popupY.attr("hidden", null);
      this.noDataText.attr("hidden", "true");
      this.chartSvg.selectAll("g.yAxis").remove();
      let chartData = [];

      for (const force in this.currentBattle.forces_data) {
        let newVal = this.currentBattle.forces_data[force][this.currentAttribute];
        if (newVal === undefined) newVal = 0;
  
        chartData.push({
          name: force,
          val: newVal
        });
      }
      
      const yScale = d3.scaleLinear()
        .domain([0, categoryDomain])
        .range([0, this.height * 0.7]);

      const yAxisScale = d3.scaleLinear()
        .domain([0, categoryDomain])
        .range([this.height * 0.7, 0]);

      const barWidth = this.width * 0.75 / chartData.length;

      this.popup.selectAll("rect")
        .data(chartData)
        .enter()
        .append("rect")
        .attr("x", (_, i) => i * barWidth + this.width * 0.2)
        .attr("y", this.height * 0.15)
        .attr("val", d => d.val)
        .attr("class", d => `bar${d.name}`)
        .attr("width", () => barWidth - 3)
      
      this.popup.selectAll("rect").transition()
        .duration(500)
        .attr("height", d => yScale(d.val));
      
      this.popup
        .selectAll("text.label")
        .data(chartData)
        .enter()
        .append("text")
        .text(d => d.name)
        .attr("x", (_, i) => i * barWidth + this.width * 0.2 + 2)
        .attr("y", this.height * -0.1)
        .attr("transform", "scale(1, -1)")
        .style("color", "white")
        .attr("class", "label")
        .on("mouseover", d => {
          this.tooltipDiv.style("opacity", .9);
          let tooltipHtml = d.val;
          if(d.val === 0) tooltipHtml = "No data!";
          this.tooltipDiv.html(tooltipHtml)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", d => {
          this.tooltipDiv.style("opacity", 0);
        })

      let yAxis = d3.axisLeft(yAxisScale);

      this.chartSvg.append('g')
        .attr('transform', `translate(${this.width * 0.2},${this.width * 0.15})`)
        .attr('class', 'yAxis')
        .call(yAxis)
        .selectAll('text')
        .attr('transform', `translate(${this.width * -0.05}, ${this.height * -0.05})`)
        .attr('dx', '1.2em')
        .attr('dy', '1.5em')
        .attr('class', "label")
      ;
    }

    else {
      // Data Not found for this attribute in this battle
      this.popup.selectAll("text.label").remove();
      this.popup.selectAll("rect").remove();
      this.popupX.attr("hidden", "true");
      this.popupY.attr("hidden", "true");
      this.noDataText.attr("hidden", null);
      this.chartSvg.selectAll("g.yAxis").remove();

      return;
    }
  }

  configureOptions(){
    for (const option of this.selectBox.options){
      if (this.currentBattle.categories[option.value] === undefined) option.disabled = true;
      else option.disabled = false;
    }
  }
}
