console.log('starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yarg = require('yargs');

const notes = require('./notes');


var argv = yarg.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
    console.log(argv.title);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('command not recognised');
}