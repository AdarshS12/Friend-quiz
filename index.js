var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is Your Name? ');
var score = 0
console.log('Welcome ' + userName + ' to Do Know Adarsh');
console.log('note:- use first capital letter to answer my queations ')

function qna(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    console.log('You are Right');
    score = score + 1
  }
  else {
    console.log('You are Wrong!');
  }
  console.log('Your score is ', score);
  console.log('--------------')

}

var questions = [{
  question: 'Where do I live? ',
  answer: 'Bhopal'
},
{
  question: 'Where Do i study? '
  , answer: 'MITS'
},
{
  question: 'What is my favorite colour? '
  , answer: 'Black'
}, {
  question: 'What is my favorite fps Game? '
  , answer: 'Valorant'
}, {
  question: 'What is my favorite Movie? '
  , answer: '3 Idiots'
}, {
  question: 'What is my favorite Food? '
  , answer: 'Pizza'
}, {
  question: 'What is my favorite Hobby? '
  , answer: 'Online Gaming'
}, {
  question: 'Whats my nickname? '
  , answer: 'Ashu'
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  qna(currentQuestion.question, currentQuestion.answer);
}
