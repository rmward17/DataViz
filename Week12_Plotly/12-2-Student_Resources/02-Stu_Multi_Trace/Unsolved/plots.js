console.log(data);
var pairs = data.map(god => god.pair);
var greekResults = data.map(god => god.greekSearchResults);
var romanResults = data.map(god => god.romanSearchResults);
// Trace1 for the Greek Data
var trace1 = {
    x: pairs,
    y: greekResults,
    name: "greek",
    type: "bar"
};

// Trace 2 for the Roman Data
var trace2 = {
    x: pairs,
    y: romanResults,
    name: "roman",
    type: "bar"
};

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
    barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot",data,layout);
