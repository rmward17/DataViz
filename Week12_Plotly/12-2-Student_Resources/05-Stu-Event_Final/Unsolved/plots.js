// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
var provider = ["Spotify", "Soundcloud", "Pandora", "Itunes"];

// Display the default plot
var trace = {
  values: [19,5,8,30],
  labels: provider,
  type: "pie"
};

var data = [trace];

Plotly.newPlot('pie', data);

// On change to the DOM, call getData()
d3.selectAll("#dropdown").on("change", getData);
// Function called by DOM changes
function getData() {
  var dropdown = d3.select("#dropdown");
  var dataset = dropdown.property("value");

  // Assign the value of the dropdown menu option to a variable
  var xData = ["Spotify", "Soundcloud", "Pandora", "Itunes"];
  // Initialize an empty array for the country's data
  var yData = [];
  if (dataset === 'us') {
    yData = [19,5,8,30];
  };
  if (dataset === 'uk') {
    yData = [10,2,22,37];
  };
  if (dataset === 'canada') {
    yData = [14,2,5,15];
  };
}
// Update the restyled plot's values
var trace = {
  labels: xData,
  values: yData
};

