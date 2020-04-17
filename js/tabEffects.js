$(document).ready(function(){

/* ================= select country button ========================== */
    $("#countryBtn").click(function() {
        $("#countryList").slideToggle(250);
        $("#electionYearDisplay").slideUp(250);
        $("#countryListB-HR").slideUp(250);
        $("#countryListB").slideUp(250);
        $("#electionYearDisplayB-HR").slideUp(250);
        $("#electionYearDisplayB").slideUp(250);
        $('input[type=checkbox]').prop('checked',false);
    });

/* ======== select 2 country to compare checkbox====================== */
    $('input[id="compareSwitch"]').click(function() {
        if ($(this).is(":checked")) {
            $("#finishCountryListA > p").remove();
            $("#finishCountryListB > p").remove();
            $("#countryListB-HR").toggle("#countryListB-HR");
            $("#countryListB").toggle("#countryListB");
            $("#electionYearDisplayB-HR").toggle("#electionYearDisplayB-HR");
            $("#electionYearDisplayB").toggle("#electionYearDisplayB");
            $("#philippinesElectionB").addClass("offB");
            $("#usPresidentialElectionB").addClass("offB");
            $("#ukGeneralElectionB").addClass("offB");
            $("#electionYearDisplayB-HR").slidetoggle(250);
            $("#electionYearDisplayB").slidetoggle(250);
        
        } else if ($(this).is(":not(:checked)")) {
            $("#finishCountryListA > p").remove();
            $("#finishCountryListB > p").remove();
            $('input[type=checkbox]').prop('checked',false);
            $("#countryListB-HR").toggle("#countryListB-HR");
            $("#countryListB").toggle("#countryListB");
            $("#electionYearDisplayB-HR").toggle("#electionYearDisplayB-HR");
            $("#electionYearDisplayB").toggle("#electionYearDisplayB");
            $("#philippinesElectionB").addClass("offB");
            $("#usPresidentialElectionB").addClass("offB");
            $("#ukGeneralElectionB").addClass("offB");
            $("#electionYearDisplayB-HR").slidetoggle(250);
            $("#electionYearDisplayB").slidetoggle(250);
            $("#finishButtonDisplay").slideUp(250);
            $("#electionYearDisplay").slideUp(250);
                return false;
            };
    });

/* ================= select only one country (S)========================== */
$('input:checkbox[name="countryA"]').on("click", function() {
    var boxA = $(this);
    if (boxA.is(":checked")) {
        var groupA = "input:checkbox[name='" + boxA.attr("name") + "']";
        $(groupA).prop("checked", false);
        boxA.prop("checked", true);
    } else {
        boxA.prop("checked", false);
    }
});
$('input:checkbox[name="countryB"]').on("click", function() {
    var boxB = $(this);
    if (boxB.is(":checked")) {
        var groupB = "input:checkbox[name='" + boxB.attr("name") + "']";
        $(groupB).prop("checked", false);
        boxB.prop("checked", true);
    } else {
        boxB.prop("checked", false);
    }
});

/* ==== country end result to display and disabled checkbox ====== */
$('input[id="inputUkDisplayA"]').click(function() {
    if ($(this).is(":checked")){
        $('input:checkbox[name="countryB"]').prop("checked", false);
        $("#inputPhilDisplayB").prop("disabled", false);
        $("#inputUsaDisplayB").prop("disabled", false);
        $("#inputUkDisplayB").prop("disabled", true);
        $("#finishCountryListA > p").remove();
        $("#finishCountryListA").append("<p>" + ($("#inputUkDisplayA").val()) + "</p>");
        //$("#finishButtonDisplay").slideToggle(250);
    } else if ($(this).is(":not(:checked)")) {
        $("#inputUkDisplayB").prop("disabled", false);
        $("#finishCountryListA > p").remove();
        //$('input[type=checkbox]').prop('checked',false);
        //$("#finishButtonDisplay").slideUp(250);
    }
});
$('input[id="inputUsaDisplayA"]').click(function() {
    if ($(this).is(":checked")){
        $('input:checkbox[name="countryB"]').prop("checked", false);
        $("#inputPhilDisplayB").prop("disabled", false);
        $("#inputUsaDisplayB").prop("disabled", true);
        $("#inputUkDisplayB").prop("disabled", false);
        $("#finishCountryListA > p").remove();
        $("#finishCountryListA").append("<p>" + ($("#inputUsaDisplayA").val()) + "</p>");
        //$("#finishButtonDisplay").slideToggle(250);
    } else if ($(this).is(":not(:checked)")) {
        $("#inputUsaDisplayB").prop("disabled", false);
        $("#finishCountryListA > p").remove();
        $('input[type=checkbox]').prop('checked',false);
        //$("#finishButtonDisplay").slideUp(250);
    }
});
$('input[id="inputPhilDisplayA"]').click(function() {
    if ($(this).is(":checked")){
        $('input:checkbox[name="countryB"]').prop("checked", false);
        $("#inputPhilDisplayB").prop("disabled", true);
        $("#inputUsaDisplayB").prop("disabled", false);
        $("#inputUkDisplayB").prop("disabled", false);
        $("#finishCountryListA > p").remove();
        $("#finishCountryListA").append("<p>" + ($("#inputPhilDisplayA").val()) + "</p>");
        //$("#finishButtonDisplay").slideToggle(250);
    } else if ($(this).is(":not(:checked)")) {
        $("#inputPhilDisplayB").prop("disabled", false);
        $("#finishCountryListA > p").remove();
        $('input[type=checkbox]').prop('checked',false);
        //$("#finishButtonDisplay").slideUp(250);
    }
});
$('input[id="inputUkDisplayB"]').click(function() {
    if ($(this).is(":checked")){
        $("#finishCountryListB > p").remove();
        $("#finishCountryListB").append("<p>" + ($("#inputUkDisplayB").val()) + "</p>");
        //$("#finishButtonDisplay").slideToggle(250);
    } else if ($(this).is(":not(:checked)")) {
        $("#finishCountryListB > p").remove();
        $('input[type=checkbox]').prop('checked',false);
        //$("#finishButtonDisplay").slideUp(250);
    }
});
$('input[id="inputUsaDisplayB"]').click(function() {
    if ($(this).is(":checked")){
        $("#finishCountryListB > p").remove();
        $("#finishCountryListB").append("<p>" + ($("#inputUsaDisplayB").val()) + "</p>");
        //$("#finishButtonDisplay").slideToggle(250);
    } else if ($(this).is(":not(:checked)")) {
        $("#finishCountryListB > p").remove();
        $('input[type=checkbox]').prop('checked',false);
        //$("#finishButtonDisplay").slideUp(250);
    }
});
$('input[id="inputPhilDisplayB"]').click(function() {
    if ($(this).is(":checked")){
        $("#finishCountryListB > p").remove();
        $("#finishCountryListB").append("<p>" + ($("#inputPhilDisplayB").val()) + "</p>");
        //$("#finishButtonDisplay").slideToggle(250);
    } else if ($(this).is(":not(:checked)")) {
        $("#finishCountryListB > p").remove();
        $('input[type=checkbox]').prop('checked',false);
        //$("#finishButtonDisplay").slideUp(250);
    }
});
/* ========= country checkbox to display election lists =============== */
    $("#ukDisplayA").click(function() {
        $("#electionYearDisplay").slideUp(250);
        $("#philippinesElectionA").removeClass("onA");
        $("#philippinesElectionA").addClass("offA");
        $("#usPresidentialElectionA").removeClass("onA");
        $("#usPresidentialElectionA").addClass("offA");
        $("#ukGeneralElectionA").removeClass("offA");
        $("#ukGeneralElectionA").addClass("onA");
        $("#electionYearDisplay").slideToggle(250);
    });
    $("#usaDisplayA").click(function() {
        $("#electionYearDisplay").slideUp(250);
        $("#philippinesElectionA").removeClass("onA");
        $("#philippinesElectionA").addClass("offA");
        $("#usPresidentialElectionA").removeClass("offA");
        $("#usPresidentialElectionA").addClass("onA");
        $("#ukGeneralElectionA").removeClass("onA");
        $("#ukGeneralElectionA").addClass("offA");
        $("#electionYearDisplay").slideToggle(250);
    });
    $("#philDisplayA").click(function() {
        $("#electionYearDisplay").slideUp(250);
        $("#philippinesElectionA").removeClass("offA");
        $("#philippinesElectionA").addClass("onA");
        $("#usPresidentialElectionA").removeClass("onA");
        $("#usPresidentialElectionA").addClass("offA");
        $("#ukGeneralElectionA").removeClass("onA");
        $("#ukGeneralElectionA").addClass("offA");
        $("#electionYearDisplay").slideToggle(250);
    });
    $("#ukDisplayB").click(function() {
        $("#electionYearDisplay").slideUp(250);
        $("#philippinesElectionB").removeClass("onB");
        $("#philippinesElectionB").addClass("offB");
        $("#usPresidentialElectionB").removeClass("onB");
        $("#usPresidentialElectionB").addClass("offB");
        $("#ukGeneralElectionB").removeClass("offB");
        $("#ukGeneralElectionB").addClass("onB");
        $("#electionYearDisplay").slideToggle(250);
    });
    $("#usaDisplayB").click(function() {
        $("#electionYearDisplay").slideUp(250);
        $("#philippinesElectionB").removeClass("onB");
        $("#philippinesElectionB").addClass("offB");
        $("#usPresidentialElectionB").removeClass("offB");
        $("#usPresidentialElectionB").addClass("onB");
        $("#ukGeneralElectionB").removeClass("onB");
        $("#ukGeneralElectionB").addClass("offB");
        $("#electionYearDisplay").slideToggle(250);
    });
    $("#philDisplayB").click(function() {
        $("#electionYearDisplay").slideUp(250);
        $("#philippinesElectionB").removeClass("offB");
        $("#philippinesElectionB").addClass("onB");
        $("#usPresidentialElectionB").removeClass("onB");
        $("#usPresidentialElectionB").addClass("offB");
        $("#ukGeneralElectionB").removeClass("onB");
        $("#ukGeneralElectionB").addClass("offB");
        $("#electionYearDisplay").slideToggle(250);
    });

/* ========== if selected checkbox allow only 2 per election per country =========== */
        $('input[id="extraCompareSwitch"]').click(function() {
            if ($(this).is(":checked")){
                $("#finishButtonDisplay").slideToggle(250);
            } else if ($(this).is(":not(:checked)")) {
                //$('input[type=checkbox]').prop('checked',false);
                //$("#finishCountryListA > p").remove();
                //$("#finishCountryListB > p").remove();
                $("#finishButtonDisplay").slideUp(250);
            }
        });


/* ****** checkbox control selections ******* */


    
    
/* *************************************************************
    $("input:checkbox").on("click", function() {
    var countryBox = $(this);
        if (countryBox.is(":checked")) {
    var group = "input:checkbox[name='" + countryBox.attr("name") + "']";
        $(group).prop("checked", false);
        countryBox.prop("checked", true);
    } else {
        countryBox.prop("checked", false);
    }
  });  // this suppet is the whole ALL checkboxs 
  ************************************************************ */



/* ===================================================== */







/*$('input:checkbox[class="countryButton"]').on("click", function() {
    if ($('input:checkbox[name="countryA"]').is(":checked") &&
        $('input:checkbox[name="countryB"]').is(":checked")) {
        $("#finishButtonDisplay").slideToggle(250);
    } else {
        $("#finishButtonDisplay").slideUp(250);
    };
});*/

$('input:checkbox[class="countryButtonA"]').on("click", function() {
    if ($('input:checkbox[name="countryA"]').is(":checked") &&
        $('input:checkbox[name="electionA"]').is(":checked")) {
        $("#finishButtonDisplay").slideToggle(250);
    } else {
        $("#finishButtonDisplay").slideUp(250);
    };
});

/* *************************this is where i try ***************************** */





/*var electionA = document.forms["electionYearDisplay"].elements["electionA[]"];
for (var i=0, len=electionA.length; i<len; i++) {
    electionA[i].onclick = doSomething;
}
function doSomething() {
    if ( this.checked ) {
        $("#finishElectionListA1").append("<p>" + (this.val()) + "</p>"); // if checked ...
    } else {
        // if not checked ...
    }
}*/
$('input[name="electionA[]"]').click(function () {
    var $foo = $(this);
    var box = ("<p>" + ($('input[name="electionA[]"]').val()) + "</p>");
    if ($foo.data(":checked")) { 
        $("#finishElectionListA1 > p").remove();
        $("#finishElectionListA2 > p").remove();
        $("#finishElectionListA1").append(box);
    } else {
        $("#finishElectionListA1 > p").remove();
        $("#finishElectionListA2 > p").remove();
        $("#finishElectionListA1").append(box);
        $("#finishElectionListA2").append(box);
    }
    $foo.data(':checked', true);
});




/*$('input[name="electionA[]"]').click(function () {

    var $foo = $(this);
    var i = 0;
    var box1 = ("<p>" + ($('input[name="electionA[]"]').val()) + "</p>");
    var box2 = ("<p>" + ($('input[name="electionA[]"]').val()) + "</p>");
    if ($foo.is("checked").length(i == 1)) { 
        $("#finishElectionListA1").append(box1);
    } else if (i == 2 ) {
        $("#finishElectionListA1").append(box1);
        $("#finishElectionListA2").append(box2);
    }
    //if(i.length > 1) {
    //"'+ i +'" "'+ i +'"
    // for (i = 0, len = $foo.length; i < len; i++) {
         
     // }
     // $('#checkboxid').prop('checked');
     // $("#checkboxid").is(':checked') 
     // 




        if ($foo.prop(":checked")) {
            $("#finishElectionListA2 > p").remove();
            $("#finishElectionListA1 > p").remove();
            $("#finishElectionListA1").append("<p>" + ($(box1).val()) + "</p>");
            
        } else {
            $("#finishElectionListA1 > p").remove();
            $("#finishElectionListA2 > p").remove();
            $("#finishElectionListA2").append("<p>" + ($(box2).val()) + "</p>");
            $("#finishElectionListA1").append("<p>" + ($(box1).val()) + "</p>");
        }
    /*} else if ($(this).is(":not(:checked)")) {
        $("#finishElectionListA1 > p").remove();
        $("#finishElectionListA2 > p").remove();
    }
    $foo.data(':checked', true);
});*/

/*$('.foo').click(function() {
    var $foo = $(this);
    if (!$foo.data('clicked')) {
      console.log('first click');
    } else {
      console.log('button has been clicked before');
    }
    $foo.data('clicked', true);
  });*/ // this is an example of what worked. 








/*$('input[id="2019GEA"]').click(function() {
    if ($(this).is(":checked")){
        $("#finishElectionListA1 > p").remove();
        $("#finishElectionListA1").append("<p>" + ($("#2019GEA").val()) + "</p>");
        //$("#finishButtonDisplay").slideToggle(250);
    } else if ($(this).is(":not(:checked)")) {
        $("#finishElectionListA1 > p").remove();
        //$('input[type=checkbox]').prop('checked',false);
        //$("#finishButtonDisplay").slideUp(250);
    }
});
$('input[id="2017GEA"]').click(function() {
    if ($(this).is(":checked")){
        $("#finishElectionListA1 > p").remove();
        $("#finishElectionListA1").append("<p>" + ($("#2017GEA").val()) + "</p>");
        //$("#finishButtonDisplay").slideToggle(250);
    } else if ($(this).is(":not(:checked)")) {
        $("#finishElectionListA1 > p").remove();
        //$('input[type=checkbox]').prop('checked',false);
        //$("#finishButtonDisplay").slideUp(250);
    }
});*/



/* **************************************** */
/* 
       $("#extraCompareSwitch:checkbox").on("click", function() {
            var compareCheckbox = $(this);
            if (compareCheckbox.is(":checked")) {
                $("input[name='electionA']").change(function () {
                    var maxAllowed = 2;
                    var ElectionA = $("input[name='electionA']:checked").length;
                    if (ElectionA > maxAllowed) { $(this).prop("checked", "");
                    alert('You can select maximum ' + maxAllowed + ' technologies!!');
                };
            });
            
            } else if (compareCheckbox.is(":not(:checked)")) {

                $("input[name='electionA']").change(function () {
                    var maxAllowed = 1;
                    var EA = $("input[name='electionA']:checked").length;
                    if (EA > maxAllowed) { $(this).prop("checked", "");
                    alert('You can select maximum ' + maxAllowed + ' technologies!!');
                    };
                });
                return;
            };
        });
*/
/* ************************* TESTING PLACE ******************** */









/* ***************************END OF LIST********************** */
});//end of doctument-function

