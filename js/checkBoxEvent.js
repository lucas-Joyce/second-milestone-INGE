$(document).ready(function () {
    /* ================= Alert messager system ========================== */
    // function showAlert( message, alerttype ) {

    //     $('#alert_placeholder').append( $('#alert_placeholder').append(
    //       '<div id="alertdiv" class="alert alert-dismissible fade in ' +  alerttype + '">' +
    //           '<a class="close" data-dismiss="alert" aria-label="close" >×</a>' +
    //           '<span>' + message + '</span>' + 
    //       '</div>' )
    //     );

    //     // close it in 3 secs
    //     setTimeout( function() {
    //         $("#alertdiv").remove();
    //     }, 1500 );

    // }
    /* ========================== varibles tables ====================== */
    //N/A

    /* ================= select country button ========================== */
    $("#countryBtn").click(function () {
        $("#countryList").fadeToggle(250);
        $("#countryListB-HR").slideUp(250);
        $("#countryListB").slideUp(250);
        $("#electionYearDisplay").slideUp(250);
        $("#electionYearDisplayB-HR").slideUp(250);
        $("#electionYearDisplayB").slideUp(250);
        $("#finishButtonDisplay").slideUp(250);
        $("#finishCountryListA > p").remove();
        $("#finishElectionListA1 > p").remove();
        $("#finishElectionListA2 > p").remove();
        $("#finishCountryListB > p").remove();
        $("#finishElectionListB1 > p").remove();
        $("#finishElectionListB2 > p").remove();
        $('input[type=checkbox]').prop('checked', false);
    });

    /* ======== select 2 country to compare checkbox====================== */


    $('input[id="compareSwitch"]').click(function () {
        if ($(this).is(":checked")) {
            $("#countryListB-HR").slideDown(250);
            $("#countryListB").slideDown(250);
            $("#electionYearDisplayB-HR").slideDown(250);
            $("#electionYearDisplayB").slideDown(250);
            $("#philippinesElectionB").addClass("offB");
            $("#usPresidentialElectionB").addClass("offB");
            $("#ukGeneralElectionB").addClass("offB");
        } else {
            $(this).is(":not(:checked)");
            $('input[type=radio]').prop('checked', false);
            $("#finishCountryListA > p").remove();
            $("#finishElectionListA1 > p").remove();
            $("#finishElectionListA2 > p").remove();
            $("#finishCountryListB > p").remove();
            $("#finishElectionListB1 > p").remove();
            $("#finishElectionListB2 > p").remove();
            $("#countryListB-HR").slideUp(250);
            $("#countryListB").slideUp(250);
            //$("#philippinesElectionB").addClass("offB");
            //$("#usPresidentialElectionB").addClass("offB");
            //$("#ukGeneralElectionB").addClass("offB");
            $("#electionYearDisplayB-HR").slideUp(250);
            $("#electionYearDisplayB").slideUp(250);
            $("#finishButtonDisplay").slideUp(250);
            $("#electionYearDisplay").slideUp(250);
        };
    });

    /* ================= select only one country (S)========================== */
    $('input:radio[name="countryA"]').on("click", function () {
        var boxA = $(this);
        if (boxA.is(":checked")) {
            var groupA = "input:radio[name='" + boxA.attr("name") + "']";
            $(groupA).prop("checked", false);
            boxA.prop("checked", true);
            $("input[name='electionA']").prop('checked', false);
            $("#finishElectionListA1 > p").remove();
            $("#finishElectionListA2 > p").remove();
        } else {
            boxA.prop("checked", false);

        }
    });
    $('input:radio[name="countryB"]').on("click", function () {
        var boxB = $(this);
        if (boxB.is(":checked")) {
            var groupB = "input:radio[name='" + boxB.attr("name") + "']";
            $(groupB).prop("checked", false);
            boxB.prop("checked", true);
            $("input[name='electionB']").prop('checked', false);
            $("#finishElectionListB1 > p").remove();
            $("#finishElectionListB2 > p").remove();
        } else {
            boxB.prop("checked", false);
        }
    });

    /* ==== country enable and disabled checkbox ====== */
    $('input[id="inputUkDisplayA"]').click(function () {
        if ($(this).is(":checked")) {
            $('input:radio[name="countryB"]').prop("checked", false);
            $("#inputPhilDisplayB").prop("disabled", false);
            $("#inputUsaDisplayB").prop("disabled", false);
            $("#inputUkDisplayB").prop("disabled", true);
            $("#inputUkDisplayB").prop("checked", false);
            $("#finishCountryListA > p").remove();
            $("#finishCountryListA").append("<p>" + ($("#inputUkDisplayA").val()) + "</p>");
            //$("#finishButtonDisplay").slideDown(250);
            csvCall();
        } else {
            $(this).is(":not(:checked)");
            $("#inputUkDisplayB").prop("disabled", false);
            $("#finishCountryListA > p").remove();
            //$('input[type=checkbox]').prop('checked',false);- do not use
            //$("#finishButtonDisplay").slideUp(250);
        }
    });
    $('input[id="inputUsaDisplayA"]').click(function () {
        if ($(this).is(":checked")) {
            $('input:radio[name="countryB"]').prop("checked", false);
            $("#inputPhilDisplayB").prop("disabled", false);
            $("#inputUsaDisplayB").prop("disabled", true);
            $("#inputUkDisplayB").prop("disabled", false);
            $("#inputUsaDisplayB").prop("checked", false);
            $("#finishCountryListA > p").remove();
            $("#finishCountryListA").append("<p>" + ($("#inputUsaDisplayA").val()) + "</p>");
            //$("#finishButtonDisplay").slideDown(250);
            csvCall();
        } else if ($(this).is(":not(:checked)")) {
            $("#inputUsaDisplayB").prop("disabled", false);
            $("#finishCountryListA > p").remove();
            //$('input[type=checkbox]').prop('checked',false);- do not use
            //$("#finishButtonDisplay").slideUp(250);
        }
    });
    $('input[id="inputPhilDisplayA"]').click(function () {
        if ($(this).is(":checked")) {
            $('input:radio[name="countryB"]').prop("checked", false);
            $("#inputPhilDisplayB").prop("disabled", true);
            $("#inputUsaDisplayB").prop("disabled", false);
            $("#inputUkDisplayB").prop("disabled", false);
            $("#inputPhilDisplayB").prop("checked", false);
            $("#finishCountryListA > p").remove();
            $("#finishCountryListA").append("<p>" + ($("#inputPhilDisplayA").val()) + "</p>");
            // $("#finishButtonDisplay").slideDown(250);
            csvCall();
        } else if ($(this).is(":not(:checked)")) {
            $("#inputPhilDisplayB").prop("disabled", false);
            $("#finishCountryListA > p").remove();
            //$('input[type=checkbox]').prop('checked',false);- do not use
            //$("#finishButtonDisplay").slideUp(250);
        }
    });
    $('input[id="inputUkDisplayB"]').click(function () {
        if ($(this).is(":checked")) {
            $("#inputUkDisplayA").prop("checked", false);
            $("#finishCountryListB > p").remove();
            $("#finishCountryListB").append("<p>" + ($("#inputUkDisplayB").val()) + "</p>");
            //$("#finishButtonDisplay").slideDown(250);
            csvCall();
        } else if ($(this).is(":not(:checked)")) {
            $("#finishCountryListB > p").remove();
            //$('input[type=checkbox]').prop('checked',false);- do not use
            //$("#finishButtonDisplay").slideUp(250);
        }
    });
    $('input[id="inputUsaDisplayB"]').click(function () {
        if ($(this).is(":checked")) {
            $("#inputUsaDisplayA").prop("checked", false);
            $("#finishCountryListB > p").remove();
            $("#finishCountryListB").append("<p>" + ($("#inputUsaDisplayB").val()) + "</p>");
            //$("#finishButtonDisplay").slideDown(250);
            csvCall();
        } else if ($(this).is(":not(:checked)")) {
            $("#finishCountryListB > p").remove();
            //$('input[type=checkbox]').prop('checked',false);- do not use
            //$("#finishButtonDisplay").slideUp(250);
        }
    });
    $('input[id="inputPhilDisplayB"]').click(function () {
        if ($(this).is(":checked")) {
            $("#inputPhilDisplayA").prop("checked", false);
            $("#finishCountryListB > p").remove();
            $("#finishCountryListB").append("<p>" + ($("#inputPhilDisplayB").val()) + "</p>");
            //$("#finishButtonDisplay").slideDown(250);
            csvCall();
        } else if ($(this).is(":not(:checked)")) {
            $("#finishCountryListB > p").remove();
            //$('input[type=checkbox]').prop('checked',false); - do not use
            //$("#finishButtonDisplay").slideUp(250);
        }
    });


    // $("#compareSwitch:checkbox").on("click", function() {
    //     var compareSwitch = $(this);
    //     if (compareSwitch.is(":checked", true)) { 
    //         if ( $("#ukDisplayA").is(":checked", true) && $("#usaDisplayA").is(":checked", true) ) {

    //             $("#electionYearDisplay").slideDown(250);

    //     } else {
    //         $("#electionYearDisplay").slideUp(250)
    //     };
    //     };
    // });

    /* ========= country checkbox to display election lists =============== */

    $("#ukDisplayA").click(function () {
        $("#philippinesElectionA").removeClass("onA");
        $("#philippinesElectionA").addClass("offA");
        $("#usPresidentialElectionA").removeClass("onA");
        $("#usPresidentialElectionA").addClass("offA");
        $("#ukGeneralElectionA").removeClass("offA");
        $("#ukGeneralElectionA").addClass("onA");
        $("#electionYearDisplay").slideDown(250);
    });
    $("#usaDisplayA").click(function () {
        $("#philippinesElectionA").removeClass("onA");
        $("#philippinesElectionA").addClass("offA");
        $("#usPresidentialElectionA").removeClass("offA");
        $("#usPresidentialElectionA").addClass("onA");
        $("#ukGeneralElectionA").removeClass("onA");
        $("#ukGeneralElectionA").addClass("offA");
        $("#electionYearDisplay").slideDown(250);
    });
    $("#philDisplayA").click(function () {
        $("#philippinesElectionA").removeClass("offA");
        $("#philippinesElectionA").addClass("onA");
        $("#usPresidentialElectionA").removeClass("onA");
        $("#usPresidentialElectionA").addClass("offA");
        $("#ukGeneralElectionA").removeClass("onA");
        $("#ukGeneralElectionA").addClass("offA");
        $("#electionYearDisplay").slideDown(250);
    });
    $("#ukDisplayB").click(function () {
        $("#philippinesElectionB").removeClass("onB");
        $("#philippinesElectionB").addClass("offB");
        $("#usPresidentialElectionB").removeClass("onB");
        $("#usPresidentialElectionB").addClass("offB");
        $("#ukGeneralElectionB").removeClass("offB");
        $("#ukGeneralElectionB").addClass("onB");
        $("#electionYearDisplay").slideDown(250);
    });
    $("#usaDisplayB").click(function () {
        $("#philippinesElectionB").removeClass("onB");
        $("#philippinesElectionB").addClass("offB");
        $("#usPresidentialElectionB").removeClass("offB");
        $("#usPresidentialElectionB").addClass("onB");
        $("#ukGeneralElectionB").removeClass("onB");
        $("#ukGeneralElectionB").addClass("offB");
        $("#electionYearDisplay").slideDown(250);
    });
    $("#philDisplayB").click(function () {
        $("#philippinesElectionB").removeClass("offB");
        $("#philippinesElectionB").addClass("onB");
        $("#usPresidentialElectionB").removeClass("onB");
        $("#usPresidentialElectionB").addClass("offB");
        $("#ukGeneralElectionB").removeClass("onB");
        $("#ukGeneralElectionB").addClass("offB");
        $("#electionYearDisplay").slideDown(250);
    });

    $('input:checkbox[class="electionButtonA"]').on("click", function () {
        if ($('input:checkbox[name="countryA"]').is(":checked") ||
            $('input:checkbox[name="electionA"]').is(":checked")) {
            $("#finishButtonDisplay").slideDown(250);
        } else {
            $("#finishElectionListA1 > p").remove();
            $("#finishElectionListA2 > p").remove();
            $("#finishElectionListB1 > p").remove();
            $("#finishElectionListB2 > p").remove();
            $("#finishButtonDisplay").slideUp(250);
        };
    });
    $('input:checkbox[class="electionButtonB"]').on("click", function () {
        if ($('input:checkbox[name="countryB"]').is(":checked") ||
            $('input:checkbox[name="electionB"]').is(":checked")) {
            $("#finishButtonDisplay").slideDown(250);
        } else {
            $("#finishElectionListA1 > p").remove();
            $("#finishElectionListA2 > p").remove();
            $("#finishElectionListB1 > p").remove();
            $("#finishElectionListB2 > p").remove();
            $("#finishButtonDisplay").slideUp(250);
        };
    });
    /* ========== if selected checkbox allow only 2 per election per country =========== */

    // for removing and displaying end result labels
    $('input[id="extraCompareSwitch"]').click(function () {
        if ($(this).is(":checked")) {
            $("#finishButtonDisplay").slideDown(250);
        } else if ($(this).is(":not(:checked)")) {
            $('input[class=electionButtonA]').prop('checked', false);
            $('input[class=electionButtonB]').prop('checked', false);
            //$("#finishCountryListA > p").remove(); - do not use
            $("#finishElectionListA1 > p").remove();
            $("#finishElectionListA2 > p").remove();
            //$("#finishCountryListB > p").remove(); - do not use
            $("#finishElectionListB1 > p").remove();
            $("#finishElectionListB2 > p").remove();
            $("#finishButtonDisplay").slideUp(250);
        }
    });


    // $('input[name="electionA"]').click(function () {
    //     var firstBoxA = 1;
    //     var secondBoxA = 2;
    //     var eaLen = $("input[name='electionA']:checked").length;
    //     var box = ("<p>" + ($(this).val()) + "</p>");
    //     if (eaLen === secondBoxA) {
    //         $(this).prop("checked", true);
    //         $("#finishElectionListA2 > p").remove();
    //         $("#finishElectionListA2").append(box);
    //     } else if (eaLen === firstBoxA) {
    //         $(this).prop(":checked", true); 
    //         $("#finishElectionListA1 > p").remove();
    //         $("#finishElectionListA2 > p").remove();
    //         $("#finishElectionListA1").append(box);
    //     } else {
    //         $("#finishElectionListA1 > p").remove();
    //         $("#finishElectionListA2 > p").remove();
    //         }
    // }); do not move

    $('input[name="electionA"]').click(function () {
        var firstBoxA = 1;
        var secondBoxA = 2;
        var eaLen = $("input[name='electionA']:checked").length;
        var box = ("<p>" + ($(this).val()) + "</p>");
        if (eaLen === firstBoxA) {
            if ($(this).is(":checked")) {
                $("#finishElectionListA1").append(box);
                //console.log("first-hello");
            }
            if (!$(this).is(":checked")) {
                $("#finishElectionListA2 > p").remove();
                //console.log("removed");
            }
        } else if (eaLen === secondBoxA) {
            $("#finishElectionListA2 > p").remove();
            $("#finishElectionListA2").append(box);
            //console.log("second-hello");
        } //else {                                      //// this is not needed.
        //     $("#finishElectionListA1 > p").remove(); 
        //     $("#finishElectionListA2 > p").remove();
        //     }
    });



    $('input[name="electionB"]').click(function () {
        var firstBoxB = 1;
        var secondBoxB = 2;
        var eaLen = $("input[name='electionB']:checked").length;
        var box = ("<p>" + ($(this).val()) + "</p>");
        if (eaLen === firstBoxB) {
            if ($(this).is(":checked")) {
                $("#finishElectionListB1").append(box);
                //console.log("first-hello");
            }
            if (!$(this).is(":checked")) {
                $("#finishElectionListB2 > p").remove();
                //console.log("removed");
            }
        } else if (eaLen === secondBoxB) {
            $("#finishElectionListB2 > p").remove();
            $("#finishElectionListB2").append(box);
        } //else {                                      //// this is not needed.
        // $("#finishElectionListB1 > p").remove();
        // $("#finishElectionListB2 > p").remove();
        // }
    });
    $("input[name='electionA']").click("click", function () {
        var max1 = 1;
        var max2 = 2;
        var EA = $("input[name='electionA']:checked").length;

        if ($('input[id="extraCompareSwitch"]').is(":checked")) {
            if (EA > max2) {
                $(this).prop("checked", "");
                alert('You can only select ' + max2 + ' options!!');
            };
        } else {
            if (EA > max1) {
                $(this).prop("checked", "");
                alert('You can only select ' + max1 + ' options!!');
                //$("#finishElectionListA1 > p").remove();
                $("#finishElectionListA2 > p").remove();
            };
        };
    });
    $("input[name='electionB']").click("click", function () {
        var max1 = 1;
        var max2 = 2;
        var EB = $("input[name='electionB']:checked").length;

        if ($('input[id="extraCompareSwitch"]').is(":checked")) {
            if (EB > max2) {
                $(this).prop("checked", "");
                alert('You can only select ' + max2 + ' options!!');
            };
        } else {
            if (EB > max1) {
                $(this).prop("checked", "");
                alert('You can only select ' + max1 + ' options!!');
                $("#finishElectionListB2 > p").remove();
            };
        };
    });
    /**************************this is where i try ***************************** */

    $("#finalSubmit").click(function () {

        function slideups() {
            $("#countryList").slideUp(250);
            $("#countryListB-HR").slideUp(250);
            $("#countryListB").slideUp(250);
            $("#electionYearDisplay").slideUp(250);
            $("#electionYearDisplayB-HR").slideUp(250);
            $("#electionYearDisplayB").slideUp(250);
            $("#finishButtonDisplay").slideUp(250);
            createSVGmap();
        }

        if ($("#compareSwitch:checkbox").is(":checked")) {
            if ($(".countryButtonA").is(":checked") && $(".countryButtonB").is(":checked")) {
                if ($('input[id="extraCompareSwitch"]').is(":checked")) {
                    if (($(".electionButtonB").filter(":checked").length === 2) &&
                        ($(".electionButtonA").filter(":checked").length === 2)) {
                        slideups();
                    } else {
                        alert("please check all 2 pairs checkboxes.")
                    };
                } else {
                    if (($(".electionButtonB").filter(":checked").length === 1) &&
                        ($(".electionButtonA").filter(":checked").length === 1)) {
                        slideups();
                    } else {
                        alert("please check all 1 each checkboxes.");
                    };
                };
            } else {
                alert("please check all the checkboxes of country and election.")
            };
        } else {
            if ($(".countryButtonA").is(":checked")) {
                if ($('input[id="extraCompareSwitch"]').is(":checked")) {
                    if ($(".electionButtonA").filter(":checked").length === 2) {
                        slideups();
                    } else {
                        alert("please check 2 election checkboxes.")
                    };
                } else {
                    if ($(".electionButtonA").filter(":checked").length === 1) {
                        slideups();
                    } else {
                        alert("please check 1 election checkbox.");
                        //showAlert( "OK", "alert-success" );// alert messager system style
                    };

                };

            };
        };
        //ukDataSet();
    });
    // $("#finalSubmit").click(function primary () {
    //    secondary();
    // });
    // ukDataSet();





    /* ************************* TESTING PLACE ******************** */






    /* ***************************END OF LIST********************** */
}); //end of doctument-function







