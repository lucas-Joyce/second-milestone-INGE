function csvCall() {
    'use strict';
var pickCsvA ="";
var pickCsvB ="";

var ukA  = $("#inputUkDisplayA").val();
var usaA = $("#inputUsaDisplayA").val();
var phlA = $("#inputPhilDisplayA").val();
var ukB  = $("#inputUkDisplayB").val();
var usaB = $("#inputUsaDisplayB").val();
var phlB = $("#inputPhilDisplayB").val();
//console.log(ukA);
var ukCheckA = $("#inputUkDisplayA").is(":checked");
var ukCheckB = $("#inputUkDisplayB").is(":checked");
var usaCheckA = $("#inputUsaDisplayA").is(":checked");
var usaCheckB = $("#inputUsaDisplayB").is(":checked");
var phlCheckA = $("#inputPhilDisplayA").is(":checked");
var phlCheckB = $("#inputPhilDisplayB").is(":checked");

if (ukCheckA){
    if   ( ukA === "UK" ) { pickCsvA = "csvUK"; }
} 
if (ukCheckB){
    if   ( ukB === "UK" ) { pickCsvB = "csvUK"; }
}
if (usaCheckA){
    if   ( usaA === "USA" ) { pickCsvA = "csvUSA"; }
}
if (usaCheckB){
    if   ( usaB === "USA" ) { pickCsvB = "csvUSA"; }
}
if (phlCheckA){
    if   ( phlA === "Philippines" ) { pickCsvA = "csvPHIL"; }
}
if (phlCheckB){
    if   ( phlB === "Philippines" ) { pickCsvB = "csvPHIL"; } 
}
var infoCheckedA1andA2 = [];
$(".electionButtonA").click(function(){  
    var checked = $(this).attr('id').substring(6,-1);
    //checked.shift(-1);
    //console.log(checked);

    var index = infoCheckedA1andA2.indexOf(checked);
    if (index > -1) {
        infoCheckedA1andA2.splice(index, 1);
        // console.log('Remove: '+checked+' at index: '+index);
    } else {
        infoCheckedA1andA2.push(checked);
        // console.log('Add: '+checked);
    }
    if (index === 3) {
        return null;
    }
    var pickDateA1 = infoCheckedA1andA2[0];
    var pickDateA2 = infoCheckedA1andA2[1];

    // console.log(infoChecked);
    // console.log(pickDateA1);
    // console.log(pickDateA2);

         //console.log("data/csvData/" + pickCsvA + "/"+ pickDateA1 +"-constituency.csv");                     // keep this 
         //console.log("data/csvData/" + pickCsvA + "/"+ pickDateA1 +"-candidate.csv");
        // console.log("data/csvData/" + pickCsvA + "/"+ pickDateA2 +"-constituency.csv");                     // keep this 
        // console.log("data/csvData/" + pickCsvA + "/"+ pickDateA2 +"-candidate.csv");
    if ($('input[id="extraCompareSwitch"]').is(":checked")){
        d3.csv("data/csvData/" + pickCsvA + "/" + pickDateA1 + "-constituency.csv").then(makeConstituencyA1),
        d3.csv("data/csvData/" + pickCsvA + "/"+ pickDateA1 +"-candidate.csv").then(makeCandidateA1);
        d3.csv("data/csvData/" + pickCsvA + "/" + pickDateA2 + "-constituency.csv").then(makeConstituencyA2),
        d3.csv("data/csvData/" + pickCsvA + "/"+ pickDateA2 +"-candidate.csv").then(makeCandidateA2);
    } else {
        d3.csv("data/csvData/" + pickCsvA + "/" + pickDateA1 + "-constituency.csv").then(makeConstituencyA1),
        d3.csv("data/csvData/" + pickCsvA + "/"+ pickDateA1 +"-candidate.csv").then(makeCandidateA1);
    };
});

var infoCheckedB1andB2 = [];
$(".electionButtonB").click(function(){  
    var checked = $(this).attr('id').substring(6,-1);
    var index = infoCheckedB1andB2.indexOf(checked);
    if (index > -1) {
        infoCheckedB1andB2.splice(index, 1);
        // console.log('Remove: '+checked+' at index: '+index);
    } else {
        infoCheckedB1andB2.push(checked);
        // console.log('Add: '+checked);
    }
    if (index === 3) {
        return null;
    }
    var pickDateB1 = infoCheckedB1andB2[0];
    var pickDateB2 = infoCheckedB1andB2[1];

        // console.log("data/csvData/" + pickCsvB + "/"+ pickDateB1 +"-constituency.csv");                     // keep this 
        // console.log("data/csvData/" + pickCsvB + "/"+ pickDateB1 +"-candidate.csv");
        // console.log("data/csvData/" + pickCsvB + "/"+ pickDateB2 +"-constituency.csv");                     // keep this 
        // console.log("data/csvData/" + pickCsvB + "/"+ pickDateB2 +"-candidate.csv");
    if ($('input[id="extraCompareSwitch"]').is(":checked")){
        d3.csv("data/csvData/" + pickCsvB + "/" + pickDateB1 + "-constituency.csv").then(makeConstituencyB1),
        d3.csv("data/csvData/" + pickCsvB + "/"+ pickDateB1 +"-candidate.csv").then(makeCandidateB1);
        d3.csv("data/csvData/" + pickCsvB + "/" + pickDateB2 + "-constituency.csv").then(makeConstituencyB2),
        d3.csv("data/csvData/" + pickCsvB + "/"+ pickDateB2 +"-candidate.csv").then(makeCandidateB2);
    } else {
        d3.csv("data/csvData/" + pickCsvB + "/" + pickDateB1 + "-constituency.csv").then(makeConstituencyB1),
        d3.csv("data/csvData/" + pickCsvB + "/"+ pickDateB1 +"-candidate.csv").then(makeCandidateB1);
    };
 });
 //console.log(onThis.attr("shires"));
};

















