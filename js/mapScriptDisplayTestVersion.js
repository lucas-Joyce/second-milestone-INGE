// Width and height
var width     =   545;
var height    =   676;

// UK scale
var UKscale = 2370,
    UKx = 580,
    UKy = 3800;

// PHILIPPINES scale
var PHscale = 2600,
    PHx = -5950,
    PHy = 1180;
// USA scale
var USscale = 700,
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

//dataDirect(); // direction to dataScriptDisplay.js

    // Create SVG
function createSVGmap() { // <----- leave this part alone 
    var favorite = [];
    $("input[name='countryA']:checked").each(function() {            
        favorite.push($(this).val());
    });

    if( document.getElementById("inputUkDisplayA").value == favorite) {
        $("#Nor").empty();
        
        var svgUK = d3.select("#Nor")
                //.append("div")
                //.classed("svg-container", true)
                .append("svg")
                //.attr("preserveAspectRatio", "xMinYMin meet")
                //.attr("viewBox", "0 0 " + width + " " + height)
                //.classed("svg-content-responsive", true)
                //.append("rect")
                //.classed("rect", true)
                .attr("width", width)
                .attr("height", height);

        d3.json("data/mapData/uk.json").then(function( UKdata ){

        var shires = topojson.feature(UKdata, UKdata.objects.Westminster_Parliamentary_Constituencies__December_2017__UK_BSC);

        var svgUKmap = svgUK.append("g")
                            .attr("class","svgUKmap")
                            .attr("transform","translate(-155,-730)");
                
        svgUKmap.selectAll("path")
                .data(shires.features )
                .enter()
                .append("path")
                .attr("class", "mouseClickButton")
                .attr("shires", function(d){return d.properties.PCON17NM;} )
                //.attr("partyResult", function(d){return d;})// problem issue to display--how??
                .attr("d", UKpath )
                .style("fill", "#d5fcbc")
                .style( "stroke", "#000")
                .style("stroke-width", "0.5px")
                .on("mouseover", function(d,i){
                    $(".shiresName").text($(this).attr("shires"));
                    //$(".partyName").text($(this).attr("partyResult"));
                    $(this).css("fill", "#ff0000");
                    
                })
                 .on("click", function(d,i){
                    var onThis = $(this);
                    onThis.css("fill", "#3b83f7");
                    var getThis = onThis.attr("shires");
                    //console.log(getThis);
                    onThisUkCsvCall(getThis);
                    //AllDataScriptDisplay(getThis);
                })
                .on("mouseout", function(d,i){
                    $(this).css("fill", "#d5fcbc");
                });
        });
        
        var boxGroup = svgUK.append("g")
                .attr("transform","translate(0,20)");
        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 10)
                .attr("class","countryName")
                .text(favorite);
        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 30)
                .attr("class","shiresName")
                .text("s");
        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 50)
                .attr("class","partyName")
                .text("p");
        

} else if (document.getElementById("inputPhilDisplayA").value == favorite) {
        $("#Nor").empty();

        var svgPH = d3.select("#Nor")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

        d3.json("data/mapData/provinces.json").then(function(PHdata){

        var provinces = topojson.feature(PHdata, PHdata.objects.provsh);

        var svgPHmap = svgPH.append("g")
                            .attr("class","svgPHmap")
                            .attr("transform","translate(680,-300)");

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
                .on("click", function(d,i){
                    var onThis = $(this);
                    onThis.css("fill", "#3b83f7");
                    var getThis = onThis.attr("province");
                    //console.log(getThis);
                    onThisPhilCsvCall(getThis);
                    //AllDataScriptDisplay(getThis);
                })
                .on("mouseout", function(d,i){
                    $(this).css("fill", "#d5fcbc");
                });
        });

        var boxGroup = svgPH.append("g")
                .attr("transform","translate(0,20)");

        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 10)
                .attr("class","countryName")
                .text(favorite);

        boxGroup.append("text") 
                .attr("x", 0)
                .attr("y", 40)
                .attr("class","provinceName")
                .text("x");




} else  if (document.getElementById("inputUsaDisplayA").value == favorite) {
        $("#Nor").empty();

        var svgUS = d3.select("#Nor")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

        d3.json("data/mapData/us.json").then(function(USdata){
            //var Us = topojson.feature(USdata, USdata.objects.??????); <----- us.json has no objects.
            var svgUSmap = svgUS.append("g")
                    .attr("class","svgUSmap")
                    .attr("transform","translate(-270,0)");

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
                    .on("click", function(d,i){
                    var onThis = $(this);
                    onThis.css("fill", "#3b83f7");
                    var getThis = onThis.attr("state");
                    //console.log(getThis);
                    onThisUsaCsvCall(getThis);
                    //AllDataScriptDisplay(getThis);
                    })
                    .on("mouseout", function(d,i){
                        $(this).css("fill", "#d5fcbc");
                    });
                    });
        var boxGroup = svgUS.append("g")
                .attr("class","svgUSmap")
                .attr("transform","translate(0,20)");

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






