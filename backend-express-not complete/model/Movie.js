const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema = new Schema(definition: [
    title: {
        type: String,
        required: true,
    },
    director: {
        type:{
            name: {
                type: String,
                required: true,
            },
            phoneNo:{
                type:String
            }
        },
        required: false,
    }
])