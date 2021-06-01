import React, {useState} from 'react';
import './App.css';


function App() {

  const questions = [
    {
      questionText: 'Who is the Deputy President of Kenya?',
      answerOptions:[
      {answerText:'Uhuru Kenyatta',isCorrect:false},
      {answerText:'Raila',isCorrect:false},
      {answerText:'William Ruto',isCorrect:true},
      {answerText:'Babu Owino Jr.',isCorrect:false}
      ],
    },

    

{
    questionText: 'Which country did COVID-19 start outbreaking from?',
    answerOptions:[
      {answerText:'India',isCorrect:false},
      {answerText:'China',isCorrect:true},
      {answerText:'France',isCorrect:false},
      {answerText:'South Africa',isCorrect:false}
    ],
  
},

{
questionText: 'Which is not a measure to regulate COVID-19?',
    answerOptions:[
      {answerText:'Washing hands',isCorrect:false},
      {answerText:'Shaking hands',isCorrect:true},
      {answerText:'Wearing mask',isCorrect:false},
      {answerText:'Social distance',isCorrect:false}
    ],
  
},

{
questionText: 'Which is not part of a balanced diet?',
    answerOptions:[
      {answerText:'Githeri',isCorrect:false},
      {answerText:'Nyanya',isCorrect:false},
      {answerText:'Potatoes',isCorrect:false},
      {answerText:'Pizza',isCorrect:true}
    ],
  
},

{
  questionText: 'When is the next Kenyan general election?',
    answerOptions:[
      {answerText:'2022',isCorrect:true},
      {answerText:'2021',isCorrect:false},
      {answerText:'2030',isCorrect:false},
      {answerText:'2025',isCorrect:false}
    ],
  
},

{
  questionText: 'How many stages of HIV/AIDS are there?',
  answerOptions:[
  {answerText:'6',isCorrect:false},
  {answerText:'2',isCorrect:false},
  {answerText:'3',isCorrect:false},
  {answerText:'4',isCorrect:true}
  ],
},

{
  questionText: 'Which country colonized Kenya?',
  answerOptions:[
  {answerText:'Britain',isCorrect:true},
  {answerText:'France',isCorrect:false},
  {answerText:'German',isCorrect:false},
  {answerText:'China',isCorrect:false}
  ],
},

{
  questionText: 'Who is the president of USA?',
  answerOptions:[
  {answerText:'Barrak Obama',isCorrect:false},
  {answerText:'Joe Bidden',isCorrect:true},
  {answerText:'Donald Trump',isCorrect:false},
  {answerText:'Michelle Obama',isCorrect:false}
  ],
},

{
  questionText: 'Which is not a weather instrument?',
  answerOptions:[
  {answerText:'Raingauge',isCorrect:false},
  {answerText:'Wind sock',isCorrect:false},
  {answerText:'Anenometer',isCorrect:false},
  {answerText:'Speedometer',isCorrect:true}
  ],
},

{
  questionText: 'Which is the highest mountain in the world?',
  answerOptions:[
  {answerText:'Mt.Kilimanjaro',isCorrect:false},
  {answerText:'Mt.Everest',isCorrect:true},
  {answerText:'Mt.Kenya',isCorrect:false},
  {answerText:'Mt.Sinai',isCorrect:false}
  ],
},

  ]

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore] = useState(false);



const [score,setScore] = useState(0);
{/*if(score >= 6){
  alert('Well Done!!');
}*/} 

const handleAnswerButtonClick = (isCorrect) => {
  
  if(isCorrect === true){
setScore(score + 1);
alert('CORRECT');

}

else{
  alert('WRONG');
}

//const classToApply = selectedAnswer == currentQuestion.answerOptions ? 'correct'
//?'wrong' ;

  const nextQuestion = currentQuestion + 1;

if (nextQuestion < questions.length){
  setCurrentQuestion(nextQuestion);
}
else {
  setShowScore(true);
 
}
};

  return (
    <div className="puzzle">
  {/*Hint:replace 'false' with logic to display the score when the user has answered 
  all the questions 
  */}

  {showScore?(
      <div className="score-board">
        You scored {score} out of {questions.length}

       
      </div>


    ) :
    
    (

      <div className="container">
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion +1 }</span>/{questions.length}
        </div>

        <div className="question-text">{questions[currentQuestion].questionText}</div>

        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
     
      </div>
      </div>
    ) }
    
  </div>

  );
}

export default App;
