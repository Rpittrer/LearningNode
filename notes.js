console.log("starting Notes.js");
const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	var noteDuplicates = notes.filter((note) => note.title === title);
	if (noteDuplicates.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	console.log('getting all notes.');
};
var getNote = (title) => {
	console.log('Here is your note: \n');

};

var removeNote = (title) => {
	console.log(`${title} was removed.`);
};


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};