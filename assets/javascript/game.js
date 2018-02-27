$(document).ready(function() {

var randomNumber = "";
var totalScore = 0;

var blueValue = "";
var yellowValue = "";
var greenValue = "";
var redValue = "";

wins = 0;
losses=0;


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

 

    $("#red").on("click", function() {
        totalScore += redValue;
        $("#yourscore").html(totalScore);
    });

    $("#blue").on("click", function() {
        totalScore += blueValue;
        $("#yourscore").html(totalScore);
    });

    $("#green").on("click", function() {
        totalScore += greenValue;
        $("#yourscore").html(totalScore);
    });

    $("#yellow").on("click", function() {
        totalScore += yellowValue;
        $("#yourscore").html(totalScore);
    });

 
    blueValue = parseInt(blueValue);
    yellowValue = parseInt(yellowValue);
    greenValue = parseInt(greenValue);
    redValue = parseInt(redValue);

    totalScore = parseInt(totalScore);
    randomNumber = parseInt(randomNumber);





    if (totalScore > randomNumber) {
        alert("you lose!");
    }

    else if (totalScore === randomNumber) {
        alert("you win!");
    }
   

    console.log(redValue);
    console.log(blueValue);
    console.log(greenValue);
    console.log(yellowValue);

});


// $("#red").on("click", function() {
//         alert("yo");
// })

    



