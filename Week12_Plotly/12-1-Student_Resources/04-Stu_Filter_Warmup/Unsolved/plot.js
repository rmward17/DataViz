// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.
//function filterCitites(city) {
    //return city.Increase_from_2016 > 15000;
//}

var popIncOver15k = top15Cities.filter(city => parseInt(city.Increase_from_2016) > 15000);
// 2. Use filter() to pass the function as its argument
//var popIncOver15k = top15Cities.filter(filterCitites);

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(popIncOver15k);

// 3. Use the map method with the arrow function to return all the filtered cities' names.
var cityNames = popIncOver15k.map(city => city.City);
//  Check your filtered cities
console.log(cityNames);

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
cityPopulations = popIncOver15k.map(city => parseInt(city.population));

//  Check the populations of your filtered cities
console.log(cityPopulations);
// 5. Create your trace.
var trace = {
    x: cityNames,
    y: cityPopulations,
    type: "bar"
};

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
    title: "Population Increases oer 15K",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);