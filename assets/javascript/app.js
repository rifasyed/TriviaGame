$(document).ready(function() {
    var num = 0;
    var count = 0;
    var max = 10;
    var stats = 0;
    var qAnswered = [];

    var newGame = function() {
        num = 0
        count = 0
        stats = 0
        qAnswered = []
    }
    
    var asked = function() {
        var answer = false
        for (var i = 0; i <= qAnswered.length; i++) {
            if (num == qAnswered[i]) {
                answer = true
            }
        }
        return answer
    }
    
    var pickQuestion = function() {
        var max = Object.keys(trivia).length;
        num = Math.floor((Math.random() * max) + 1)
    }
    
    var newQuestion = function() {
        qAnswered.push(num)
        $("#live-question").html(trivia[i].question)
        $('#answer-1').append(trivia[i].answers[0]);
        $('#answer-2').append(trivia[i].answers[1]);
        $('#answer-3').append(trivia[i].answers[2]);
        $('#answer-4').append(trivia[i].answers[3]);
        updateStats()
        count++
        $("#points").text(count + "/" + max)
    }
    
    var right = function(answerChoice) {
        if (answerChoice == trivia[num][correctAnswer]) {
            return true
        }
        else {
            return false
        }
    }
    
    var updateStats = function() {
        $('#game-stats').text(stats);
    
    }

    $("#new-game").click(function() {
        var timeleft = 30;
        var downloadTimer = setInterval(function(){
        timeleft--;
        $("#timer").html("Time left: " + timeleft);
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
        
        $("#start").fadeOut(500, function() {
            newGame()
            newQuestion()
            pickQuestion()
            $("#quiz").fadeIn(500)
        })
    })

    $("#submit-btn").click(function() {
        var answerChoice = $("input:radio[name=ans]:checked").val();
        if(answerChoice == true) {
            $("#quiz").fadeOut(500, function() {
                score++
                updateStats()
                $('.right-ans').fadeIn(500)            
            })
        }
        else {
            $("#quiz").fadeOut(500, function() {
                $("#wrong-ans").fadeOut(500)
            })
        }
    })
    $("#next").click(function() {
        $("#right-ans").fadeOut(500, function() {
            $("#wrong-ans").fadeOut(500, function() {
                if(count>=max) {
                    updateStats()
                    $("#final-score").fadeIn(500)
                }
                else {
                    newQuestion()
                    $("form input").prop('checked', false);
                    $('#quiz').fadeIn(500);
                }
            })

        })

    })
    $("#play-again").click(function() {
        $("#final-score").fadeOut(500, function() {
            newGame()
            newQuestion()
            $("input").prop('checked', false);
            $('#quiz').fadeIn(500);
        })
    })
})

var trivia = [
    {
        question: "Which of these is NOT an alias used by Clint Barton?",
        answerChoices: ["Trickshot", "Goliath", "Hawkeye", "Ronin"],
        // image:
        correct: 0
    },
    {
        question: "Who is the richest character in the Marvel Universe?",
        answerChoices: ["Tony Stark", "King T'Challa", "Professor X", "Reed Richards"],
        // image:
        correct: 1
    },
    {
        question: "The Inhumans got their powers from...?",
        answerChoices: ["Radiation", "The X-Gene", "The Metagene", "Terrigen"],
        // image:
        correct: 3
    }


]

