//   ===============   this is CHART.JS and D3.JS ======================  //



//     // var pickDate = [];
// $("input[class='electionButtonA']:checked").each(function() {            
//      pickDate.push($(this).val());
//  });//=================================================to start here for create if else.
//     // if( document.getElementById("2019GEA").value == pickDate) {
//     // if( document.getElementById("2017GEA").value == pickDate) {
//     // if( document.getElementById("2015GEA").value == pickDate) {
//     // if( document.getElementById("2010GEA").value == pickDate) {

//d3.csv("data/csvData/csvUK/"+pickDate+"-constituency.csv").then(makeConstituency);

d3.csv("data/csvData/csvUK/GE2019-constituencyTEST.csv").then(makeChart);

function makeChart(players){

    var titConLab   = players.map(function(d) {
        return {
            constituency_name: d.constituency_name,
            con: d.con,
            lab: d.lab,
            snp: d.snp,
            ld: d.ld
        }
    });
    // var partyResultLabels = players.map(function(d) {return d.constituency_name});
    // var shireLable        = players.map(function(d) {return d.con});
    // var labour            = players.map(function(d) {return d.lab});
//     //console.log(players[3]);//return players[2], d.con
// // return d.name;return d.constituency_name[1]
//console.log(players.columns);
// console.log(players.indexOf(2));
//     // for (var i = 0; i < players.length; i++) {
//     //     console.log(players[i].constituency_name);
//     //     console.log(players[i].con);
//     // }
 //console.log(titConLab);
var thisLabelConstituency = players[0].constituency_name;
var conData      = players[0].con;
var labData      = players[0].lab;
var snpData      = players[0].snp;
var ldData       = players[0].ld;



var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Conservative","Labour","SNP","Liberal"],
        datasets: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            //barThickness: 20,
            //maxBarThickness: 8,
            //minBarLength: 2,
            label: thisLabelConstituency,
            data: [conData,labData,snpData,ldData],
            backgroundColor: [
                // === i will address this issue.==== //
                // pattern.draw('square', '#ff6384'), 
                // pattern.draw('circle', '#36a2eb'),
                // pattern.draw('diamond', '#cc65fe'),
                // pattern.draw('triangle', '#ffce56'),
                // pattern.draw('zigzag-horizontal', '#17becf'),
                // pattern.draw('ring', '#ffbecf')
                // ================================== //
                "#0004ff",
                "#ff0000",
                "#fbff00",
                "#ffa600"
            ],
            borderColor: [
                "#ffffff"
            ],
            borderWidth: 1
        }]
    },
    options: {
            
            scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }

    }
});
};
// Disable automatic style injection
Chart.platform.disableCSSInjection = true;
// chart.canvas.parentNode.style.height = '128px';
// chart.canvas.parentNode.style.width = '128px';
//function ukDataSet(){}


//============================ ignore this below ================================//
// function dataDirect(){

//     // ukDataSet (function (){
//     // $("#finalCheck").click( function(){
//     //     console.log()
//     // })


// })




// function electionYear(){

// if ($("#inputUkDisplayA"))
//     d3.csv( ukDataSet, function(error,csv){
//         csv.forEach(function(d, i) {
//             shires.forEach(function(e, j) {
//                 if (d.constituency_name === e.properties.PCON17NM) {
//                     e[PartyResult] = +d[PartyResult];              
//                 }
//                 PoliticalPartyResultSeat += parseInt(d[PartyResult]);
//             });
//         });
//     });
// if ($("#inputUsDisplayA"))
//     d3.csv( usDataSet, function(error,csv){
//         csv.forEach(function(d, i) {
//             shires.forEach(function(e, j) {
//                 if (d.constituency_name === e.properties.PCON17NM) {
//                     e[PartyResult] = +d[PartyResult];              
//                 }
//                 PoliticalPartyResultSeat += parseInt(d[PartyResult]);
//             });
//         });
//     });
//     if ($("#inputPhDisplayA"))
//     d3.csv( phDataSet, function(error,csv){
//         csv.forEach(function(d, i) {
//             shires.forEach(function(e, j) {
//                 if (d.constituency_name === e.properties.PCON17NM) {
//                     e[PartyResult] = +d[PartyResult];              
//                 }
//                 PoliticalPartyResultSeat += parseInt(d[PartyResult]);
//             });
//         });
//     });

// }

// $("#finalSubmit").click(function primary () {
//     //    secondary();


// console.log(PoliticalPartyResultSeat);



// function phDataSet(  );
// function usDataSet(  );


// electionYear(); result

 

