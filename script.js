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
        //need to have a place for bothe the question and answers to go in html
        //access the question @ the current index 
        //display question in html 
        //display answer (loop)
            //assign them a click handler "when click happens x happens"
    //function for the check anser 
        //call upon the asnwers 
        //button click matches the correct answers
            //it is an if block
                //if wrong subtract from time interval determied above 
        //if the current index is the same as the array end the quiz otherwise go to next question 
    //the ending function 
        //timer function countdown decrement time and rest time 
        // goes in start() function

//variables that are made for it 
    var quiz = [
    {
        questionOPTION:"Which disney princess is the only one who isnt a disney princess by blood or marrige?",
        answers: { //question 0
        a: "Meridith",
        b:"Tiana",
        c: "Mulan", //right answer
        d: "Anastasia",
        e: "Ariel"
        },
        correctanswer: "Mulan"
    },
    {
        questionOPTION: "How many official princesses are there in total animated?",
        answers: {//Question 1
        a: "12", //rigth answer
        b: "24",
        c: "100",
        d: "48",
        e: "16",
        },
        correctanswer: "12"
    },
    {
        questionOPTION: "Who is not concidered apart of the offical disney princesses?",
        answers: { ///Question 2
        a: "Rapunzel",
        b: "Moana",
        c: "Aurora",
        d: "Meridith",
        e: "Elsa" //right answer
        },
        correctanswer: "Elsa"
    },
    {
        questionOPTION: "Which disney princess is the only one to have brothers?",
        answers: {//Question 3
        a: "Snow White",
        b: "Merida", //right answer
        c: "Moana",
        d: "Pocahontas",
        e: "Tiana"
        },
        correctanswer: "Merida"
    },
    {
        quesitonOPTION: "Which disney princess is the youngest?",
        answers: { //Question 4
        a: "Aurora",
        b: "Belle",
        c: "Ariel",
        d: "Snow White", //right answer
        e: "Pocahontas"
        },
        correctanswer: "Snow White"
    }
];
var question = document.getElementById("#question");
var option1 = document.getElementById("#ans1")
var option1 = document.getElementById("#ans2")
var option1 = document.getElementById("#ans3")
var option1 = document.getElementById("#ans4")
var option1 = document.getElementById("#ans5")
function showquestions () {

    question.textContent = questionOPTION;

}










// timePara = document.querySelector("#timePara");
// var timer;
// var timeleft = 60;


// function starttimer () {
//     timer = setInterval(function (){
//         timeleft--;
//         console.log(timeleft);
//         timePara.textContent = timeleft;
//     }, 1000)
// }