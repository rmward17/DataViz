// Sort the data by Greek search results
var sortedGreeks = data.sort((a,b) => b.greekSearchResults - a.greekSearchResults);
//console.log(sortedGreeks);
// Slice the first 10 objects for plotting
var top10Greeks = sortedGreeks.slice(0,10);
console.log(top10Greeks);
// Reverse the array to accommodate Plotly's defaults
var greekNames = top10Greeks.map(god => god.greekName);
var results = top10Greeks.map(god => god.greekSearchResults);
//console.log(greekNames);
// Trace1 for the Greek Data
var trace = {
    x: results.reverse(),
    y: greekNames.reverse(),
    type: 'bar',
    orientation: "h"
};
// data
var data = [trace];
// Apply the group bar mode to the layout
var layout = {
    title: "greek gods search results"
};
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);