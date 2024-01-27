const quizQuestions = [
    {
       question : "Which is largest animal in the world ?",
       answers : [
          {text:"shark" , correct:false},
          {text:"Blue whale" , correct:true},
          {text:"Elephant" , correct:false},
          {text:"Giraffe" , correct:false}
       ]
    } ,
    {
        question : "Wigulshkjm;l the world ?",
        answers : [
           {text:"shark" , correct:false},
           {text:"Blue whale" , correct:false},
           {text:"Elephant" , correct:true},
           {text:"Giraffe" , correct:false}
        ]
     } ,
     {
        question : "Which is largest animal in the world ?",
        answers : [
           {text:"shark" , correct:false},
           {text:"Blue whale" , correct:true},
           {text:"Elephant" , correct:false},
           {text:"Giraffe" , correct:false}
        ]
     } ,
     {
        question : "Which is largest animal in the world ?",
        answers : [
           {text:"shark" , correct:false},
           {text:"Blue whale" , correct:true},
           {text:"Elephant" , correct:false},
           {text:"Giraffe" , correct:false}
        ]
     } ,
  
];

const showQuestion = document.getElementById('question');
const optionsid = document.getElementById('optionsid');
const nextbtn = document.getElementById('nextbtn');

let score = 0
let index = 0

function startQuiz()
{
   score = 0
   index = 0
   nextbtn.innerHTML = "Next"
   showQuestionAnswers();
}

function showQuestionAnswers()
{
   resetState();

   let currentQuestion = quizQuestions[index];
   let quesNo = index + 1;
   showQuestion.innerHTML = quesNo + " . " + currentQuestion.question;

   currentQuestion.answers.forEach( (answer) => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("ans");
       optionsid.appendChild(button);
      
       if(answer.correct)
       {
           button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", selectAnswer);
   });
}

function resetState()
{
   nextbtn.style.display = "none";
   while(optionsid.firstChild){
       optionsid.removeChild(optionsid.firstChild);
   }
}

function selectAnswer(e)
{
   const selectBtn = e.target;
   
   //console.log(e);
   console.log(selectBtn); 
   const isCorrect = selectBtn.dataset.correct === "true";
   console.log(isCorrect);
   if(isCorrect){
       selectBtn.classList.add("correct");
       selectBtn.style.backgroundColor = "#9aeabc";
       score++;
   }else{
       selectBtn.classList.add("incorrect");
       selectBtn.style.backgroundColor = "#ff9393";
   }

   Array.from(optionsid.children).forEach(button => {
      if(button.dataset.correct === "true")
      {
        button.classList.add("correct")
      }
      button.disabled = true;
   })
   nextbtn.style.display = "block";
}

function showScore(){
    resetState();
    showQuestion.innerHTML = `You have ${score} out of ${quizQuestions.length}`
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
    
}

function handleNextButton(){
    index++;
    if(index < quizQuestions.length){
        showQuestionAnswers()
    }else{
        showScore();
    }
}

nextbtn.addEventListener("click", () => {
    if(index < quizQuestions.length)
    {
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();


