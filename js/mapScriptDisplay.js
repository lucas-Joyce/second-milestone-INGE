// Width and height
var width     =   800;
var height    =   1000;

// UK scale
var UKscale = 2800,
    UKx = 580,
    UKy = 3800;

// PHILIPPINES scale
var PHscale = 3000,
    PHx = -5950,
    PHy = 1180;
// USA scale
var USscale = 1200,
    USx = 550,
    USy = 450;

// //projection
var UKprojection = d3.geoMercator()
    .scale(UKscale)
    .translate([UKx,UKy])
var UKpath = d3.geoPath()
    .projection(UKprojection);

var PHprojection = d3.geoMercator()
    .scale(PHscale)
    .translate([PHx, PHy])
var PHpath = d3.geoPath()
    .projection(PHprojection);

var USprojection = d3.geoAlbersUsa()
    .scale(USscale)
    .translate([USx,USy])
var USpath = d3.geoPath()
    .projection(USprojection);

function dataDirect(){}; // direction to dataScriptDisplay.js

    // Create SVG
function secondary() { // <----- leave this part alone 
    var favorite = [];
    $("input[name='countryA']:checked").each(function() {            
        favorite.push($(this).val());
    });

    if( document.getElementById("inputUkDisplayA").value == favorite) {
        $("#Nor").empty();
        var svgUK = d3.select("#Nor")
                .append("svg")
                .attr("width", width)
                .attr("height", height);
        d3.json("data/mapData/westminsteratwgs84.json").then(function( UKdata){
        var shires = topojson.feature(UKdata, UKdata.objects.Westminster_Parliamentary_Constituencies__December_2017__UK_BSC);
        var svgUKmap = svgUK.append("g").attr("class","svgUKmap");
        svgUKmap.selectAll("path")
                .data(shires.features)
                .enter()
                .append("path")
                .attr("shires", function(d){
                    return d.properties.PCON17NM;
                })
                .attr("d", UKpath )
                .style("fill", "#d5fcbc")
                .style( "stroke", "#000")
                .style("stroke-width", "0.5px")
                .on("mouseover", function(d,i){
                    //console.log(d.properties.PCON17NM);
                    $(".shiresName").text($(this).attr("shires"));
                    $(this).css("fill", "#ff0000");
                })
                .on("mouseout", function(d,i){
                    $(this).css("fill", "#d5fcbc");
                });
        });
        var boxGroup = svgUK.append("g")
                .attr("transform","translate(10,200)");
        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 40)
                .attr("class","countryName")
                .text(favorite);
        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 70)
                .attr("class","shiresName")
                .text(" ");

} else if (document.getElementById("inputPhilDisplayA").value == favorite) {
        $("#Nor").empty();

        var svgPH = d3.select("#Nor")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

        d3.json("data/mapData/provinces.json").then(function(PHdata){
        var provinces = topojson.feature(PHdata, PHdata.objects.provsh);
        var svgPHmap = svgPH.append("g").attr("class","svgPHmap");
        svgPHmap.selectAll("path")
                .data(provinces.features)
                .enter()
                .append("path")
                .attr("class", function(d){
                    return d.properties.NAME_1.replace(/ /g,'')
                    .replace(/[^A-Za-z0-9_]/g,"")
                    .toLowerCase()+" province";
                })
                .attr("province", function(d){
                    return d.properties.PROVINCE;
                })
                .attr("d", PHpath )
                .style("fill", "#d5fcbc")
                .style( "stroke", "#000")
                .style("stroke-width", "0.5px")
                .on("mouseover", function(d,i){
                    //console.log(d.properties.PROVINCE);
                    $(".provinceName").text($(this).attr("province"));
                    $(this).css("fill", "#ff0000");
                })
                .on("mouseout", function(d,i){
                    $(this).css("fill", "#d5fcbc");
                });
        });

        var boxGroup = svgPH.append("g")
                .attr("transform","translate(10,200)");
        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 40)
                .attr("class","countryName")
                .text(favorite);
        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 70)
                .attr("class","provinceName")
                .text(" ");




} else  if (document.getElementById("inputUsaDisplayA").value == favorite) {
        $("#Nor").empty();

        var svgUS = d3.select("#Nor")
                .append("svg")
                .attr("width", height)
                .attr("height", width);

        d3.json("data/mapData/us.json").then(function(USdata){
            //var Us = topojson.feature(USdata, USdata.objects.??????); <----- us.json has no objects.
            var svgUSmap = svgUS.append("g")
                    .attr("class","svgUSmap");
            svgUSmap.selectAll("path")
                    .data(USdata.features)
                    .enter()
                    .append("path")
                    .attr("state", function(d){
                        return d.properties.name;
                    })
                    .attr("d", USpath )
                    .style("fill", "#d5fcbc")
                    .style( "stroke", "#000")
                    .style("stroke-width", "0.5px")
                    .on("mouseover", function(d,i){
                        //console.log(d.properties.PROVINCE);
                        $(".stateName").text($(this).attr("state"));
                        $(this).css("fill", "#ff0000");
                    })
                    .on("mouseout", function(d,i){
                        $(this).css("fill", "#d5fcbc");
                    });
            });
        var boxGroup = svgUS.append("g")
                .attr("class","svgUSmap")
                .attr("transform","translate(10,200)");

        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 40)
                .attr("class","countryName")
                .text(favorite);

        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 70)
                .attr("class","stateName")
                .text(" ");

        // USdata.features.forEach(function(e,i){
        //     boxGroup.append("text") 
        //             .attr("x", 0)
        //             .attr("y", 70)
        //             .attr("class","proviceName")
        //             .text(e.properties.name); 
        //})
    };
};

//=========================================testing ground=======================================//

// Parsing






