/**
 * Created by sereno on 6/7/18.
 */

//IIFI for making your func private so no one can change the content
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

    }
// compare answers method
    Question.prototype.CompareAnswers=function(ans)
    {
        if (ans===this.correctAnswer){
            console.log("Correct answer!");
        }else {
            console.log("Try Again!");

        }

    }
// questions instances
    q1=new Question("whats the best front-end framework? ",["react","vue","angular"],1);
    q2=new Question("whats the best back-end lang? ",["python","php","java"],0);
    q3=new Question("which one is better? ",["GitHub","GitLab"],0);
//array and random and calling display method
    var questionsArray=[q1,q2,q3];
    var RandQuestion= Math.floor(Math.random()*questionsArray.length);
    questionsArray[RandQuestion].DispalyQuestions();
// prompt and calling compare Method
    var userAnswer=parseInt(prompt("enter the number of answer: "));
    questionsArray[RandQuestion].CompareAnswers(userAnswer);

})();


