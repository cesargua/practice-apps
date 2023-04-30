const mongoose = require("mongoose");
const {Schema} = mongoose;
require("dotenv").config();

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

var TermSchema = new Schema({
    id: Number,
    term: String,
    definition: String
})

//mongoose.connect(`mongodb://localhost:${process.env.PORT}`, {dbName: process.env.DB_NAME});


const Term = mongoose.model('Term',TermSchema);

module.exports.Term = Term;



