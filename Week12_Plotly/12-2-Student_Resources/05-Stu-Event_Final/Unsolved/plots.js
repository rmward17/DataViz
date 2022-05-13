// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
var provider = Object.keys(data.us);

// Display the default plot
function init(){
var trace = {
  values: [19,5,8,30],
  labels: provider,
  type: "pie"
};

var data = [trace];

Plotly.newPlot('pie', data);
}

// On change to the DOM, call getData()
d3.selectAll("#dropdown").on("change", getData);
// Function called by DOM changes
function getData() {
  var dropdown = d3.select("#dropdown");
  var dataset = dropdown.property("value");

  // Assign the value of the dropdown menu option to a variable
  
  // Initialize an empty array for the country's data
  var yData = [];
  if (dataset == 'us') {
    yData = us;
  };
  if (dataset == 'uk') {
    yData = uk;
  };
  if (dataset == 'canada') {
    yData = canada;
  };
  updatePlotly(yData);
};
// Update the restyled plot's values
function updatePlotly(newdata){
  Plotly.restyle("pie","values", [newdata]);
}

init();