/*}); ******* checklist end result for submit before to enter ********* */

/*$("#finalApply").click(function() {
    countryTag();
});

function countryTag(){
    var countryDisplayA = [];
    var countryDisplayB = [];
	var str = "";
	// look for all checkboes that have a parent id called 'checkboxlist' attached to it and check if it was checked 
	$("#countryListA input:checked").each(function() {
        countryDisplayA.push($(this).val());
        str += $( this ).text() + " ";
        $("#finishCountryListA").text( str );
    });
    $("#countryListB input:checked").each(function() {
        countryDisplayB.push($(this).val());
        val += $( this ).text() + " ";
        $("#finishCountryListB").text( str );
    });
    
	// we join the array separated by the comma 
	var selected;
	selected = countryDisplayA.join(',') ;
	
	// check if there is selected checkboxes, by default the length is 1 as it contains one single comma 
	if(selected.length > 0){
		alert("You have selected " + selected);	
	}else{
		alert("Please at least check one of the checkbox");	
	}
}
*/








/*

 *********************************************** 
  $('[name="countryB"]', + '[name="countryA"]').change(function(){
    if ($(this).is(":checked")) {
        $("#finishButtonDisplay").slideToggle(250);
    } else {
        $("#finishButtonDisplay").slideUp(250);
    }
    });
*/
/*var countryA;
var countryB;
countryA = true;
countryB = false;
//
countryA = false;
countryB = true;

var elCountryA = document.getElementsByName("countryA");
elCountryA.className = countryA;
var elCountryB = document.getElementsByName("countryB");
elCountryA.className = countryB;
*/
/*$('input:checkbox[id="compareSwitch"]').on("click", function() {

    if ($(this).is(":checked")){

    $('input:checkbox[name="countryA"]')
    $('input:checkbox[name="countryB"]').on("click", function() {
        var boxB = $(this);
        if (boxB.is(":checked")) {
            var groupB = "input:checkbox[name='" + boxB.attr("name") + "']";
            $(groupB).prop("checked", false);
            boxB.prop("checked", true);
        } else {
            boxB.prop("checked", false);
        }
    });
    $('input[id="extraCompareSwitch"]').click(function() {
        if ($(this).is(":checked")){
            $("#finishButtonDisplay").slideToggle(250);
        } else if ($(this).is(":not(:checked)")) {
            $('input[type=checkbox]').prop('checked',false);
            $("#finishCountryListA > p").remove();
            $("#finishCountryListB > p").remove();
            $("#finishButtonDisplay").slideUp(250);
        }
    });



    var electionListA1, electionListB1 = 1;
    var electionListA2, electionListB2 = 2;
    var electionListA1 = $("#finishElectionListA1");
    var electionListA2 = $("#finishElectionListA2");
    var electionListB1 = $("#finishElectionListB1");
    var electionListB2 = $("#finishElectionListB2");
$('input:checkbox[id="extraCompareSwitch"]').on("click", function() {
    var $ECS = $(this);
    if ($ECS.is(":checked")) {
        $("#finishButtonDisplay").slideToggle(250);
        var electionListA1 = "input:checkbox[id='" + boxB.attr("name") + "']";
        if ($('input:checkbox[name="electionA"]') && $('input:checkbox[name="electionA"]') == 2, true) {
         $('input:checkbox[name="electionA"]')

        $('input:[name="electionA"]').click(function() {
            var $ElectionA = $(this);
            if ($ElectionA.is(":checked")) {
                var electionListA1 = 1;
                var electionListA1 = "input:checkbox[id='" + $ElectionA.attr("name") + "']";
                $("#finishElectionListA1 > p").remove();
                $("#finishElectionListA1").append("<p>" + (electionListA1.val()) + "</p>");
                $("#finishButtonDisplay").slideToggle(250);
            } else if ($(this).is(":not(:checked)")) {
                $("#finishElectionListA1 > p").remove();
                $('input[type=checkbox]').prop('checked',false);
            }
        });$("input:checkbox").on("click", function(){*/


        
    /*    $('input:checkbox[class="countryButton"]').on(function() {
    if ($('input:checkbox[class="countryA"]').is(":checked") &&
        $('input:checkbox[class="countryB"]').is(":checked")) {
        $("#finishButtonDisplay").slideToggle(250);
        } else {
            $("#finishButtonDisplay").slideUp(250);
            return;
        };
});
    "#finishElectionListA2"



    $('input:checkbox[name="countryB"]')
    $('input:checkbox[name="electionB"]')
    "#finishElectionListB1"
    "#finishElectionListB2"
    if ($('input:checkbox[id="extraCompareSwitch"]')*/
