

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

var argv = yargs.argv;


var command = process.argv[2];
console.log(command);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	console.log(typeof (note));
	if (note) {
		console.log("Added note!");
		notes.logNote(note);
	} else {
		console.log("Note with same title already exists.");
	}
} else if (command === 'list') {
	var noteList = notes.getAll();
	noteList.forEach(note => notes.logNote(note));
	
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log(typeof (note));
		notes.logNote(note);
	} else {
		console.log("Note not found");
	}
} else if (command === 'remove') {
	var removeBool = notes.removeNote(argv.title);
	var message = removeBool ? 'Note removed' : 'Not not found';
	console.log(message);

} else {
	console.log('command not recognised');
}