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
var timePara = document.getElementById("#timePara");
var startBTN = document.getElementById("#start");
var game = document.getElementById("#game")
var questionasked = document.getElementById("#question");
var option0 = document.getElementById("#ans1");
var option1 = document.getElementById("#ans2");
var option2 = document.getElementById("#ans3");
var option3 = document.getElementById("#ans4");
var option4 = document.getElementById("#ans5");
var score = document.getElementById("#score");
var points = document.getElementById("#points");
var initials = document.getElementById("#initials");
var submitBTN = document.getElementById("#submit");
var endpage = document.getElementById("#endpage")
var replayBTN = document.getElementById("#replay");
var clearBTN = document.getElementById("#clear");

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
        options: { ///Question 2
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
function countdown () {
var timeLeft = "60";
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

// startBTN.addEventListener("click");
    //start fucntion to start quiz 
    function startQuiz (){

    }

    function showquestions () {
        //need to have a place for both the question and answers to go in html
        var questionshown = []
        var answersshown0 = [];
        var answersshown1 = [];
        var answersshown2 = [];
        var answersshown3 = [];
        var answersshown4 = [];
        var truth = [];
        //access the question @ the current index 
        questionshown = quiz[0].title; currentIndex++;
        //display question in html 
        questionasked.textContent = questionshown
        //access the options @ the current index 
        answersshown0 = quiz[0].options[0];
        answersshown1 = quiz[0].options[1];
        answersshown2 = quiz[0].options[2];
        answersshown3 = quiz[0].options[3];
        answersshown4 = quiz[0].options[4];
        //dislay answers @ the current index 
        option0.textContent = answersshown0;
        option1.textContent = answersshown1;
        option2.textContent = answersshown2;
        option3.textContent = answersshown3;
        option4.textContent = answersshown4;
        //display answer (loop)
        for (i = 0; i < options.length; i++) {;
        //assign them a click handler "when click happens x happens"
            if ("click",option[i]) {
            currentIndex++
        }
        }
}

//function for the check anwser 
function checkanswer () {
    var truth = [];
    //call upon the asnwers 
        truth = quiz[0].answer;currentIndex++
        for (i = 0; i < answer.length; i++) {
            if ("click",options[i] === answer[i]) {
                currentIndex++;
                points++;
            } else {
                currentIndex++;
                timeLeft--;
            }
        }
    }


function endgame () {
    if (timeLeft === 0) {
        clearInterval (timeLeft)
    }
    points = 0
    localStorage.setItem("points", 0)
}

// initialsBTN.addEventListener("click", function (event){
//     points = 0;
//     localStorage.setItem("points", 0)
//     points.textContent = 0;
// })
// //reset button 
// replayBTN.addEventListener("click", function(event){
//     event.preventDefault();
//     var user = {
        
//     }
// })



