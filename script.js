//PSEUDOCODE
    //select all HTML elements 
        //select all of div elementrs 
        //select all id elements
    //global question index @ 0 
    //global timer how much time (assign in id: undefined)
    //start fucntion to start quiz 
        //start timer
        //call a function to get question 
    //function to get question 
        //need to have a place for both the question and answers to go in html
        //access the question @ the current index 
        //display question in html 
        //display answer (loop)
            //assign them a click handler "when click happens x happens"
    //function for the check anwser 
        //call upon the asnwers 
        //button click matches the correct answers
            //it is an if block
                //if wrong subtract from time interval determied above 
        //if the current index is the same as the array end the quiz otherwise go to next question 
    //the ending function 
        //timer function countdown decrement time and rest time 
        // goes in start() function
//workspace 
//select all HTML elements 
var timePara = document.getElementById("timePara");
var startBTN = document.getElementById("start");
var mainDiv = document.getElementById("main")
var gameDiv = document.getElementById("game")
var questionasked = document.getElementById("question");
var option0 = document.getElementById("ans1");
var option1 = document.getElementById("ans2");
var option2 = document.getElementById("ans3");
var option3 = document.getElementById("ans4");
var option4 = document.getElementById("ans5");
var correct = document.getElementById("correct/wrong")
var congratsDiv = document.getElementById("congrats");
var points = document.getElementById("points");
var initialsInput = document.getElementById("initials");
var msgDiv = document.getElementById("msg");
var submitBTN = document.getElementById("submit");
var submissionResponse = document.getElementById("response")
var endpage = document.getElementById("endpage")
var replayBTN = document.getElementById("replay");
var clearBTN = document.getElementById("clear");
var highscoresresults = document.getElementById("highscores")
var allOptions = document.getElementsByClassName("options");

//global question index @ 0 
var quiz = [
    {
        title:"Which disney princess is the only one who isnt a disney princess by blood or marrige?",
        options: { //question 0
        a: "Meridith",
        b:"Tiana",
        c: "Mulan", //right answer
        d: "Anastasia",
        e: "Ariel"
        },
        answer: "Mulan"
    },
    {
        title: "How many official princesses are there in total animated?",
        options: {//Question 1
        a: "12", //rigth answer
        b: "24",
        c: "100",
        d: "48",
        e: "16",
        },
        answer: "12"
    },
    {
        title: "Who is not concidered apart of the offical disney princesses?",
        options: { //Question 2
        a: "Rapunzel",
        b: "Moana",
        c: "Aurora",
        d: "Meridith",
        e: "Elsa" //right answer
        },
        answer: "Elsa"
    },
    {
        title: "Which disney princess is the only one to have brothers?",
        options: {//Question 3
        a: "Snow White",
        b: "Merida", //right answer
        c: "Moana",
        d: "Pocahontas",
        e: "Tiana"
        },
        answer: "Merida"
    },
    {
        title: "Which disney princess is the youngest?",
        options: { //Question 4
        a: "Aurora",
        b: "Belle",
        c: "Ariel",
        d: "Snow White", //right answer
        e: "Pocahontas"
        },
        answer: "Snow White"
    }
];
//global timer how much time (assign in id: undefined)
var timer;
var timeLeft;
// set an if statment that wil say of the button is running do not restart the time 
function countdown () {
var timeLeft = 60;
 timer = setInterval(()=>{
     timeLeft--
     if(timeLeft > 1){
         timePara.textContent = timeLeft;
         timeLeft--
     } else if (timeLeft === 1) {
         timePara.textContent = timeLeft + "second remaining"
        }
 }, 1000)
}
 startBTN.addEventListener("click", startQuiz);
    //start fucntion to start quiz 
function startQuiz (){
     mainDiv.setAttribute("class", "hide")
     gameDiv.setAttribute("class", "")
     congratsDiv.setAttribute("class", "hide")
    countdown();
    showquestions();
    }
var currentIndex = 0;
function showquestions () {
//need to have a place for both the question and answers to go in html
//access the question @ the current index 
    var currentQuestion = quiz[currentIndex];
    var questionshown = currentQuestion.title;
//display question in html 
    questionasked.textContent = questionshown;
//access the options @ the current index 
    var answerOptions = currentQuestion.options;
    var answersshown0 = answerOptions['a'];
    var answersshown1 = answerOptions['b'];
    var answersshown2 = answerOptions['c'];
    var answersshown3 = answerOptions['d'];
    var answersshown4 = answerOptions['e'];
//dislay answers @ the current index 
    option0.textContent = answersshown0;
    option0.setAttribute('value', answersshown0);
    option1.textContent = answersshown1;
    option1.setAttribute('value', answersshown1);
    option2.textContent = answersshown2;
    option2.setAttribute('value', answersshown2);
    option3.textContent = answersshown3;
    option3.setAttribute('value', answersshown3);
    option4.textContent = answersshown4;
    option4.setAttribute('value', answersshown4);
//display answer (loop)

 //assign them a click handler "when click happens x happens"
//     allOptions[i]("click", function(event) {
//         console.log(event.target);
//         checkanswer(event.target.value);
//     });
 }
var score = 0;
//function for the check anwser 
function checkanswer (event) {
//call upon the asnwers 
console.log(event.target.textContent)
    console.log(quiz[currentIndex].answer)
    if (event.target.textContent === quiz[currentIndex].answer) {
    // add points
        score = score+10;
    //correct function
     correct.textContent = "correct";
     correct.setAttribute = ("class", "correct");
     currentIndex++
    } else {
            // deduct time
        timeLeft-=10;
            //incorrect function
         correct.textContent = "incorrect";
         correct.setAttribute = ("class", "incorrect");
         currentIndex++
        }
        if (currentIndex === quiz.length){
            endgame();
        } else {
            showquestions();
        }
}
option0.addEventListener('click',checkanswer)
option1.addEventListener('click',checkanswer)
option2.addEventListener('click',checkanswer)
option3.addEventListener('click',checkanswer)
option4.addEventListener('click',checkanswer)

function endgame () {
    console.log(score)
    gameDiv.setAttribute("class", "hide")
    congratsDiv.setAttribute("class", "")
    if (timeLeft === 0) {
        clearInterval (timeLeft)
    } else if (currentIndex === quiz.length) {
        clearInterval(timer);
    }
    localStorage.setItem("points", score)
    points.textContent = score

}
//submit button 
//  function renderMessage () {
//      var user = localStorage.getItem("highscores");
//      if (!user) {
//          return;
//      }
// highscoresresults.textContent = user
//  }
submitBTN.addEventListener("click", function(event) {
    event.preventDefault();
    location.assign('./highscore.html');
    var currentPoints = localStorage.getItem('points');
    var existingScores = localStorage.getItem('highscores')|| [];
    var newScore = {
        initials: initialsInput.value,
        score: currentPoints
    }
    
    existingScores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(existingScores));
      location.assign('./highscore.html');

//    renderMessage()
})

//save the score and the initals and score together 