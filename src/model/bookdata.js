//ACCESSING MONGOOSE PACKAGE
const mongoose = require('mongoose');
// DATABASE CONNECTION
mongoose.connect('mongodb+srv://libraryappnew:libraryappnew@ictakfsd.hnync.mongodb.net/LibraryAppNew?retryWrites=true&w=majority');


 //mongoose.connect('mongodb://localhost:27017/librarynew');

//SCHEMA DEFINITION
const Schema = mongoose.Schema;


const Book = new Schema({
    title : String,
    author :String,
    genre : String,
    image : String
});

//MODEL CREATION
var booklist = mongoose.model('book',Book);
module.exports = booklist;