//1. patient id for the json file
//init
function init() {

    var dropDown = d3.select("#selDataset")

    d3.json("../StarterCode/samples.json").then(function(data) {
        //console.log(data);
        //find the data for patient id
        var dataNames = data.names
        dataNames.forEach(names => {
            dropDown.append("option").text(names).property("values", names)
        })

        var firstSample = sampleName[0];
        buildGraph(firstSample);
        buildMetaData(firstSample);

        //Create a drop down
        placeHolder()

        //populate the demographic info


        //select the 



    })
};


//build graph
function buildGraph(pID) {

}

//build metafunction
function buildMetaData(pID) {

    d3.json("../StarterCode/samples.json").then(function(data) {
        var metadata = data.metadata;
        var resultArray = metadata.filter(filteredObj => filteredObj.id == pID)
        console.log(resultArray)
        var panel = d3.select("#sample-metadata")
    })
}

function optionChanged(newSample) {
    buildMetaData(newSample)
}

init()