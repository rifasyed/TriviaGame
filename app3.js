$(document).ready(function() {


    var quizContainer;
    var resultsContainer;
    var startButton;
    
    $("#quiz").append(quizContainer)
    $("#results").append(resultsContainer)
    $("#start").append(startButton)
    
    $("#start").on("click", function() {
        var timeleft = 30;
        var downloadTimer = setInterval(function(){
        timeleft--;
        $("#timer").html("Time left: " + timeleft);
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
    })
    
    var trivia = [
    {
        questionChoice: "what is 2 plus 2",
        answers: ["1", "2", "4"],
        flags: [false, false, true],
        correctAnswer: "4"
    
    },
    {
        questionChoice: "what is my name?",
        answers: ["amy", "sarah", "tony"],
        flags: [true, false, false],
        correctAnswer: 0
    }
    ]
    
    for (var i = 0; i < trivia.length; i++) {
        $("#question").append("<h3>" + trivia[i].questionChoice + "</h3>")
        $("#answer1").append(trivia[i].answers)
        console.log(this.answers)
    
    }
    
    // var questionChoice;
    
    // function loadQuestion() {
    //     index = 0
    //     $("#question").html("<h3>" + q1.questionChoice + "</h3>")
    //     $(".answer1").html("hi") 
    
    // }
    // loadQuestion()
    
    })