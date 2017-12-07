const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({

    title:{
        type:String,
        required: true
    },
    description:{
        type:String
    },
    url:{
        type:String,
        required: true
    },

    notes:{
        type:String
    },

    meal:{

        type:String,
        enum:[
            "Breakfast",
            "Lunch",
            "Dinner",
            "dessert"
        ]
    }
})

module.exports = mongoose.model("recipes", recipeSchema);
