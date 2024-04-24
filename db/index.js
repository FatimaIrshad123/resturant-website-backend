const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Fatima:Fatima@cluster0.7bunznc.mongodb.net/Resturant-website');

const AdminSchema = mongoose.Schema({
    username : String,
    password : String
});


const FoodSchema = new mongoose.Schema({
    title : String,
    imageLink : String,
    price : Number,
    ordered: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);

const Food = mongoose.model('Food', FoodSchema);

module.exports = {
    Admin,
    Food
}