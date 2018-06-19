// var obj = {
//     name: "Arpit"
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name": "Arpit", "Age": "20"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var orignalNote = {
    tilte: 'Some Title',
    body: 'some body for demonstaration porpuses'
};

var oringinalNoteString = JSON.stringify(orignalNote);
fs.writeFileSync('notes.json', oringinalNoteString);
var NoteString = fs.readFileSync('notes.json');
var note = JSON.parse(NoteString);
console.log(typeof note);
console.log(note.tilte);