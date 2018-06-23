
'use strict';

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
  new Questions('chevy', 'In the 3 Amigos, What did the Dusty Bottoms play for the other amigos to dance to in the cantina?', 'Arm and Arm', 'My little buttercup', 'Dancing cheek to cheek', 'My love sweet love', 2);
  new Questions('chevy', 'In the Christmas Vaction, Which football team hat did Clark wear?', 'Packers', 'Bears', 'Steelers', 'Chiefs', 2);
  new Questions('chevy', 'In Funny Farm, What hat does Andy wear for most of the film?', 'Chicago Cubs', 'New York Mets', 'Boston Red Sox', 'New York Yankees', 2);
  new Questions('chevy', 'In Caddy Shack, Ty Webb and Judge Smails original amount bet on the golf course is?', '$20k', '$40k', '$80k', '$100k', 1);
  new Questions('action', 'In the Warriors, what were they asked to do by a rival gang?', 'Just beat it', 'Come out and play, Let\'s get down to it', 'Truth or Dare', 2);
  new Questions('action', 'In Escape from New York, what is the only thing that snake asks for when escaping?', 'Shower', 'Water', 'Phone Call', 'A Ride', 4);
  new Questions('In They Live, NADA is here to kick ass and?', 'Take Names', 'Take a break', 'Right Wrongs', 'Chew bubblegum', 4);
  new Questions('action', ' In Highlander, The main villan the Kurgan says "it\'s better to?"', 'Leave a good looking corpse', 'Burn both ends of the candle out?', 'Burnout than to fade away', 'There can only be two', 3);
  new Questions('horror', 'In Halloween, what were the kids watching on the tv before all the murder ensues?', 'War of the Worlds', 'Frankenstien', 'Dracula', 'The Thing', 4);
  new Questions('horror', 'In Fright Night, what was in the oven?', 'Meatloaf', 'Dinner', 'Pie', 'Dessert', 2);
  new Questions('horro', 'In Lost Boys, what was the name of the main love interest?', 'Star', 'Peony', 'Soleil', 'Moonflower', 1);
  new Questions('horror', 'In Pet Sematary, what was the name of the demented cat that comes back to life', 'Josie', 'Kitty', 'Churches', 'Maxy', 3);
  new Questions('scifi', 'In the Thing, what computer game did MacReady play while sitting in his cabin?', 'Tetris', 'Chess', 'Pong', 'Solitair', 2);
  new Questions('scifi', 'In Aliens, what was the little girls name who was the only survivor at the LV-426 settlement?', 'Sarah', 'Hadley', 'Newt', 'Salammander', 3);
  new Questions('scifi', 'In Bladerunner, what type of origame animal does Gaff make and leave outside Deckard\'s house?', 'Frog', 'Unicorn', 'Horse', 'Swan', 2);
  new Questions('scifi', 'In the Terminator, what was the only possession that Kyle had of Sarah Connor?', 'Tapes', 'Gun', 'T-shirt', 'Poloroid', 4);
  new Questions('cult', 'In the Goonies, what was the name of Chunks new best friend that rescued his other friends?', 'Mouth', 'Sloth', 'Sid', 'Brand', 2);
  new Questions('cult', 'In the Princess Bride, Buttercup knew it was Westley when he said what phrase to her?', 'Where you go I go', 'As I do hope you love me', 'As you wish', 'With your permission', 3);
  new Questions('scifi', 'How fast do you have to go to go back in time?', '66 mph', '77 mph', '88 mph', '99 mph', 3);
  new Questions('scifi', 'In E.T. what colorful candy did Elliot leave to have ET follow him?', 'Skittles', 'Reeces', 'M&m\'s', 'Runts', 2);
  new Questions('magic', 'In the Labyrinth, in which animal form did Jareth watch Saran?', 'Owl', 'Cat', 'Dog', 'Spider', 1);
  new Questions('magic', 'In Willow, he was not always a powerful sorcer what was he before hand?', 'Farmer', 'Fisher', 'Baker', 'Shopkeeper', 1);
  new Questions('magic', 'In the Nevenending Story, what was the name of Bastions Luck Dragon?', 'Troy', 'Artayu', 'Falkor', 'Jaryth', 3);
  new Questions('magic', 'In Clash of the Titans, which titan does Perseus kill to save Andromeda?', 'Kraken', 'Uranus', 'Mars', 'Cronus', 1);

}
populate();

//Function to randomly pic the question, from the category selected
function randomQuestion() {
  var randomNumber = Math.floor(Math.random() * chosenCategory.length);
  newQuestion = chosenCategory[randomNumber];
  sendQuestion();
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

//TODO6 Function that runs when a player answers a question

//TODO7 Function that checks for the correct answer and adds the points

//TODO8 Function that runs when the user has answered ten questions, display scoreboard

function checkTen() {
  if (questionsTotal === 10) {
    var remove = document.getElementById('populate-question');
    remove.textContent = '';
    //Need to insert the function for the Leader board
  } else {
    questionsTotal ++;
  }
}

//TODO9 Function to check if the user is a new or returning player

//TODO10 Function to store the username when he/she submits it

//TODO11 Need to make sure previous questions don't repeat themselves

//TODO15 Function to handle question submissions

// TODO16 Event listeners