//PSEUDOCODE
    //select all HTML elements 
        //select all of div elementrs 
        //select all id elements
    //global question index @ 0 
    //global timer  how much time (assign in id: undefined)
    //start fucntion to start quiz 
        //start timer
        //call a function to get question 
    //function to get question 
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
var quiz = {
    questions: [
        "Which disney princess is the only one who isnt a disney princess by blood or marrige?",
        "How many official princesses are there in total animated?",
        "Who is not concidered apart of the offical disney princesses?",
        "Which disney princess is the only one to have brothers?",
        "Which disney princess is the youngest?"
    ],
    answers: [
        [ //question 0
        "Meridith",
        "Tiana",
        "Mulan", //right answer
        "Anastasia",
        "Ariel"
        ]
        [ //Question 1
        "12", //rigth answer
        "24",
        "100",
        "48",
        "16"
         ]
         [ ///Question 2
         "Rapunzel",
         "Elsa", //right answer
         "Moana",
         "Aurora",
         "Meridith"
         ]
         [//Question 3
         "Snow White",
         "Moana",
         "Merida", //right answer
         "Pocahontas",
         "Tiana"
         ]
         [ //Question 4
         "Aurora",
         "Belle",
         "Ariel",
         "Snow White", //right answer
         "Pocahontas"
         ]

    ]
}