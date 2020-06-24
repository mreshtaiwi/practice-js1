'use strict';

function sayGreeting() {
  // var today = new Date();//object
  // // console.log('today is ',today);
  // var hourNow = today.getHours();//method
  var hourNow = prompt('please enter an hour from 0-23');
  // console.log('hourNow is ' , hourNow);
  var greeting;//undefined
  console.log('greeting is ', greeting);
  //16
  // && ||

  if (hourNow > 18 && hourNow <= 23) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12 && hourNow <= 18) {
    greeting = 'msa el 5er';
  } else if (hourNow >= 0 && hourNow <= 12) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
  console.log('new value greeting is ', greeting);
  // true / false
  // if(condition){

  // }

  document.write('<h3>' + greeting + '</h3>');
}

sayGreeting();

function userOrder() {

  var userWant = prompt('what do you want to order house or hotel ?');
  if (userWant === 'house') {
    //code
    document.write('<img id="block" src="images/house.png">');
  } else if (userWant === 'hotel') {
    //code
    document.write('<p><img src="images/hotel.png"></p>');
  }

}
userOrder();