// ===================================== line of control ========================= //
// var hey  = $(".electionButtonA").get(0).id; // this is excat same as $(this).prop("id")
// console.log(hey);

// var pickDateA1 = $(this).prop("id"); // same as above.
// console.log(pickDateA1);

// $(".electionButtonA:checked").each(function(){ // very good example number 1!!
//   var omm = {};
//   omm = $(this).attr('id');
//   console.log(omm);
//  });

    // var ids = $('.electionButtonA').map(function () { //example 1
    //     return this.id;
    // }).get().join();
    // console.log(ids);


// ===================================== line of control ========================= //

// $(".electionButtonA:checked").each(function(){ 
//     var a =[];
//     var b = {};
//     b = $(this).attr('id');
//     a.push(b);
//     var pickDateA1 = a[0];
//     var pickDateA2 = a[1];
//     console.log(a);
//     console.log(b);
//     //console.log(pickDateA1);
//     //console.log( pickDateA2);
//    });

    // var infoChecked = [];
//    $(".electionButtonA").change(function(){
//         var checked = $(this).attr('id');

//         if ($(this).is(":checked")){ 
//             infoChecked.push(checked);
//         } else {
//             infoChecked.splice($.inArray(checked,infoChecked), 1);
//         }

  
    
//    });
//    console.log(infoChecked)

//    $('.form-filters input:checkbox').click(function() {





    // var pickDateA1 = "";
    // var filterA1 = $(".electionButtonA").filter(":checked").length;
    // var filterA2 = $(".electionButtonA").filter(":checked").length; 
    //  //var a = $("input[class='electionButtonA']:checked").length;
    //  //var b = $("input[class='electionButtonA']:checked").length;
    //     if ( filterA1 === 1 ){
    //         var pickDateA1 = $(this).prop("id");
    //         //var pickDateA2 = $(".electionButtonA").prop("id");
            
    //     }if (filterA2 === 2){
    //         var pickDateA2 = $(this).prop("id");
    //     } // else  //  a === 1  b === 2 
    //      console.log(pickDateA1, pickDateA2);











        //  $(".electionButtonA:checked").each(function(){ // 
        //     var yal = {};
        //     //var pickDateA1 = {};
        //     //omm = $(this).attr('id');
        //     if (yal = $(this).attr("id").length === 1 ) {
        //         var pickDateA1 = yal.push($(this));
        //     } else if ( yal = $(this).attr("id").length === 2){
        //         var pickDateA2 = omm.push();
        //     }
        //     //var pickDateA1 = omm[0];
        //     //var pickDateA2 = omm[1];
        //     //console.log(omm);
        //     console.log(pickDateA1, pickDateA2);
        //  });
         

        
        //  var bbq = {};
        //  bbq = $(this).attr('id');
        //  $(".electionButtonA:checked").each(function () {
        //     var i = $("input[class='electionButtonA']:checked").length;
        //     for (var i = 0; i < 2; i++) {
        //         if (i === 1) {
        //             var a = bbq;
        //         } else if (i === 2) {
        //             var b = bbq;
        //         }
        //     }console.log(a);
        // console.log(b); return;
            
        //  })//.get().join();
        
        

        //  $(".electionButtonA:checked").each(function(){ 
        //     var filterA1 = $(".electionButtonA").filter(":checked").length; // shit
        //      if ((filterA1).prop(":checked") === 1) {
        //         var omm = {};
        //         omm = $(this).attr('id');
        //      } 
        //      if ((filterA1).prop(":checked") === 2 ){
        //         var omp = {};
        //         omp = $(this).attr('id');
        //      }
        //      console.log(omn, omp);
        //  });

