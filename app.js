/**
 * Created by sereno on 6/7/18.
 */

//IIFI for making your func private so no one could change the content
(function () {
// constructor
    function Question(question,answer,correctAnswer) {
        this.question=question;
        this.answer=answer;
        this.correctAnswer=correctAnswer;

    }
//display question method
    Question.prototype.DispalyQuestions=function()
    {
        console.log(this.question);
        for (var i=0 ;i<this.answer.length;i++){
            console.log(i+":"+this.answer[i]);

        }

    };
// compare answers method
    Question.prototype.CompareAnswers=function(ans,callBack)
    {
        var sc;
        if (ans===this.correctAnswer){
            console.log("Correct answer!");
            sc=callBack(true);


        }else {
            console.log("Try Again!");
            sc=callBack(false);
        }
        this.DispalyScore(sc);
    };

    Question.prototype.DispalyScore=function(score)
    {
        console.log("ur score is : "+score);
        console.log("-------------------------------");


    };
//next random question

// questions instances
    var q1 = new Question("whats the best front-end framework? ", ["react", "vue", "angular"], 1);
    var q2=new Question("whats the best back-end lang? ",["python","php","java"],0);
    var q3=new Question("which one is better? ",["GitHub","GitLab"],0);
//array and random and calling display method
    var questionsArray=[q1,q2,q3];

    // score func
    function score() {
        var score=0;
        return function (correct) {
            if (correct){
                score++;
            }
            return score;
        }

    }
     var resultScore=score();

// function for next question
    function next_question() {
        var RandQuestion= Math.floor(Math.random()*questionsArray.length);
        questionsArray[RandQuestion].DispalyQuestions();
        // prompt and calling compare Method
        var userAnswer=prompt("enter the number of answer: ");

        if (userAnswer!=="exit") {
            questionsArray[RandQuestion].CompareAnswers(parseInt(userAnswer),resultScore);
            next_question();
        }

    }
    // start the app for the first question
    next_question();
})();


