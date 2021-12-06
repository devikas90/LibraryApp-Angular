//ACCESSING MONGOOSE PACKAGE
const mongoose = require('mongoose');
//DATABASE CONNECTION
mongoose.connect('mongodb+srv://libraryappnew:libraryappnew@ictakfsd.hnync.mongodb.net/LibraryAppNew?retryWrites=true&w=majority');

//mongoose.connect('mongodb://localhost:27017/librarynew');

//SCHEMA DEFINITION
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    author :String,
    genre : String,
    image : String
});

//MODEL CREATION
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;