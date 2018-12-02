let options = [
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
]

class PopupChart {

  constructor(battleData, chartNumber) {
    this.battleData = battleData;
    this.currentAttribute = "aircraft";
    this.currentBattle = this.battleData[0];
    this.chartDiv = d3.select(`div#chartDiv${chartNumber}`);
    this.dimensions = this.chartDiv.node().getBoundingClientRect();
    this.selectBox = this.chartDiv.append("select").node();
    this.selectBox.onchange = () => this.buildChart();
    
    this.chartSvg = this.chartDiv.append("svg")
      .attr("id", `chart${chartNumber}`)
      .attr("width", "100%")
      .attr("height", "100%");

    this.popup = this.chartSvg.append("g")
      .attr("transform", "scale(1, 1)");

    for (let option of options){
      let newOption = document.createElement("option");
      newOption.text = option;
      newOption.value = option;
      this.selectBox.add(newOption);
    }


    this.popup
      .append("line")
      .attr("x1", 20)
      .attr("x2", 20)
      .attr("y1", 10)
      .attr("y2", 100)
      .attr("class", "axis-line");
    // this.popup
    //   .append("line")
    //   .attr("x1", this.dimensions.width * 0.2)
    //   .attr("x2", this.dimensions.width * 0.2)
    //   .attr("y1", this.dimensions.height * 0.8)
    //   .attr("y2", this.dimensions.height * 0.2)
    //   .attr("class", "axis-line");

    this.popup
      .append("line")
      .attr("x1", 50)
      .attr("x2", 300)
      .attr("y1", 245)
      .attr("y2", 245)
      .attr("class", "axis-line");

    this.configureOptions();
  }

  configureOptions(){
    for(let option of this.selectBox.options){
      if(this.currentBattle.categories[option.value] === undefined) option.disabled = true;
      else option.disabled = false;
    }
  }
  
  // Creates the dropdown menu that allows the user to select which category they want to view
  // trigger this each time the scrollytelling changes to a new visualization
  buildPopup(battleJson) {
    console.log(this.dimensions());
    this.currentBattle = battleJson;
    this.configureOptions();
    // Re-initialize the category selectbox
    this.popup
      .selectAll("*")
      .remove();

    
    // Add the axis lines to the chart
    
    // // Initialize the bar chart
    // this.buildChart(
    //   categoryMenu.value, 
    //   battleJson.forces_data, 
    //   categories[categoryMenu.value]
    // );
  
    // // Set the select's onchange to dynamically load new data

  }

  // Change the svg according to the specified category
  buildChart(category, forces, dataDomain) {
    // const chartData = [];

    // // Parse out and validate the data from battleJson
    // for (const force in forces) {
    //   let newVal = forces[force][category];
    //   if (newVal === undefined) newVal = 0;

    //   chartData.push({
    //     name: force,
    //     val: newVal
    //   });
    // }

    // // Clear the old data
    // this.popup.selectAll("text").remove();
    // this.popup.selectAll("rect").remove();

    // if (category === "none") {
    //   // Output a message if "none" is selected
    //   this.popup
    //     .append("text")
    //     .text("Click on a category!")
    //     .attr("x", 100)
    //     .attr("y", 100);
    // } else {
    //   // Establish the yScale used for the y-axis
    //   const yScale = d3.scaleLinear()
    //     .domain([0, dataDomain])
    //     .range([245, 10]);

    //   // Add one rectangle for each data entry
    //   this.popup
    //     .selectAll("rect")
    //     .data(chartData)
    //     .enter()
    //     .append("rect")
    //     .attr("x", (_, i) => i * (250 / chartData.length) + 55)
    //     .attr("y", d => yScale(d.val))
    //     .attr("val", d => d.val)
    //     .attr("height", d => 245 - yScale(d.val))
    //     .attr("class", d => `bar ${d.name}`)
    //     .attr("width", () => 250 / chartData.length - 3)
    // }
  }

  update(battleNumber, textPosition, direction) {
    // if (textPosition !== 1) return;

    // if (direction === "up")
    //   battleNumber -= 1;
    
    // this.buildPopup(this.battleData[battleNumber - 1]);
  }
}
