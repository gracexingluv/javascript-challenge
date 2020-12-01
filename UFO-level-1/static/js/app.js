// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers 
button.on("click", run);
form.on("submit", run);

function run() {
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var datetime = inputElement.property("value");

    // filter data by input datetime
    var filteredData = data.filter(row => row.datetime === datetime);
    // console.log(filteredData)
    
    // remove any children from the list to
    results = d3.select("#results")
    results.html("<tbody></tbody>")

    // fill the table
    // create rows
    var tr = results.selectAll("tr")
        .data(filteredData).enter().append("tr")

    // cells
    var td = tr.selectAll("td")
        .data(function(d) {return d3.values(d)})
        .enter().append("td")
        .text(function(d) {return d})
}