// if (($(this).is(":checked").length) === 1 ){
//     var pickDateA1 = $(this).prop("id");
// }
// if (($(this).is(":checked").length) === 2 ){
//     var pickDateA2 = $(this).prop("id");
// }

        //   $(".electionButtonA").each(function(){ //shit
        //     var omm = {};
        //     var omp = {};
        //     if ($(this).is(":checked").length === 1 ) {
        //         omm = $(this).attr('id');
        //     };
        //     if ($(this).is(":checked").length === 2 ) {
        //         omp = $(this).attr('id');
        //     };
        //     console.log(omm, omp);
        //  });

        //  var ids = $('.electionButtonA').map(function () { //example 1
        //     return this.id;
        // }).get().join();
        // console.log(ids);


        // var btnList = document.getElementsByClassName("electionButtonA");//example 2
        //     console.log(btnList);
          
        // $(".electionButtonA").change(function() {
        //     var pickDateA1, pickDateA2 = "";
        //     var someObj = {};
        //     someObj.datas = [];

        //     var pickDateA1 = someObj[0];
        //     var pickDateA2 = someObj[1];
        
        //     $(".electionButtonA").each(function() {
        //         if ($(this).is(":checked")) {
        //             someObj.datas.push($(this).attr("id"));
        //         } 
        //     });
        
        //     console.log(pickDateA1, pickDateA2, someObj.datas[0], someObj.datas[1]);
        // });







        // var x = document.getElementById("philippinesElectionA").querySelectorAll(".electionButtonA");                // good example
        // console.log(x);
        
        //$(".electionButtonA:checked").each(function(){ ??
       


        // // Create a for loop and set the background color of all elements with class="example" in div
        // var i;
        // for (i = 0; i < x.length; i++) {
        // x[i].style.backgroundColor = "red";}

        // var x = document.getElementById("philippinesElectionA").querySelectorAll(".electionButtonA");                // maybe
        // var i;
        // for (i = 0; i < x.length; i++) {
        //     var listSet = x[i].id; }
        // console.log(listSet);


       
       
        










//         var setListEBA = $(".electionButtonA").prop("id");
//         var ids = "";
//         for (var i=0; i<setListEBA.length; i++){
//             ids += setListEBA[i].id;
//         }
//         console.log(ids);
//          var elements = document.getElementsById("id");
//  var ids = '';
//  for(var i=0; i<elements.length; i++) {
//      ids += elements[i].id;
//  }
//  console.log(ids,"\n");
        
    //if ( ebA === 1 ){
// if (($(this).is(":checked").length) === 1 ){
//     var pickDateA1 = $(this).prop("id");
// }
// if (($(this).is(":checked").length) === 2 ){
//     var pickDateA2 = $(this).prop("id");
// }





        // save this.
        // if ($(this).is(":checked")){

        //     if (ebA === secondInputA2 ){
        //         var pickDateA2 = $(this).attr("id");
        //     }
        //     if (ebA === firstInputA1){
        //         var pickDateA1 = $(this).attr("id");
        //     } // save this.

        // } else if ($(this).is(":not(:checked)")) {

        //     if (ebA === secondInputA2 ){
        //         var pickDateA2 = $(this).prop("id", false);
        //     }
        //     if (ebA === firstInputA1){
        //         var pickDateA1 = $(this).prop("id");
        //     } // save this.

        // }


                    // if ( ebA === firstInputA1 ) {
                    //     var pickDateA1 = $(this).attr("id");
                    //             }
                    // if ( ebA === secondInputA2 ) {
                    //     var pickDateA2 = $(this).attr("id");
                    //             }





        // if (A1) {
        //     pickDateA1
        // }
        // if (A2) {
        //     pickDateA2
        // }
          


    //     console.log("data/csvData/" + pickCsvA + "/"+ pickDateA1 +"-candidate.csv");                     // keep this 
    //     console.log("data/csvData/" + pickCsvA + "/"+ pickDateA2 +"-candidate.csv");
    // console.log(pickCsvA, pickDateA1, pickDateA2, "\n" + pickCsvB, pickDateB1, pickDateB2);



// if ( ebA && secondInputA2 ) {
//         var pickDateA2 = $(this).attr("id");
//         } this is a good code.

    // for (var i = 0; i < 10; i++) {
