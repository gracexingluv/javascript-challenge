// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", run);

function run() {
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDatetime = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var datetime = inputDatetime.property("value");
    var city = inputCity.property("value");
    var state = inputState.property("value");
    var country = inputCountry.property("value");
    var shape = inputShape.property("value");

    // filter data by input datetime
    var filteredData = data.filter(function(row) {
        
        if ((datetime !== "" && row.datetime !== datetime) ||
            (city !== "" && row.city !== city) ||
            (state !== "" && row.state !== state) ||
            (country !== "" && row.country !== country) ||
            (shape !== "" && row.shape !== shape) ||
            (datetime+city+state+country+shape).trim() === "") 
        {
            return false
        }

        return true
    });
    
    // remove previous results
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