const mongosee = require('mongoose');
const Schema = mongosee.Schema;

UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        max: 100
    },
    birthday: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true,
        max: 255
    },
    gender: {
        type: String,
        require: true
    },
    // urlImage: {
    //     type: String
    // }
});

module.exports = mongosee.model("User", UserSchema);