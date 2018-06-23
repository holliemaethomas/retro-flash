
'use strict';
var alreadyShown = [];
//Arrays of questions and more
var totalPoints = 0;
var questionsTotal = 0;
var cultQuestions = [];
var actionQuestions = [];
var scifiQuestions = [];
var horrorQuestions = [];
var magicQuestions = [];
var chevyQuestions = [];
var chosenCategory = [];
var newQuestion = [];
var target = 0;
var question = document.getElementById('question');
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');
var comments = document.getElementById('comments');
var categories = document.getElementById('categories');
var answers = document.getElementById('answers');

//TODO2 Constructor function to generate the question arrays
function Questions(category, question, answer1, answer2, answer3, answer4, correctAns) {
  this.category = category;
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.correctAns = correctAns;
  if(this.category === 'cult') {
    cultQuestions.push(this);
  } else if(this.category === 'action') {
    actionQuestions.push(this);
  } else if(this.category === 'scifi') {
    scifiQuestions.push(this);
  } else if(this.category === 'horror') {
    horrorQuestions.push(this);
  } else if(this.category === 'magic') {
    magicQuestions.push(this);
  } else {
    chevyQuestions.push(this);
  }
  //console.log(this);
}

//TODO3 Function to send all of the questions and answers to the constructor function
function populate() {
  new Questions('cult', 'The Goonies search for which pirate\'s treasure?', 'Blackbeard', 'Davy Jones', 'Calico Jack', 'One Eyed-Willy', 4);
  new Questions('cult', 'Which 80s movie theme song was recorded in just 3 hours?', '"Oh Yeah" - Ferris Bueller\'s Day Off', '"Don\'t You (Forget About Me)" - The Breakfast Club', '"Storybook Love" - The Princess Bride', '"Ghostbusters" - Ghostbusters', 2);
  new Questions('magic', 'In the Labyrinth, what other name does the Goblin King go by (Hint: The Goblin King is played by David Bowie!)?', 'The Lord of the Labyrinth', 'Robert', 'Jareth', 'His Highness', 3);
  new Questions('magic', 'What is the name of Atreyu’s horse in The NeverEnding Story?', 'Artex', 'Teeny Weeny', 'Bastian', 'Urgl', 1);
  new Questions('horror', 'Which movie is in the Guinness Book of Records for the most retakes of a single scene?', 'A Nightmare on Elm Street', 'The Shining', 'The Evil Dead', 'Poltergeist', 2);
  new Questions('horror', 'How many Nightmare on Elm Street films were made in the 80s?', 3, 4, 5, 6, 3);
  new Questions('scifi', 'Which 80s movie was the highest grossing film of the decade?', 'E.T. the Extra-Terrestrial', 'Return of the Jedi', 'Tron', 'Aliens', 1);
  new Questions('scifi', 'This is the only actor to be killed by an Alien, Predator, and a Terminator.', 'Sigourney Weaver', 'Carl Weathers', 'Lance Henriksen', 'Bill Paxton', 4);
  new Questions('chevy', 'What nickname did Chevy Chase\'s wife call him in National Lampoon?', 'Buddy', 'Clark', 'Sparky', 'Mr. Griswold', 3);
  new Questions('cult', 'What song did Ducky lip sync in Pretty in Pink?', '"Try a Little Tenderness"', '"Nothing\'s Gonna Stop Us Now"', '"Saving All My Love for You"', '"Longer"', 1);
  new Questions('action', 'Name That Movie: “Snakes. Why’d it have to be snakes?”', 'Indiana Jones and the Template of Doom', 'Crocodile Dundee', 'The Princess Bride', 'Raiders of the Lost Ark', 4);
  new Questions('magic', 'Jim Hensen\'s The Dark Crystal takes place in "another world, another time, in the age of _____."', 'surprise', 'wonder', 'magic', 'uncertainty', 2);
  new Questions('scifi', 'The main street set in Back to the Future is also the main street in what other 80s movie?', 'RoboCop', 'Repo Man', 'Gremlins', 'E.T. the Extra-Terrestrial', 3);
  new Questions('scifi', 'What is the single most valuable commodity in David Lynch\'s Dune?', 'Melange', 'Coffee', 'Salt', 'Plutonium', 1);
  new Questions('horror', 'Which is NOT a movie directed by John Carpenter?', 'The Fog', 'Halloween II', 'The Thing', 'Prince of Darkness', 2);
  new Questions('scifi', 'Whose work did NOT have an influence on Blade Runner?', 'Philip K. Dick', 'Dan O\'Bannon', 'Jean Giraud', 'Arthur C. Clarke', 4);
  new Questions('magic', 'What god does Conan the Barbarian worship?', 'Odin', 'Kull', 'Crom', 'Bhaal', 3);
  new Questions('magic', 'What was the first DVD sent out on Netflix in 1998?', 'Beetlejuice', 'The Dark Crystal', 'The NeverEnding Story', 'Gremlins', 1);
}
populate();

//Function to randomly pic question, from category selected and cancel repeat question


function randomQuestion() {
  var randomNumber = Math.floor(Math.random() * chosenCategory.length);
  newQuestion = chosenCategory[randomNumber];
  noRepeats(newQuestion);
  sendQuestion();
  alreadyShown.push(newQuestion);
}

function noRepeats(question){
  for (var i = 0; i < alreadyShown.length; i++){
    if (question !== alreadyShown[i]){
      sendQuestion();
    } else {
      console.error('This question has already shown. Please choose another one.');
      randomQuestion();
    }
  }
}

//TODO5 Function that sends the questions to the form on the game screen
function sendQuestion() {
  question;
  question.textContent = newQuestion.question;
  ans1;
  ans1.textContent = newQuestion.answer1;
  ans2;
  ans2.textContent = newQuestion.answer2;
  ans3;
  ans3.textContent = newQuestion.answer3;
  ans4;
  ans4.textContent = newQuestion.answer4;
}

//Function that checks for the correct answer and adds the points
function pickAnswer(event) {
  event.preventDefault();
  target = event.target.id;
  console.log(target);
  console.log(newQuestion.correctAns);
  if('ans' + newQuestion.correctAns === target) {
    totalPoints += 50;
    console.log(totalPoints);
    //TODO17 Need correct indication for user
  } else {
    //TODO18 Need incorrect indication for user
  }
  checkTen();
}

//Function that runs when the user has answered ten questions, display scoreboard
function checkTen() {
  if (questionsTotal === 10) {
    //TODO19 Set up delay and then display score board
  } else {
    questionsTotal ++;
  }
}

//Function to check if the user is a new or returning player
if(!localStorage.userName) {
  console.log('new user');
  formSubmit();
}

//Function that runs when a player chooses a category
function pickCategory(event) {
  event.preventDefault();
  target = event.target.id;
  if(target === 'cult') {
    chosenCategory = cultQuestions;
  } else if(target === 'action') {
    chosenCategory = actionQuestions;
  } else if(target === 'scifi') {
    chosenCategory = scifiQuestions;
  } else if(target === 'horror') {
    chosenCategory = horrorQuestions;
  } else if(target === 'magic') {
    chosenCategory = magicQuestions;
  } else {
    chosenCategory = chevyQuestions;
  }
  randomQuestion();
}

function repeatCheck (){
  var alreadyShown = [];

}

//TODO15 Function to handle question submissions
function sendComments(event) {
  console.log('comment click');
  event.preventDefault();
}

//Event listeners
categories.addEventListener('click', pickCategory);
answers.addEventListener('click', pickAnswer);
//comments.addEventListener('enter', sendComments);

//TODO20 find a way to keep the user from clicking on the answers more than once to rack up points
