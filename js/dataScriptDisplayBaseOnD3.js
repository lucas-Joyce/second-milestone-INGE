//   ===============   this is CHART.JS and D3.JS ======================  //

// =============== from basicWorkingOnCsv.JS ================= //
var makeCandidateA1; // <=== "A1" file dir as in selected countryA Data
var makeConstituencyA1; // <=== "A1" file dir as in selected countryA Data
var makeCandidateA2; // <=== "A2 if "#extraCompareSwitch" is checked file dir as in selected countryA Data
var makeConstituencyA2; // <=== "A2 if "#extraCompareSwitch" is checked file dir as in selected countryA Data

// =============== from mapStripDisplay.JS ================= //
var onThisUsaCsvCall; // <=== "$(this)" as in selected "state"
var onThisPhilCsvCall; // <=== "$(this)" as in selected "province"
var onThisUkCsvCall; // <=== "$(this)" as in selected "shires"

//============================ A sections ================================//
$("input[name='countryA']").click("checked", function (favorite) {
    favorite = $(this).val();
    if ($("#inputUkDisplayA").val() == favorite) {
        makeCandidateA1 = function (candidateA1) {
            //var numberOfRows = candidateA1.length;
            //var columns = Object.keys(candidateA1[0]);
            //var numberOfColumns = columns.length;
            //console.log("This has " + numberOfColumns + " columns.");
            //console.log("This has " + numberOfRows + " rows.");
            //console.log(candidateA1);                        //<== from Csv index.
            onThisUkCsvCall = function (getThis) {

                var thisLabelConstituency = [];
                thisLabelConstituency.push(getThis);
                //console.log("Selected onClick is \n" + getThis);    //<== from Csv Call.
                $("#CandidateA1andA2").empty();

                // set the dimensions and margins of the graph
                // var margin = {top: 20, right: 30, bottom: 40, left: 90},
                // width = 460 - margin.left - margin.right,
                // height = 400 - margin.top - margin.bottom;

                // Create SVG Element
                //var margin = {top: 10, right: auto, bottom: 10, left: auto},

                // set dimension of whole svg
                var chart_width = 1005;
                var chart_height = 400;

                // set dimesions within 1005x400
                var bar_padding = 50;
                var titleHeightLabelPos = 20;
                var titleWidthLabel = 50;
                var legendLabelVerzBuffer = 10;
                var textTicksCandidateNames = 100;
                var scaleBarWidthMax = 650;
                var legendLabelVerzPos = textTicksCandidateNames + scaleBarWidthMax + legendLabelVerzBuffer;

                var margin = {
                    top: 20, // <== heightLabelpos
                    right: 100, // <== textTicksCandidateNames
                    bottom: 15,
                    left: 25
                };
                var svg = d3.select("#CandidateA1andA2")
                    .append('svg')
                    .attr('width', chart_width)
                    .attr('height', chart_height);


                // var svg = d3.select("#my_dataviz")
                //             .append("svg")
                //             .attr("width", width + margin.left + margin.right)
                //             .attr("height", height + margin.top + margin.bottom)
                //             .append("g")
                //             .attr("transform",
                //                 "translate(" + margin.left + "," + margin.top + ")");



                // Create Data map
                // var candimap = candidateA1.map(function(d) {
                //      return {
                //         ons_id: d.ons_id,
                //         ons_region_id: d.ons_region_id,
                //         constituency_name: d.constituency_name,
                //         county_name: d.county_name,
                //         region_name: d.region_name,
                //         country_name: d.country_name,
                //         constituency_type: d.constituency_type,
                //         party_name: d.party_name,
                //         party_abbreviation: d.party_abbreviation,
                //         firstname: d.firstname,
                //         surname: d.surname,
                //         gender: d.gender,
                //         sitting_mp: d.sitting_mp,
                //         former_mp: d.former_mp,
                //         votes: d.votes,
                //         share: d.share,
                //         change: d.change
                //     }
                // });

                // ==================================================================== //

                var partyNumberArr = []; //console.log(partyNumberArr);
                var thisPartyNameArr = []; //console.log(thisPartyNameArr);
                var inde1and2and3 = []; //console.log(inde1and2and3);
                var oth1and2and3 = []; //console.log(oth1and2and3);
                var partyColor_Bgc = []; //console.log(partyColor_Bgc);
                var partyName_Label = []; //console.log(partyName_Label);
                var numberOfVotes_Data = []; //console.log(numberOfVotes_Data);
                var candidateNames_Data = []; //console.log(candidateNames_Data);

                for (var i = 0; i < candidateA1.length; i++) {
                    if (getThis === candidateA1[i].constituency_name) {
                        partyNumberArr.push(i);
                        thisPartyNameArr.push(candidateA1[i].party_name);
                        var PNA = candidateA1[i].party_name;
                        if (PNA === "Conservative") {
                            var conNumberRow = i;
                            var con = PNA;
                            var conData = candidateA1[i].votes;
                            var conFname = candidateA1[i].firstname;
                            var conSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#0004ff");
                            partyName_Label.push(con);
                            numberOfVotes_Data.push(parseInt(conData));
                            candidateNames_Data.push(conFname + " " + conSname);
                            // console.log("Row number " + conNumberRow + " is " + con);
                        } else
                        if (PNA === "Labour") {
                            var labNumberRow = i;
                            var lab = PNA;
                            var labData = candidateA1[i].votes;
                            var labFname = candidateA1[i].firstname;
                            var labSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#ff0000");
                            partyName_Label.push(lab);
                            numberOfVotes_Data.push(parseInt(labData));
                            candidateNames_Data.push(labFname + " " + labSname);
                            // console.log("Row number " + labNumberRow + " is " + lab);
                        } else
                        if (PNA === "Liberal Democrat") {
                            var lidNumberRow = i;
                            var lid = PNA;
                            var lidData = candidateA1[i].votes;
                            var lidFname = candidateA1[i].firstname;
                            var lidSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#FAA61A");
                            partyName_Label.push(lid);
                            numberOfVotes_Data.push(parseInt(lidData));
                            candidateNames_Data.push(lidFname + " " + lidSname);
                            // console.log("Row number " + lidNumberRow + " is " + lid);
                        } else
                        if (PNA === "Scottish National Party") {
                            var snpNumberRow = i;
                            var snp = PNA;
                            var snpData = candidateA1[i].votes;
                            var snpFname = candidateA1[i].firstname;
                            var snpSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#ffff00");
                            partyName_Label.push(snp);
                            numberOfVotes_Data.push(parseInt(snpData));
                            candidateNames_Data.push(snpFname + " " + snpSname);
                            // console.log("Row number " + snpNumberRow + " is " + snp);
                        } else
                        if (PNA === "Green") {
                            var greNumberRow = i;
                            var gre = PNA;
                            var greData = candidateA1[i].votes;
                            var greFname = candidateA1[i].firstname;
                            var greSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#14ff08");
                            partyName_Label.push(gre);
                            numberOfVotes_Data.push(parseInt(greData));
                            candidateNames_Data.push(greFname + " " + greSname);
                            // console.log("Row number " + greNumberRow + " is " + gre);
                        } else
                        if (PNA === "Plaid Cymru") {
                            var plcNumberRow = i;
                            var plc = PNA;
                            var plcData = candidateA1[i].votes;
                            var plcFname = candidateA1[i].firstname;
                            var plcSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#128a30");
                            partyName_Label.push(plc);
                            numberOfVotes_Data.push(parseInt(plcData));
                            candidateNames_Data.push(plcFname + " " + plcSname);
                            // console.log("Row number " + plcNumberRow + " is " + plc);
                        } else
                        if (PNA === "Brexit Party") {
                            var brxNumberRow = i;
                            var brx = PNA;
                            var brxData = candidateA1[i].votes;
                            var brxFname = candidateA1[i].firstname;
                            var brxSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#39f1f7");
                            partyName_Label.push(brx);
                            numberOfVotes_Data.push(parseInt(brxData));
                            candidateNames_Data.push(brxFname + " " + brxSname);
                            // console.log("Row number " + brxNumberRow + " is " + brx);
                        } else
                        if (PNA === "Sinn Fein") {
                            //d.party_abbreviation
                            var sfNumberRow = i;
                            var sf = PNA;
                            var sfData = candidateA1[i].votes;
                            var sfFname = candidateA1[i].firstname;
                            var sfSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#128a30");
                            partyName_Label.push(sf);
                            numberOfVotes_Data.push(parseInt(sfData));
                            candidateNames_Data.push(sfFname + " " + sfSname);
                            // console.log("Row number " + sfNumberRow + " is " + sf);
                        } else
                        if (PNA === "Democratic Unionist Party") {
                            //d.party_abbreviation
                            var dupNumberRow = i;
                            var dup = PNA;
                            var dupData = candidateA1[i].votes;
                            var dupFname = candidateA1[i].firstname;
                            var dupSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#ff0000");
                            partyName_Label.push(dup);
                            numberOfVotes_Data.push(parseInt(dupData));
                            candidateNames_Data.push(dupFname + " " + dupSname);
                            // console.log("Row number " + sfNumberRow + " is " + sf);
                        } else
                        if (PNA === "Ulster Unionist Party") {
                            //d.party_abbreviation
                            var uupNumberRow = i;
                            var uup = PNA;
                            var uupData = candidateA1[i].votes;
                            var uupFname = candidateA1[i].firstname;
                            var uupSname = candidateA1[i].surname;
                            partyColor_Bgc.push("#39f1f7");
                            partyName_Label.push(uup);
                            numberOfVotes_Data.push(parseInt(uupData));
                            candidateNames_Data.push(uupFname + " " + uupSname);
                            // console.log("Row number " + sfNumberRow + " is " + sf);
                        } else
                        if (PNA === "Independent") {
                            var indeNumberRow = i;
                            inde1and2and3.push(indeNumberRow);
                            var arrCount = inde1and2and3.length;
                            if (arrCount == 1) {
                                var inde1NumberRow = i;
                                var ind1 = PNA;
                                var ind1Data = candidateA1[inde1NumberRow].votes;
                                var ind1Fname = candidateA1[inde1NumberRow].firstname;
                                var ind1Sname = candidateA1[inde1NumberRow].surname;
                                partyColor_Bgc.push("#babfbf");
                                partyName_Label.push(ind1);
                                numberOfVotes_Data.push(parseInt(ind1Data));
                                candidateNames_Data.push(ind1Fname + " " + ind1Sname);
                                //console.log("Row number " + inde1NumberRow + " is " + ind1);
                            } else
                            if (arrCount == 2) {
                                var inde2NumberRow = i;
                                var ind2 = PNA;
                                var ind2Data = candidateA1[inde2NumberRow].votes;
                                var ind2Fname = candidateA1[inde2NumberRow].firstname;
                                var ind2Sname = candidateA1[inde2NumberRow].surname;
                                partyColor_Bgc.push("#babfbf");
                                partyName_Label.push(ind2);
                                numberOfVotes_Data.push(parseInt(ind2Data));
                                candidateNames_Data.push(ind2Fname + " " + ind2Sname);
                                //console.log("Row number " + inde2NumberRow + " is " + ind2);
                            } else
                            if (arrCount == 3) {
                                var inde3NumberRow = i;
                                var ind3 = PNA;
                                var ind3Data = candidateA1[inde3NumberRow].votes;
                                var ind3Fname = candidateA1[inde3NumberRow].firstname;
                                var ind3Sname = candidateA1[inde3NumberRow].surname;
                                partyColor_Bgc.push("#babfbf");
                                partyName_Label.push(ind3);
                                numberOfVotes_Data.push(parseInt(ind3Data));
                                candidateNames_Data.push(ind3Fname + " " + ind3Sname);
                                //console.log("Row number " + inde3NumberRow + " is " + ind3);
                            }
                        } else {
                            var othNumberRow = i;
                            oth1and2and3.push(othNumberRow);
                            var arrCountoth = oth1and2and3.length;

                            if (arrCountoth === 1) {
                                var oth1NumberRow = i;
                                var oth1 = PNA;
                                var oth1Data = candidateA1[oth1NumberRow].votes;
                                var oth1Fname = candidateA1[oth1NumberRow].firstname;
                                var oth1Sname = candidateA1[oth1NumberRow].surname;
                                partyColor_Bgc.push("#848787");
                                partyName_Label.push(oth1);
                                numberOfVotes_Data.push(parseInt(oth1Data));
                                candidateNames_Data.push(oth1Fname + " " + oth1Sname);
                            } else
                            if (arrCountoth === 2) {
                                var oth2NumberRow = i;
                                var oth2 = PNA;
                                var oth2Data = candidateA1[oth2NumberRow].votes;
                                var oth2Fname = candidateA1[oth2NumberRow].firstname;
                                var oth2Sname = candidateA1[oth2NumberRow].surname;
                                partyColor_Bgc.push("#848787");
                                partyName_Label.push(oth2);
                                numberOfVotes_Data.push(parseInt(oth2Data));
                                candidateNames_Data.push(oth2Fname + " " + oth2Sname);
                            } else
                            if (arrCountoth === 3) {
                                var oth3NumberRow = i;
                                var oth3 = PNA;
                                var oth3Data = candidateA1[oth3NumberRow].votes;
                                var oth3Fname = candidateA1[oth3NumberRow].firstname;
                                var oth3Sname = candidateA1[oth3NumberRow].surname;
                                partyColor_Bgc.push("#848787");
                                partyName_Label.push(oth3);
                                numberOfVotes_Data.push(parseInt(oth3Data));
                                candidateNames_Data.push(oth3Fname + " " + oth3Sname);
                            }
                        }

                    }
                }

                { // === console.logs === //
                    //console.log("Row number " + conNumberRow + " is " + con + " party and the Name is " + conFname, conSname + " and the result is " + conData);
                    // console.log("Row number " + labNumberRow + " is " + lab + " party and the Name is " + labFname, labSname);
                    // console.log("Row number " + lidNumberRow + " is " + lid + " party and the Name is " + lidFname, lidSname);
                    // console.log("Row number " + snpNumberRow + " is " + snp + " party and the Name is " + snpFname, snpSname);
                    // console.log("Row number " + greNumberRow + " is " + gre + " party and the Name is " + greFname, greSname);
                    // console.log("Row number " + plcNumberRow + " is " + plc + " party and the Name is " + plcFname, plcSname);
                    // console.log("Row number " + brxNumberRow + " is " + brx + " party and the Name is " + brxFname, brxSname);
                    // console.log("Row number " + inde1NumberRow + " is " + ind1 + " party and the Name is " + ind1Fname, ind1Sname);
                    // console.log("Row number " + inde2NumberRow + " is " + ind2 + " party and the Name is " + ind2Fname, ind2Sname);
                    // console.log("Row number " + inde3NumberRow + " is " + ind3 + " party and the Name is " + ind3Fname, ind3Sname);
                    // console.log("Row number " + oth1NumberRow + " is " + oth1 + " party and the Name is " + oth1Fname, oth1Sname);
                    // console.log("Row number " + oth2NumberRow + " is " + oth2 + " party and the Name is " + oth2Fname, oth2Sname);
                    // console.log("Row number " + oth3NumberRow + " is " + oth3 + " party and the Name is " + oth3Fname, oth3Sname);

                    // console.log(conData, labData, lidData);

                    // console.log(PNA);
                    // console.log(partyNumberArr);
                    // console.log(thisPartyNameArr);
                    // console.log(inde1and2);
                    // console.log(arrCount);
                }

                // makeConstituencyA1 = function(constituencyA1) { // <== do this later for 100 voted
                //     var votesShare = [];
                //     for (var i =0; i < constituencyA1.length; i++) {

                //     }
                // };

                //  var personName_Labels   = [conFname +" "+ conSname, labFname +" "+ labSname, lidFname +" "+ lidSname, snpFname +" "+ snpSname, greFname +" "+ greSname, brxFname +" "+ brxSname, plcFname +" "+ plcSname, oth1Fname +" "+ oth1Sname];

                //== Title of Contituency ==//
                svg.selectAll("titleofshires")
                    .data(thisLabelConstituency)
                    .enter()
                    .append("text")
                    .attr("y", titleHeightLabelPos)
                    .attr("x", chart_width / 2)
                    .style("fill", "#000")
                    .text(thisLabelConstituency)
                    .attr("text-anchor", "middle")
                    .style("font-size", "17px")
                    .style("font-weight", "bold");

                //==  Party legends ==//
                // var labelOrdinal = d3.scaleOrdinal()
                //                       .domain(partyColor_Bgc)
                //                       .range(partyName_Label);
                var color = d3.scaleOrdinal()
                    .domain(partyName_Label)
                    .range(partyColor_Bgc);
                var namesOrdinal = d3.scaleOrdinal()
                    .domain(numberOfVotes_Data)
                    .range(candidateNames_Data);
                var votesOrdinal = d3.scaleOrdinal()
                    .domain(candidateNames_Data)
                    .range(numberOfVotes_Data);
                var barColorOrdinal = d3.scaleOrdinal()
                    .domain(numberOfVotes_Data)
                    .range(partyColor_Bgc);

                // party legend details label
                svg.selectAll("mydots") // <==  Add one dot in the legend for each name.
                    .data(partyColor_Bgc)
                    .enter()
                    .append("circle")
                    .attr("cx", (legendLabelVerzPos))
                    .attr("cy", function (d, i) {
                        return 60 + i * 25
                    }) // 100 is where the first dot appears. 25 is the distance between dots
                    .attr("r", 7)
                    .style("fill", function (d) {
                        return d
                    });

                svg.selectAll("mylabels") // <== Add one dot in the legend for each name.
                    .data(partyName_Label)
                    .enter()
                    .append("text")
                    .attr("x", (legendLabelVerzPos + (legendLabelVerzBuffer * 2)))
                    .attr("y", function (d, i) {
                        return 60 + i * 25
                    }) // 100 is where the first dot appears. 25 is the distance between dots
                    .style("fill", "#000") //function(d){ return color(d)})
                    .text(function (d) {
                        return d
                    })
                    .attr("text-anchor", "right")
                    .style("alignment-baseline", "middle");

                // Create Scales

                // for 0 to 100%
                // var scaledByOneHundredData = [];
                // for (var i = 0; i < numberOfVotes_Data.length; i++) {
                //       scaledByOneHundredData[i] = numberOfVotes_Data[i] / 100;
                //     }
                //console.log(scaledByOneHundredData);
                //var max = d3.max(arr);
                //var scale = d3.scale.linear().domain([0, max]).range([0, 100]);
                // X axis Scale
                //var dataMin = d3.min(scaledByOneHundredData);
                //var dataMax = d3.max(scaledByOneHundredData);

                //var extent = d3.extent(numberOfVotes_Data);

                // ===== Create Scale data ===== //
                var prescaler = d3.scaleLinear()
                    .domain([0, 100])
                    .range([0, (scaleBarWidthMax)]);
                var xScale = d3.scaleLinear()
                    .domain([0, d3.max(numberOfVotes_Data)]).nice()
                    .range([0, (scaleBarWidthMax)]);
                // Y axis Scale
                var yScale = d3.scaleBand()
                    .domain(d3.range(numberOfVotes_Data.length)) //( scaledByOneHundredData.length )
                    .rangeRound([(chart_height - titleHeightLabelPos) - bar_padding, 0]) // check
                    .paddingInner(0.05);
                // X axis
                var xAxisLine = d3.axisBottom(prescaler)
                    .ticks(11)
                    .tickFormat(
                        function (d) {
                            return d + '%';
                        });
                svg.append("g")
                    .attr("class", "x-AxisLine")
                    .attr("transform", "translate(" + (textTicksCandidateNames) + ", " + (chart_height - bar_padding) + " )")
                    .call(xAxisLine)
                    .selectAll("text")
                    .attr("transform", "translate(-10,0)rotate(-45)")
                    .style("text-anchor", "end");

                // ================================================ //
                //   var x = d3.scaleLinear()
                //   .domain([0, 13000])
                //   .range([ 0, width]);
                // svg.append("g")
                //   .attr("transform", "translate(0," + height + ")")
                //   .call(d3.axisBottom(x))
                //   .selectAll("text")
                //     .attr("transform", "translate(-10,0)rotate(-45)")
                //     .style("text-anchor", "end");
                // ================================================ //




                // Y axis
                var yAxisLine = d3.axisLeft(yScale)
                    .ticks(candidateNames_Data.length)
                    .tickFormat(function (d) {
                        for (var i = 0; i < candidateNames_Data.length; i++) {
                            return candidateNames_Data[d];
                        }
                    });

                svg.append("g")
                    .attr("class", "y-AxisLine")
                    .attr("transform", "translate(" + (textTicksCandidateNames) + "," + (titleHeightLabelPos) + ")") // <== position of Y-line axis
                    .call(yAxisLine);

                // ====== Create Bars charts ===== //
                svg.selectAll("myRect")
                    .data(numberOfVotes_Data)
                    .enter()
                    .append("rect")
                    .attr("colorData", function (d) {
                        return barColorOrdinal(d)
                    })
                    .attr("candiData", function (d) {
                        return namesOrdinal(d)
                    })
                    .attr("votesData", function (d) {
                        return votesOrdinal(d)
                    })
                    .attr("x", 100)
                    .attr("y", function (d, i) {
                        return titleHeightLabelPos + yScale(i);
                    })
                    .attr("width", function (d) {
                        return xScale(d);
                    })
                    .attr("height", yScale.bandwidth())
                    .style("fill", function (d) {
                        return barColorOrdinal(d)
                    })

                    .on('mouseover', function () {
                        d3.select(this).transition().style('fill', '#80ffffff');
                    })

                    .on('mouseout', function () {
                        d3.select(this).transition().style('fill', function (d) {
                                return barColorOrdinal(d)
                            }),
                            myRectToolTip.transition().delay(2000).style("visibility", "hidden"),
                            toolTipTexts.transition().delay(2000).style("visibility", "hidden"),
                            toolTipVotes.transition().delay(2000).style("visibility", "hidden");
                    })

                    .on("click", function () { // <<============ RETURN HERE WORK TBC
                        d3.select(this).transition().style("fill", "#BFffffff"),

                            myRectToolTip.transition().style("visibility", "visible"),
                            toolTipTexts.transition().style("visibility", "visible"),
                            toolTipVotes.transition().style("visibility", "visible"),
                            myRectToolTip.transition().style("fill-opacity", .2),
                            myRectToolTip.transition().style("fill", $(this).attr("colorData")),
                            myRectToolTip.transition().style("stroke", $(this).attr("colorData")),
                            toolTipTexts.transition().text($(this).attr("candiData")),
                            toolTipVotes.transition().text($(this).attr("votesData"));

                        //console.log( this );
                    });

                // Create Tooltip box
                var toolTipWidth = 200;
                var toolTipHeight = 180;
                var myRectToolTip = svg.append("rect")
                    .attr("id", "rectBasicTooltip")
                    .attr("rx", 8)
                    .attr("ry", 8)
                    .attr("x", (legendLabelVerzPos + (legendLabelVerzBuffer * 2)))
                    .attr("y", 200)
                    .attr("width", toolTipWidth) //< == **
                    .attr("height", toolTipHeight)
                    .style("fill-opacity", .2)
                    //.style("stroke-opacity", .5)
                    .style("stroke-width", 5) //<== ** compestate thickness of stroke-width to "toolTipWidth"
                    //.style("stroke", "black")
                    //.style("fill",  "grey" )//"#69b3a2") // need this to be normal fill color
                    // need to add border color as normal
                    .style("visibility", "hidden");

                // name of candidate title-text
                var toolTipTexts = svg.append("text")
                    .attr("id", "tooltipTexts")
                    .attr("y", 220 + titleHeightLabelPos)
                    .attr("x", (legendLabelVerzPos + (toolTipWidth / 2) + 20)) // 880
                    .attr("text-anchor", "middle")
                    .style("font-size", "17px")
                    .style("font-weight", "bold")
                    .style("fill", "#000");

                // candidate total vote result title-text 
                var toolTipVotes = svg.append("text")
                    .attr("id", "toolTipVotes")
                    .attr("y", 230 + (titleHeightLabelPos * 3))
                    .attr("x", (legendLabelVerzPos + (toolTipWidth / 2) + 20))
                    .attr("text-anchor", "middle")
                    .style("font-size", "40px")
                    .style("font-weight", "bold")
                    .style("fill", "#000");



                // svg.append("rect")
                // .attr("id", "rectBasicTooltip")
                // .attr("x", (legendLabelVerzPos + (legendLabelVerzBuffer*2)) )
                // .attr("y", 200)
                // .attr("width", 250)
                // .attr("height", 180)
                // .attr("fill", "#69b3a2")
                // //.style("visibility", "hidden");

                //test samples
                //svg.selectAll("titleofshires")
                // .data(thisLabelConstituency)
                // .enter()
                // .append("text")
                // .attr("y", titleHeightLabelPos)
                // .attr("x", chart_width/2 )
                // .style("fill", "#000")
                // .text(thisLabelConstituency)
                // .attr("text-anchor", "top")
                // .style("font-size", "17px")
                // .style("font-weight", "bold");

                // Start by creating the svg area
                // var svg = d3.select("#my_dataviz")
                //   .append("svg")
                //     .attr("width", 400)
                //     .attr("height", 400)

                // Append a circle
                // svg.append("rect")
                //   .attr("id", "rectBasicTooltip")
                //   .attr("x", (legendLabelVerzPos + (legendLabelVerzBuffer*2)) )
                //   .attr("y", 200)
                //   .attr("width", 250)
                //   .attr("height", 180)
                //   .attr("fill", "#69b3a2")
                //.style("visibility", "hidden");

                // create a tooltip
                // var tooltip = d3.select("#rectBasicTooltip")
                //   .append("div")
                //.style("position", "absolute")
                //.style("visibility", "hidden")
                //.text("I'm a circle!");

                //
                // d3.select("#rectBasicTooltip")
                //   .on("mouseover", function(){return tooltip.style("visibility", "visible");})
                //   .on("mousemove", function(){return tooltip.style("top", (event.pageY-800)+"px").style("left",(event.pageX-800)+"px");})
                //   .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
                //Run data through this pre-scaling.
                // prescale = d3.scale.linear()
                //                    .domain([dataMin, dataMax])
                //                    .range([0,1])

                // //Use this y-scale in place of another potential y-scaling function.

                // yScale = d3.scale.linear()
                //                  .domain([0, 1])
                //                  .range([canvasHeightLow, canvasHeightHigh]);


                // //Afterwards, you can use this yScale to build your yAxis

                // formatter = d3.format(".0%");

                // yAxis = d3.svg.axis().orient("left")
                //                      .scale(yScale)
                //                      .tickFormat(formatter)

                // svg.selectAll( 'rect' )
                //         .data( numberOfVotes_Data )
                //         .enter()
                //         .append( 'rect' )
                //         .attr( 'x', function( d, i ) {
                //             return x_scale(i); })
                //         .attr( 'y', function(d ) {
                //             return chart_height - y_scale( d ); })
                //         .attr( 'width', x_scale.bandwidth() )
                //         .attr( 'height', function( d ){
                //             return y_scale( d );
                //         })
                //         .attr( 'fill', '#7ED26D' )
                //         // .append("title")         ///// this is one example
                //         // .text(function(d){
                //         //     return d;
                //         // }) 

                //         .on("mouseover", function( d ){
                //             var x       =   parseFloat( d3.select(this).attr("x") ) +
                //                             x_scale.bandwidth() / 2;
                //             var y       =   parseFloat( d3.select(this).attr("y") ) /
                //                             2 + chart_height / 2;

                //             d3.select("#tooltip")
                //                 .style("left", x + "px" )
                //                 .style( "top", y + "px" )
                //                 .style( "display", "block" )
                //                 .text( d );

                //         })
                //         .on("mouseout", function(){
                //             d3.select("#tooltip")
                //                 .style("display", "none");
                //         });





                //         // set the dimensions and margins of the graph
                // var margin = {top: 20, right: 30, bottom: 40, left: 90},
                // width = 460 - margin.left - margin.right,
                // height = 400 - margin.top - margin.bottom;

                // // append the svg object to the body of the page
                // var svg = d3.select("#my_dataviz")
                // .append("svg")
                // .attr("width", width + margin.left + margin.right)
                // .attr("height", height + margin.top + margin.bottom)
                // .append("g")
                // .attr("transform",
                //       "translate(" + margin.left + "," + margin.top + ")");

                // // Parse the Data
                // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", function(data) {

                // // Add X axis
                // var x = d3.scaleLinear()
                // .domain([0, 13000])
                // .range([ 0, width]);
                // svg.append("g")
                // .attr("transform", "translate(0," + height + ")")
                // .call(d3.axisBottom(x))
                // .selectAll("text")
                //   .attr("transform", "translate(-10,0)rotate(-45)")
                //   .style("text-anchor", "end");

                // // Y axis
                // var y = d3.scaleBand()
                // .range([ 0, height ])
                // .domain(data.map(function(d) { return d.Country; }))
                // .padding(.1);
                // svg.append("g")
                // .call(d3.axisLeft(y))

                // //Bars
                // svg.selectAll("myRect")
                // .data(data)
                // .enter()
                // .append("rect")
                // .attr("x", x(0) )
                // .attr("y", function(d) { return y(d.Country); })
                // .attr("width", function(d) { return x(d.Value); })
                // .attr("height", y.bandwidth() )
                // .attr("fill", "#69b3a2")


                // // .attr("x", function(d) { return x(d.Country); })
                // // .attr("y", function(d) { return y(d.Value); })
                // // .attr("width", x.bandwidth())
                // // .attr("height", function(d) { return height - y(d.Value); })
                // // .attr("fill", "#69b3a2")

                // })






            }
        } // <== end of makeCandidateA1
    } else if (document.getElementById("inputPhilDisplayA").value == favorite) {
        makeConstituencyA1 = function (players) {
            onThisPhilCsvCall = function (getThis) {

            }
        }
    } else if (document.getElementById("inputUsaDisplayA").value == favorite) {
        makeConstituencyA1 = function (players) {
            onThisUsaCsvCall = function (getThis) {

            }
        }
    }
}); // <===== End of A1 and A2 checkboxes



//============================ B section ================================//
var makeConstituencyB1;
var makeCandidateB1;
var makeConstituencyB2;
var makeCandidateB2;

var favoriteB = [];
$("input[name='countryB']:checked").each(function () {
    favoriteB.push($(this).val());
});
if (document.getElementById("inputUkDisplayB").value == favoriteB) {} else if (document.getElementById("inputPhilDisplayB").value == favoriteB) {} else if (document.getElementById("inputUsaDisplayB").value == favoriteB) {

};
//============================ ignore this below ================================//
//============================================= buffer zone ======================== //
//============================================= buffer zone ======================== //