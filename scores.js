var highscoresresults = document.getElementById("highscores")
var replayBTN = document.getElementById("replay");
var clearBTN = document.getElementById("clear");

var scores = JSON.parse(localStorage.getItem('highscores')); // it's an array

// loop over array to render scores
for (i = 0;i < scores.length;i++) {
    var listItem = document.createElement("li");
     listItem.textContent = scores.initials + ' - ' + scores.points;
     document.highscoresresults.appendChild(listItem);
}