

var vg_1 = "average_deaths.json";
var vg_2 = "Map_viz.json";
var vg_3 = "multiple_histogram.json";
var vg_4 = "Most_least_deaths.json";


vegaEmbed("#viz1", vg_1).then(function (result) {

console.log( result.view.data('source_1') );

});


vegaEmbed("#viz2", vg_2).then(function (result) {
    document.getElementById("viz2-text").innerHTML += '<div id="viz2-text"> This shows that there is no particular relationship between the known (i.e. average) Generosity of a country and its Happiness level (i.e. indicated by the Happiness Class that the country belongs to)  </div>'
})
.catch(console.error);


vegaEmbed("#viz3", vg_3).then(function (result) {
});

vegaEmbed("#viz4", vg_4).then(function (result) {
});