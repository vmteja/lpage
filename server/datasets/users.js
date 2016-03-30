var mongoose = require('mongoose');
 Schema = mongoose.Schema,
    
module.exports = mongoose.model('User', {
    useremail: { type : String , unique : true, required : true },
   
    typeofdevice: String,
     rangeofdevice: String,
    usermobnumber: { type : Number , unique : true, required : true },
   useraddress: { type : String , required : true },
    fullname: { type : String , required : true },
   
    image: String,
    bio: String
	
});
var User = mongoose.model('User');  
