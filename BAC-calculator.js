$(document).ready( function() {
    //event handlers
    $(".btn").click(calculateBAC);

    //other functions
    function calculateBAC() {
        /*
        Get the information input on the webpage
         */

        //get number of beers drank
        var beers = parseInt($("#beer").val());

        //get number of wine drank
        var wine = parseInt($("#wine").val());

        //get number of shots
        var shots = parseInt($("#shots").val());

        //get weight
        var weight = parseInt($("#weight").val());

        //get time since first drink
        var hours = parseFloat($("#hours").val());

        /*
        Make our calculations
         */
        //do the math - beer to ounces of alcohol
        var beerAlcohol = beers * 0.54;
        //wine to ounces of alcohol
        var wineAlcohol = wine * 0.6;
        //shots to ounces of alcohol
        var shotAlcohol = shots * 0.6;

        //find total ounces of alcohol
        var totalAlcohol = beerAlcohol + wineAlcohol + shotAlcohol;

        //multiply by average alcohol absorption rate (7.5)
        var absorptionAlcohol = totalAlcohol * 7.5;

        //divide by weight in pounds
        var step3 = absorptionAlcohol / weight;

        //decrease by number of hours since last drink
        var step4 = step3 - (hours * 0.015);

        //round to 3 decimal places
        var step4Display = step4.toFixed(3);

        /*
        Output time!
         */
        $("#bacPercent").text(step4Display);
        $(".output").show();
    }
}
)