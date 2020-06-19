function ukDataSet( GE2010candidate, GE2010consititunecy, GE2015candidate, GE2015consititunecy, GE2017candidate, GE2017consititunecy, GE2019candidate, GE2019consititunecy, UKPop )
 { 
    d3.csv( GE2017consititunecy, function(error,csv){
        csv.forEach(function(d, i) {
            shires.forEach(function(e, j) {
                if (d.constituency_name === e.properties.PCON17NM) {
                    e[PartyResult] = +d[PartyResult];              
                }
                PoliticalPartyResultSeat += parseInt(d[PartyResult]);
            });
        });
    });
}
console.log(PoliticalPartyResultSeat);
dataDirect();
function phDataSet(  );function usDataSet(  );