/* ++++++++++++++++++++++++++++++++++++++++++++++++++ 
$('input:checkbox[class="countryButtonA"]').on("click", function() {
    if ($('input:checkbox[name="countryA"]').is(":checked") &&
    $('input:checkbox[name="electionA"]').is(":checked")) {
        $("#finishButtonDisplay").slideToggle(250);
    } else {
        $("#finishButtonDisplay").slideUp(250);
    };
});alert("My favourite sports are: " + favorite.join(", "));

$("button").click(function(){
    var favorite = [];
    $.each($("input[name='sport']:checked"), function(){            
        favorite.push($(this).val());
    });
    
});*/
/*$("#finalCheck").click(function(){
     var eachClickBox = [];
    $.each($('input:checkbox[name="electionA"]:checked'), function(){
        eachClickBox.push($(this).val());
        $("#finishElectionListA1").val(function (i, item) {

        }
        $("#finishElectionListA2").val(function (i, item) {


}

    //$("#finishElectionListA1").append("<p>" + ($(this).val()) + "</p>");

});
   alert("My favourite sports are: " + eachClickBox.join(", "));
});

$(document).ready(function(){
    $("#btn1").click(function(){
      $("#test1").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
      });
    });
  
    $("#btn2").click(function(){
      $("#test2").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
      });
    });
  });



//$("#finishElectionListA1 > p").remove();
        






    



$('#save_value').click(function(){
    var val = [];
    $(':checkbox:checked').each(function(i){
      val[i] = $(this).val();
    });
  });

  document.getElementById('btn').addEventListener('click', function() {

    $(document).ready(function(){

    var x = $(".userform").find(":input");
    $.each(x, function(i, field){
        if(field.type == "text")
        {
            $("#results").append("name:   "+field.name + ":       " +"Value:    "+ field.value +"<br>");
        }

        else if(field.type == "checkbox")
        {
         var result = $('input[type="checkbox"]:checked');

         if(result.length > 0)
            {
            $("#results").append("this is checked     "+"name:   "+field.name + ":       " +"Value:    "+ field.value +"<br>");
        }
        else{

            $("#results").append("this is unchecked");
        }
        }


    });

});
*/
/* %%%%%%%%%%%%%%%%%%%%%%%%% DO NOT USE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/*function EA()  
{  
    var checkboxes = document.getElementsByName("electionA[]");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 2)  
    {  
        alert("You can't select more than two favorite pets!");  
        return false;  
    }  
} */ // this doesnt work. but need i++ example.