/* ******* documenting of my mistakes and learned progress ******** */


/*********** ticks checkbox complications ******************* */

// $("input[name='electionA']").change(function () {
//     var max = 1;
//     var EA = $("input[name='electionA']:checked").length;
// if (EA > max) { 
//     $(this).prop("checked", "");
//     alert('You can only select ' + max + ' options!!');
// };
// });

// $("input[name='electionA']").click("click", function() { - this is the near perfect ********
//     if ( $('input[id="extraCompareSwitch"]').is(":checked") ){
//         $("input[name='electionA']").change(function () {
//                 var max2 = 2;
//                 var EA = $("input[name='electionA']:checked").length;//this
//             if (EA > max2) { 
//                 $("input[name='electionA']:checked").prop("checked", "");
//                 alert('You can only select ' + max2 + ' options!!');
//             };
//         });
//     } else if ( $('input[id="extraCompareSwitch"]').is(":not(:checked)") ) {
//         $("input[name='electionA']").change(function () {
//                 var max1 = 1;
//                 var EA = $("input[name='electionA']:checked").length;
//             if (EA > max1) { 
//                 $("input[name='electionA']:checked").prop("checked", "");//this
//                 alert('You can only select ' + max1 + ' options!!');
//             };
//         });
// };
//     });

// perfect
// $("input[name='electionA']").click("click", function() {
//                     var max1 = 1;
//                     var max2 = 2;
//                     var EA = $("input[name='electionA']:checked").length;

