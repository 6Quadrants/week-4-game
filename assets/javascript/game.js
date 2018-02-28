//   var wins = 0;
//   var losses = 0;

//   var randomNumber = 0;
// var totalScore = 0;

// var blueValue = "";
// var yellowValue = "";
// var greenValue = "";
// var redValue = "";



$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    var randomNumber = 0;
     var totalScore = 0;
  
  var blueValue = "";
  var yellowValue = "";
  var greenValue = "";
  var redValue = "";

    function initialize() {

        var randomNumber = 0;
        var totalScore = 0;
      

        $("#total", "#yourscore").empty();
    };

    var minNumber = 19;
    var maxNumber = 120;
   
    var randomNumber = randomNumberFromRange(minNumber, maxNumber); 
    
    function randomNumberFromRange(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    $("#total").html(randomNumber);

    var minNumber = 1;
    var maxNumber = 12;

    var blueValue = randomNumberFromRange(minNumber, maxNumber);
    var yellowValue = randomNumberFromRange(minNumber, maxNumber);
    var greenValue = randomNumberFromRange(minNumber, maxNumber);
    var redValue = randomNumberFromRange(minNumber, maxNumber);


    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    $("#blue").val(blueValue);
    $("#yellow").val(yellowValue);
    $("#green").val(greenValue);
    $("#red").val(redValue);

    blueValue = parseInt(blueValue);
    yellowValue = parseInt(yellowValue);
    greenValue = parseInt(greenValue);
    redValue = parseInt(redValue);


    

    $("#red").on("click", function() {

        totalScore += redValue;
        $("#yourscore").html(totalScore);
        
        if (totalScore > randomNumber) {  
            losses++;
            $("#losses").html(losses);
            

        }

        else if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
            
        }

        $("#red").on("click", function() {
            initialize();
        });

        console.log(wins);
        console.log(losses);
    });



        
   
   

    $("#blue").on("click", function() {

        totalScore += blueValue;
        $("#yourscore").html(totalScore);
        
        if (totalScore > randomNumber) {  
            losses++;
            $("#losses").html(losses);
        }

        else if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
        }

        console.log(wins);
        console.log(losses);

    });

    $("#green").on("click", function() {

        totalScore += greenValue;
        $("#yourscore").html(totalScore);
        
        if (totalScore > randomNumber) {  
            losses++;
            $("#losses").html(losses);
        }

        else if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
        }

        console.log(wins);
        console.log(losses);

    });

    $("#yellow").on("click", function() {

        totalScore += yellowValue;
        $("#yourscore").html(totalScore);
        
        if (totalScore > randomNumber) {  
            losses++;
            $("#losses").html(losses);
        }

        else if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
        }

        console.log(wins);
        console.log(losses);
        

    });

   

    
});