//     /* ... */
//   }
//   console.log(i);


// if ( $("#extraCompareSwitch").is(":checked") ) {

//     $(".electionButtonA").click(function(){
//         var ebA = $(this);
//         if(ebA.is(":checked").length >= 2){
//             var pickDateA2 = $(this).attr("id");
//         }
//         if(ebA.is(":checked").length >= 1 ){
//             var pickDateA1 = $(this).attr("id");
//         }
//     })
// } else if ( $("#extraCompareSwitch").is(":not(:checked)") ) {
//     $(".electionButtonA").click(function(){
//         var ebA = $(this);
//         if(ebA.is(":checked").length >= 1 ){
//             var pickDateA1 = $(this).attr("id");
//         }
//     })
// };





    


    //     var pickDateA1 = $(this).get(0);
    //     console.log("checking...." + pickDateA1);}
    // } else if( $(".electionButtonA").is(":checked").length >= 2 ) {
    //     var pickDateA2 = document.getElementById($(this)); 
    // } else if( $(".elctionButtonB").is(":checked").length >= 1  ) {
    //     var pickDateB1 = document.getElementById($(this)); 
    // } else if( $(".elctionButtonB").is(":checked").length >= 2  ) {
    //     var pickDateB2 = document.getElementById($(this)); 
    // }




//   function getElementsByIds(ids) {
//             var idList = ids.split(" ");
//             var results = [], item;
//             for (var i = 0; i < idList.length; i++) {
//                 item = document.getElementById(idList[i]);
//                 if (item) {
//                     results.push(item);
//                 }
//             }
//             console.log(results);
//             return(results);
            
//         }









// for (var i = 0; i < 10; i++) {
//     /* ... */
//   }
//   console.log(i);









//     $('input:checkbox[name="countryA"]').on("click", function() {
        
//         if ($(this).is(":checked")){
//         //document.getElementById();
//         //$('input:checkbox[name="countryA"]').push()
//         //
//     } else if( $(".countryButtonB").is(":checked") ) {
//         var pickCountry = document.getElementById($(this));
//     } 
        
    
//     if( $(".electionButtonA").is(":checked").length >= 1 ) {
//         var pickDateA1 = document.getElementById($(this)); 
//     } else if( $(".electionButtonA").is(":checked").length >= 2 ) {
//         var pickDateA2 = document.getElementById($(this)); 
//     } else if( $(".elctionButtonB").is(":checked").length >= 1  ) {
//         var pickDateB1 = document.getElementById($(this)); 
//     } else if( $(".elctionButtonB").is(":checked").length >= 2  ) {
//         var pickDateB2 = document.getElementById($(this)); 
//     }

    
//     d3.csv("data/csvData/" + pickCsv + "/" + pickDateA1 + "-constituency.csv").then(makeConstituencyA1),
//     d3.csv("data/csvData/" + pickCsv + "/"+ pickDateA1 +"-candidate.csv").then(makeCandidateA1);

//     d3.csv("data/csvData/" + pickCsv + "/" + pickDateA2 + "-constituency.csv").then(makeConstituencyA2),
//     d3.csv("data/csvData/" + pickCsv + "/"+ pickDateA2 +"-candidate.csv").then(makeCandidateA2);

//     d3.csv("data/csvData/" + pickCsv + "/" + pickDateB1 + "-constituency.csv").then(makeConstituencyB1),
//     d3.csv("data/csvData/" + pickCsv + "/"+ pickDateB1 +"-candidate.csv").then(makeCandidateB1);

//     d3.csv("data/csvData/" + pickCsv + "/" + pickDateB2 + "-constituency.csv").then(makeConstituencyB2),
//     d3.csv("data/csvData/" + pickCsv + "/"+ pickDateB2 +"-candidate.csv").then(makeCandidateB2);

// //console.log(makeConstituencyA1, makeConstituencyB1, makeCandidateA2, makeCandidateB2);
// //console.log(pickCountry);
// });
// };

// function makeCandidateA1(data){};
// function makeConstituencyA1(data){};
// function makeCandidateA2(data){};
// function makeConstituencyA2(data){};
// function makeCandidateB1(data){};
// function makeConstituencyB1(data){};
// function makeCandidateB2(data){};
// function makeConstituencyB2(data){};
// if( pickDate === "GE2019") {


//         function makeChart(players){

//             var titConLab   = players.map(function(d) {
//                 return {
//                     constituency_name: d.constituency_name,
//                     con: d.con,
//                     lab: d.lab,
//                     snp: d.snp,
//                     ld: d.ld
//                 }
//             });









// });