//     // var pickDate = [];
//     // $("input[class='electionButtonA']:checked").each(function() {            
//     //     pickDate.push($(this).val());
//     // });
//     // if( document.getElementById("2019GEA").value == pickDate) {
//     // if( document.getElementById("2017GEA").value == pickDate) {
//     // if( document.getElementById("2015GEA").value == pickDate) {
//     // if( document.getElementById("2010GEA").value == pickDate) {

// //thisUkData

//     d3.json("data/mapData/westminsteratwgs84.json").then(function( UKdata ){
//     var shires = topojson.feature(UKdata, UKdata.objects.Westminster_Parliamentary_Constituencies__December_2017__UK_BSC);
//             d3.csv(GE2019consititunecy).then( function( csvUkData ){
//                 csvUkData.forEach(function(f, i) {
//                     //console.log(f.result);
//                     shires.features.forEach( function (e, j){
//                         if (f.constituency_name !== e.properties.PCON17NM) {
//                              return null;
//                         }
//                         return f.result;
//                     //console.log(f.constituency_name, f.result );
//                     });
//                     //console.log(shires.features[i].f.result);
//                 });
//             });//return f.constituency_name;return f.result;
//         }); //, console.log( f.result)
// };

                //console.log(f.constituency_name);S
                //shires.features.forEach(function(e, j) {
                        //console.log( e.properties.PCON17NM);
                // if (d.constituency_name === e.properties.PCON17NM) {
                //     //e[PartyResult] = +d[PartyResult];
                //     return i.columns.result;
                //     //console.log(d.PartyResult);
                // }
                    
                    //console.log(csvUkData.PartyResult);

                //});
            //});
    // var GE2019consititunecy = "data/csvData/csvUK/GE2019UK/HoC-GE2019-constituency-results.csv";
    //if
    // d3.json("data/mapData/westminsteratwgs84.json").then(function( UKdata ){
    // var shires = topojson.feature(UKdata, UKdata.objects.Westminster_Parliamentary_Constituencies__December_2017__UK_BSC);

    //     d3.csv(GE2019consititunecy).then( function( csvUkData ){
    //         generate( csvUkData.columns);

            //  csvUkData.forEach(function(d, i) {
                
            //      shires.features.forEach(function(e, j) {

            //          if (d.constituency_name === e.properties.PCON17NM) {
            // //              //e[PartyResult] = +d[PartyResult];
            // //              //console.log(PartyResult);    
            // //              //d.PartyResult
            // //             return null;
            //             //return d.csvUkData.result
            //             console.log(d.csvUkData.result);
            //          }
                     
            //          });
            //          //console.log(d.csvUkData[result]);
            // //             text($(this).attr(" "));
                    
            // //         //PoliticalPartyResultSeat += parseInt(d[PartyResult]);
            // //          .attr("shires", function(d){
            // //     return d.properties.PCON17NM;
            // // })
            // //     });
            //  });
           
    //     });

    // });



// if($("#finalCheck").click("click", ))

// ukDataSet();
// phDataSet(  );
// usDataSet(  );



// }

//  if ($("#2019GEA").is(":checked")){
       
//     } else if ($("#2017GEA").is(":checked")){



















//         // British General Election data set list.
//         var GE2010candidate     = "data/csvData/csvUK/GE2010UK/HoC-GE2010-results-by-candidate.csv";
//         var GE2010consititunecy = "data/csvData/csvUK/GE2010UK/HoC-GE2010-constituency-results.csv";
//         var GE2015candidate     = "data/csvData/csvUK/GE2015UK/HoC-GE2015-results-by-candidate.csv";
//         var GE2015consititunecy = "data/csvData/csvUK/GE2015UK/HoC-GE2015-constituency-results.csv";
//         var GE2017candidate     = "data/csvData/csvUK/GE2017UK/HoC-GE2017-results-by-candidate.csv";
//         var GE2017consititunecy = "data/csvData/csvUK/GE2017UK/HoC-GE2017-constituency-results.csv";
//         var GE2019candidate     = "data/csvData/csvUK/GE2019UK/HoC-GE2019-results-by-candidate.csv";
//         var GE2019consititunecy = "data/csvData/csvUK/GE2019UK/HoC-GE2019-constituency-results.csv";
//         var UKPop               = ""; //Population in UK.
//         var PartyResult         = "result"; // Political party represent in the consititunecy seats
//         //Philippines Presidential Election data set list.
//         var PE1998PH = "data/csvData/csvPHIL/PE1998PH/";

//         ukDataSet( GE2010candidate, GE2010consititunecy, GE2015candidate, GE2015consititunecy, GE2017candidate, GE2017consititunecy, GE2019candidate, GE2019consititunecy, UKPop );
//         phDataSet(  );
//         usDataSet(  );
