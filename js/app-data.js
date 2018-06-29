'use strict';

function addUserName() {
  var userName = document.getElementById('username').value;
  localStorage.setItem('userName', userName);
  console.log(userName);
  var remove = document.getElementById('login');
  remove.parentNode.removeChild(remove);
}

var submit = document.getElementById('submit');
submit.addEventListener('click', addUserName);
