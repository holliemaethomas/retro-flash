'use strict';
var userName = document.getElementById('username');



function addLocalStorageOfUserName() {
  var localStorageData = JSON.stringify(name);
  localStorage.setItem('userName', localStorageData);
  localStorage.getItem('userName', localStorageData);
  JSON.parse(localStorageData);
}
addLocalStorageOfUserName();

function userNameSubmit(event){
  console.log(userName); 
}