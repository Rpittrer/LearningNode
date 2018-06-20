console.log('starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

var argv = yargs.argv;


var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	console.log(typeof (note));
	if (note) {
		console.log("Added note!");
		console.log(`Title: ${note.title} \nBody: ${note.body}`);
	} else {
		console.log("Note with same title already exists.");
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if(note){
		console.log(typeof(note));
		console.log(`Body: ${note.body}`);
	} else{
		console.log("Note not found");
	}
} else if (command === 'remove') {
	var removeBool = notes.removeNote(argv.title);
	var message = removeBool ? 'Note removed' : 'Not not found';
	console.log(message);

} else {
	console.log('command not recognised');
}