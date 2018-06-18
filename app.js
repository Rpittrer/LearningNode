var counter = require('./counter');
console.log('hey');

// var time  = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + "seconds have passed");
//     if(time>10){
//         clearInterval(timer);
//     }
// }, 2000);

function call(fun) {
    fun();
};

var saybye = function () {
    console.log("bye");
};

call(saybye);

//counter([1,2,3,4,4,5,]);
