var obj = {
    name: "Arpit"
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);


var personString = '{"name": "Arpit", "Age": "20"}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);