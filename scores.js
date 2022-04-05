var highscoresresults = document.getElementById("highscores")
var replayBTN = document.getElementById("replay");
var clearBTN = document.getElementById("clear");
var highcount = document.getElementById("highscorecount")
var amount = []
var scores = JSON.parse(localStorage.getItem('highscores')); // it's an array
function renderscores () {
    highscoresresults.innerHTML = "";
    highcount.textContent = amount.length

// loop over array to render scores
for (i = 0;i < scores.length;i++) {
    var amounts = amount[i]

    var listItem = document.createElement("li");
     listItem.textContent = newScore.initials + ' - ' + newScore.points;
     listItem.setAttribute("data-inddex", i);
     highscoresresults.appendChild(listItem);
}
}
replayBTN.addEventListener("click", function(event){
    location.assign('./index.html')
})

clearBTN.addEventListener("click", function(event){
    localStorage.removeItem("highscoreresults");
})