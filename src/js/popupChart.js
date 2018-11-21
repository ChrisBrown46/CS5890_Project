// TODO: Add categories to the data in battle-data.json
// TOOD: Wrap the data in battle-data.json into forces_data
// TODO: Call this script in index.html
// TODO: Add the necessary svg and select elements to index.html
// TODO: Call the scripts from popup.html in index.html
// TODO: Move the styling and append the other elements from popup.html into index.html

$( function() {
  $( "#popupDiv" ).draggable();
});

d3.json("resources/battle-data/battle-data.json").then(battleData => {
  buildPopup(battleData[10]);
});

let nullOption = document.createElement("option");
nullOption.innerHTML = "none";
nullOption.value = "none";

let barChartSVG = d3.select("map-div").append("div")

// creates the dropdown menu that allows the user to select which category they want to view
// trigger this each time the scrollytelling changes to a new vis
function buildPopup(battlejson){
  // re-initialize the category selectbox
  $('#category').children().remove();
  let categories = battlejson.categories;
  let categorySelect = document.getElementById("category");
  categorySelect.add(nullOption);

  for (c in categories) {
    // create a new option for each category and add it to the select
    let newOption = document.createElement("option");
    newOption.innerHTML = c;
    newOption.value = c;
    categorySelect.add(newOption);
  }

  // add the axis lines to the chart
  d3.select("#chart")
    .selectAll("g")
    .append("line")
    .attr("x1", 50)
    .attr("x2", 50)
    .attr("y1", 10)
    .attr("y2", 245)
    .attr("class", "axis-line");

  d3.select("#chart")
    .selectAll("g")
    .append("line")
    .attr("x1", 50)
    .attr("x2", 300)
    .attr("y1", 245)
    .attr("y2", 245)
    .attr("class", "axis-line");
    
  // initialize the chart with no data
  buildChart(
    categorySelect.value, 
    battlejson.forces_data, 
    categories[categorySelect.value]);

  // set the select's onchange to dynamically load new data
  categorySelect.onchange = () => buildChart(
    categorySelect.value, 
    battlejson.forces_data, 
    categories[categorySelect.value]);

}

// change the svg according to the specific category
function buildChart(category, forces, dataDomain){
  // parse out and validate the data from battlejson
  let chartData = [];
  for (f in forces){
    let newVal = forces[f][category];
    if (newVal === undefined) newVal =0;
    chartData.push({
      name: f,
      val: newVal,
    });
  }

  // clear up the old data
  let chart = d3.select("#chart").selectAll("g");
  chart.selectAll("text").remove();
  chart.selectAll("rect").remove();
  
  if (category === "none") {
    // output a message if "none" is selected
    d3.select("#chart")
      .selectAll("g")
      .append("text")
      .text("Click on a category!")
      .attr("x", 100)
      .attr("y", 100);
  } else {
    // establish the yScale used for the y-axis
    let yScale = d3.scaleLinear()
      .domain([0,dataDomain])
      .range([245, 10])

    // add one rectangle for each data entry
    let rects = chart.selectAll("rect")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("x", (d,i) => i*(250/chartData.length) + 55)
      .attr("y", d => yScale(d.val))
      .attr("val", d => d.val)
      .attr("height", d => 245-yScale(d.val))
      .attr("class", d => `bar ${d.name}`)
      .attr("width", (d,i) => 250/chartData.length-3)
  }

}