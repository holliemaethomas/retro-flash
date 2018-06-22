
'use strict';

//TODO1 Arrays of questions and more
var totalPoints = 0;
var cultQuestions = [];
var actionQuestions = [];
var scifiQuestions = [];
var horrorQuestions = [];
var magicQuestions = [];
var chevyQuestions = [];
var question = document.getElementById('question');
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');

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
  console.log(this);
}

//TODO3 Function to send all of the questions and answers to the constructor function
function populate() {
  new Questions('cult', 'The Goonies search for which pirate\'s treasure?', 'Blackbeard', 'Davy Jones', 'Calico Jack', 'One Eyed-Willy', 4);
  new Questions('cult', 'Which 80s movie theme song was recorded in just 3 hours?', '"Oh Yeah" - Ferris Bueller\'s Day Off', '"Don\'t You (Forget About Me)" - The Breakfast Club', '"Storybook Love" - The Princess Bride', '"Ghostbusters" - Ghostbusters', 2);
  new Questions('magic', 'In the Labyrinth, what other name does the Goblin King go by (Hint: The Goblin King is played by David Bowie!)?', 'The Lord of the Labyrinth', 'Robert', 'Jareth', 'His Highness', 3);
  new Questions('magic', 'What is the name of Atreyu’s horse in The NeverEnding Story?', 'Artax', 'Teeny Weeny', 'Bastian', 'Urgl', 1);
  new Questions('horror', 'Which movie is in the Guinness Book of Records for the most retakes of a single scene?', 'A Nightmare on Elm Street', 'The Shining', 'The Evil Dead', 'Poltergeist', 2);
  new Questions('horror', 'How many Nightmare on Elm Street movies were made in the 80s?', 3, 4, 5, 6, 3);
  new Questions('scifi', 'Which 80s movie was the highest grossing film of the decade?', 'E.T. The Extraterrestrial', 'Return of the Jedi', 'Tron', 'Aliens', 1);
  new Questions('scifi', 'This is the only actor to be killed by an Alien, Predator, and a Terminator.', 'Sigourney Weaver', 'Carl Weathers', 'Lance Henriksen', 'Bill Paxton', 4);
  new Questions('chevy', 'What nickname did Chevy Chase\'s wife call him in National Lampoon?', 'Buddy', 'Clark', 'Sparky', 'Mr. Griswold', 3);
}
populate();

//TODO4 Function to randomly pic the question, from the category selected

//TODO5 Function that sends the questions to the form on the game screen
function sendCult () {
  question;
  question.textContent = cultQuestions[0].question;
  ans1;
  ans1.textContent = cultQuestions[0].answer1;
  ans2;
  ans2.textContent = cultQuestions[0].answer2;
  ans3;
  ans3.textContent = cultQuestions[0].answer3;
  ans4;
  ans4.textContent = cultQuestions[0].answer4;
}
sendCult();




//TODO6 Function that runs when a player answers a question

//TODO7 Function that checks for the correct answer and adds the points

//TODO8 Function that runs when the user has answered ten questions, display scoreboard

//TODO9 Function to check if the user is a new or returning player

//TODO10 Function to store the username when he/she submits it

//TODO15 Function to handle question submissions

//TODO16 Event listeners