//         if ($('input[id="extraCompareSwitch"]').is(":checked")){
//                 if (EA > max2) { 
//                     $("input[name='electionA']:checked").prop("checked", "");
//                     alert('You can only select ' + max2 + ' options!!');
//                 };
//             } else {
//                 if (EA > max1) { 
//                     $("input[name='electionA']:checked").prop("checked", "");
//                     alert('You can only select ' + max1 + ' options!!');
//                 };
//             };
// });

//($('input[id="extraCompareSwitch"]').is(":not(:checked)"))

//    $("#extraCompareSwitch:checkbox").on("click", function() {
//         var compareCheckbox = $(this);
//         if (compareCheckbox.prop(":checked", true)) {
//             $("input[name='electionA']").change(function () {
//                 var max = 2;
//                 var EA = $("input[name='electionA']:checked").length;
//             if (EA > max) { 
//                 $(this).prop("checked", "");
//                 alert('You can only select ' + max + ' options!!');
//             };
//         }); //
//      } else if (compareCheckbox.prop(":not(:checked)")) {
//             $("input[name='electionA']").change(function () {
//                 var max = 1;
//                 var EA = $("input[name='electionA']:checked").length;
//             if (EA > max) { 
//                 $(this).prop("checked", "");
//                 alert('You can only select ' + max + ' options!!');
//                 };
//             });
//             return;
//         };
//     });
//     $("#extraCompareSwitch:checkbox").on("click", function() {
//         var compareCheckbox = $(this);
//         if (compareCheckbox.prop(":checked", true)) {
//             $("input[name='electionB']").change(function () {
//                 var max = 2;
//                 var EA = $("input[name='electionB']:checked").length;
//             if (EA > max) { 
//                 $(this).prop("checked", "");
//                 alert('You can only select ' + max + ' options!!');
//             };
//         });
//      } else if (compareCheckbox.prop(":checked", false)) {
//             $("input[name='electionB']").change(function () {
//                 var max = 1;
//                 var EA = $("input[name='electionB']:checked").length;
//             if (EA > max) { 
//                 $(this).prop("checked", "");
//                 alert('You can only select ' + max + ' options!!');
//                 };
//             });
//             return;
//         };
//     });