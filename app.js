const fs = require('fs');
const os = require('os');
//const counter = require('./counter');
const notes = require('./notes');

console.log('Starting app.js');

// var time  = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + "seconds have passed");
//     if(time>10){
//         clearInterval(timer);
//     }
// }, 2000);

// function call(fun) {
// 	fun();
// };

// var saybye = function () {
// 	console.log("bye");
// };

// call(saybye);

// counter([1,2,3,4,4,5,]);

var user = os.userInfo();
// console.log(user);

fs.appendFileSync('greetings.txt', 'hello ' + user.username + 'you are ' + notes.age);
// fs.appendFileSync('greetings.txt', 'hello ${user.username}!');    //doesn't work
console.log(notes.addNote());
console.log(notes.addNum(7,'abnc'));