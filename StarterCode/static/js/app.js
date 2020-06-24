function placeHolder() {

    d3.json("../StarterCode/samples.json").then((data) => {
        //  Create the Traces

        //console.log(data.samples)


        //find the otu_ids in the samples data
        var dataSamples = data.samples

        var otu = dataSamples.map(data => data.otu_ids)

        var slice = otu.slice(0, 10)

        console.log(slice[0].slice(0, 10))

        // find the sample_values in the samples data
        var dataSamples = data.samples

        var sampleValues = dataSamples.map(data => data.sample_values)

        var slice2 = sampleValues.slice(0, 10)

        console.log(slice2[0].slice(0, 10))


        var trace1 = {
            x: slice[0].slice(0, 10),
            y: slice2[0].slice(0, 10),
            type: "bar",
            name: "Samples",
            orientation: "h"
        };

        // Create the data array for the plot
        var data = [trace1];

        // Define the plot layout
        var layout = {
            title: "Samples",
            xaxis: { title: "Samples" },
            yaxis: { title: "Samples" }
        };

        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("bar", data, layout);
    });

};


function metaData(patientInfo) {

    d3.json("../StarterCode/samples.json").then(function(data) {

        var demoInfo = data.metadata

        //var filterDemoInfo = demoInfo.filter(demoInfoObject => demoInfoObject.id == patientInfo)

        var sampleMetaData = d3.select("#sample-metadata")

        sampleMetaData.html("");

        Object.entries(filterDemoInfo).forEach(([key, value]) => sampleMetaData.append('p').append('small')
            .text(key + ": " + value));
    });

};

function buildMetadata(sample) {

    // @TODO: Complete the following function that builds the metadata panel

    // Use `d3.json` to fetch the metadata for a sample
    d3.json("/metadata/" + sample).then(function(response) {

        console.log(response);
        var metadata = response;

        // Use d3 to select the panel with id of `#sample-metadata`
        var panel = d3.select("#sample-metadata");

        // Use `.html("") to clear any existing metadata
        panel.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        Object.entries(metadata).forEach(([key, value]) => panel.append('p').append('small').text(key + ": " + value));

    });
}



function init() {

    var dropDown = d3.select("#selDataset")

    d3.json("../StarterCode/samples.json").then(function(data) {
        //console.log(data);

        //find the data for patient id
        var dataNames = data.names

        dataNames.forEach(names => {
            dropDown.append("option").text(names).property("values", names)
        })

        //Create a drop down
        placeHolder()

        //populate the demographic info

        //select the 



    })
};
init()