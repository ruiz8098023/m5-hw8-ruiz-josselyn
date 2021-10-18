// Create an Array of at least 3 losing messages
var youLost = ["so sorry", "whoops", "nope"]

// Create variables to count wins and losses
var countWins = 0
var countLosses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById('message')
var winCount = document.getElementById('wins')
var lossCount = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
var boxes = document.querySelectorAll('.box')
console.log(boxes)

for(var i = 0; i < boxes.length; i++) {
    var boxElement = boxes[i];

    boxElement.onclick = function(event) {

        // within each click event...
        // determine which box was clicked with 'this.textContent' or event.target.textContent
        // convert that value to a Number and store it to a variable
        var clickedBox = event.target.textContent
        var clickedBoxNum = Number(clickedBox)
        console.log(clickedBoxNum)
    }
}


// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
var winningBox = Math.floor(Math.random() * 3) + 1;


// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
if (this.clickedBoxNum === winningBox){
    message.textContent = "Congrats! You picked the winning box! With nothing in it!"
    countWins++
    winCount.textContent = "Wins: " + countWins
}

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
else {
    message.textContent = youLost[Math.floor(Math.random() * 3) + 1];
    countLosses += 1;
    lossCount.textContent = "Losses: " + countLosses;
}