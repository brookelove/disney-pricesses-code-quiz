var highscoresresults = document.getElementById("highscores")
var replayBTN = document.getElementById("replay");
var clearBTN = document.getElementById("clear");
var highcount = document.getElementById("highscorecount")
var amount = []
var scores = JSON.parse(localStorage.getItem('highscores')); // it's an array
// [{ initials: 'AAS', points: 10 }]

function renderscores () {
// loop over array to render scores
for (i = 0;i < scores.length; i++) {
    // var amounts = amount[i]
    var newScore = scores[i];  // {initials: '', points: 0}

    console.log(newScore.initials, newScore.score);
    var listItem = document.createElement("li");
     listItem.textContent = newScore.initials + ' - ' + newScore.score;
     listItem.setAttribute("data-index", i);
     highscoresresults.appendChild(listItem);
}
}
renderscores()
replayBTN.addEventListener("click", function(event){
    event.preventDefault();
    location.assign('./index.html')
})

// clearBTN.addEventListener("click", function(event){
//     localStorage.clear("listItem");
//     listItem = 0;
// })