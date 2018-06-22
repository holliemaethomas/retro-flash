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
  } else if(this.category === ' horror') {
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
  new Questions('cult', 'Test cult question', 'Test cult answer1', 'Test cult answer2', 'Test cult answer3', 'Test cult answer4', 3);
  new Questions('action', 'Test action question', 'Test action answer1', 'Test action answer2', 'Test action answer3', 'Test action answer4', 2);
}
populate();

//TODO4 Function to randomly pic the question, from the category selected

//TODO5 Function that sends the questions to the form on the game screen

//TODO6 Function that runs when a player answers a question

//TODO7 Function that checks for the correct answer and adds the points

//TODO8 Function that runs when the user has answered ten questions, display scoreboard

//TODO9 Function to check if the user is a new or returning player

//TODO10 Function to store the username when he/she submits it

//TODO15 Function to handle question submissions

// TODO16 Event listeners