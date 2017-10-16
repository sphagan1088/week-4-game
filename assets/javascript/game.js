//variables 

var wins = 0;
var losses = 0;
var totalScore = 0;
var blue = 0;
var green = 0;
var red = 0;
var yellow = 0;


// functions  for random crystal values
var blue = Math.floor((Math.random()*13)+1);
var green = Math.floor((Math.random()*13)+1);
var red = Math.floor((Math.random()*13)+1);
var yellow = Math.floor((Math.random()*13)+1);

//add win and losses to the div
$("#totalWins").text("Wins:" + wins);
$("#totalLosses").text("Losses:" + losses);

//function for random number


    var random = Math.floor(Math.random()*(120-19+1)+19);
    $("#randomNumber").text(random);
  

  //reset function 
function reset() {
	random = Math.floor(Math.random()*(120-19+1)+19);
	$("#randomNumber").text(random);
	totalScore = 0;
	 blue = Math.floor((Math.random()*13)+1);
	 green = Math.floor((Math.random()*13)+1);
	 red = Math.floor((Math.random()*13)+1);
	 yellow = Math.floor((Math.random()*13)+1);
	$("#userScore").text(totalScore);
}


//functions for winning or losing.

function winner() {
	wins++;
	$("#totalWins").text("Wins:" + wins);
	alert("You Won!");
	reset();
	
	
}

function loser() {
	losses++;
	$("#totalLosses").text("Losses:" + losses);
	alert("You Lost!");
	reset();

}



//create on clicks so when each crystal is clicked a score is generated 
//show score on screen 

	$("#blueicon").on("click", function() {
		totalScore = totalScore + blue;
		console.log(blue);
		$("#userScore").text(totalScore);
		if(totalScore === random) {
			winner();
			reset();
			
		}
		else if(totalScore > random) {
			loser();
			reset();
		

		}

		
		
	})
	$("#greenicon").on("click", function(){
		totalScore = totalScore + green;
		console.log(green);
		$("#userScore").text(totalScore);
		if(totalScore === random) {
			winner();
			reset();
		}
		else if(totalScore > random) {
			loser();
			reset();
		
		}

	})

	$("#redicon").on("click", function() {
		totalScore = totalScore + red;
		console.log(red);
		$("#userScore").text(totalScore);
		if(totalScore === random) {
			winner();
			reset();
		}
		else if(totalScore > random) {
			loser();
			reset();
		

		}

	})

	$("#yellowicon").on("click", function(){
		totalScore = totalScore + yellow;
		console.log(yellow);
		$("#userScore").text(totalScore);
		if(totalScore === random) {
			winner();
			reset();
		
		}
		else if(totalScore > random) {
			loser();
			reset();
			

		}
	})
	
 






