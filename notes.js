console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note', title);
};

module.exports = {
    addNote,
    removeNote,
    getAll,
    getNote
};