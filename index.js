// Create an Array of at least 3 losing messages
var youLost = ["so sorry", "whoops", "nope"];

// Create variables to count wins and losses
var countWins = 0;
var countLosses = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById(message);
var winning = document.getElementById(wins);
var losing = document.getElementById(losses);

// target all .box elements and attach a click event listener to each one using a loop
var boxes = document.getElementsByClassName("box");

// for(var i = 1; i <= boxes.length; i++) {
//     boxes[i].addEventListener("click");
// }

var boxOne = document.getElementById("box-1").addEventListener("click");

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
var clickedBox = boxOne.textContent
document.getElementById("box-1").textContent = 


// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
var randomNum = (getRandomInt(3));

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
if (clickedBox === randomNum){
    message.textContent = "Congrats! You picked the winning box! With nothing in it!"
    countWins += 1;
    winning.textContent = "Wins: " + countWins;
}

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
else {
    message.textContent = youLost[getRandomInt(3)];
    countLosses += 1;
    losing.textContent = "Losses: " + countLosses;
}