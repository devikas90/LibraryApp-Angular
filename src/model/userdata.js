//ACCESSING MONGOOSE PACKAGE
const mongoose = require('mongoose');
// DATABASE CONNECTION
 mongoose.connect('mongodb+srv://libraryappnew:libraryappnew@ictakfsd.hnync.mongodb.net/LibraryAppNew?retryWrites=true&w=majority');

  //mongoose.connect('mongodb://localhost:27017/librarynew');

//SCHEMA DEFINITION
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email : String,
    password :String,
});

//MODEL CREATION
var userdata = mongoose.model('userdata',userSchema);
module.exports = userdata;