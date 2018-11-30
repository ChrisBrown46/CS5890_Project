class PopupChart {

  constructor(battleData) {
    this.battleData = battleData;

    this.popup = d3.select("div#test")
      .append("svg")
      .attr("id", "chart")
      .attr("width", "100%")
      .attr("height", "100%")
      .append("g")
      .attr("transform", "scale(1, -1)");
  }

  // Creates the dropdown menu that allows the user to select which category they want to view
  // trigger this each time the scrollytelling changes to a new visualization
  buildPopup(battleJson) {
    // Re-initialize the category selectbox
    this.popup
      .selectAll("*")
      .remove();

    // Add the axis lines to the chart
    this.popup
      .append("line")
      .attr("x1", 20)
      .attr("x2", 20)
      .attr("y1", 10)
      .attr("y2", 245)
      .attr("class", "axis-line");

    this.popup
      .append("line")
      .attr("x1", 50)
      .attr("x2", 300)
      .attr("y1", 245)
      .attr("y2", 245)
      .attr("class", "axis-line");

    // // Initialize the bar chart
    // this.buildChart(
    //   categoryMenu.value, 
    //   battleJson.forces_data, 
    //   categories[categoryMenu.value]
    // );
  
    // // Set the select's onchange to dynamically load new data
    // categoryMenu.onchange = () => this.buildChart(
    //   categoryMenu.value, 
    //   battleJson.forces_data, 
    //   categories[categoryMenu.value]
    // );
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
