const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutschema = new Schema(
    {
        day:{
            type:Date,
            default: Date.now
        },
        exercises: [
            {
                name:{
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                type:{
                    type: String,
                    trim: true,
                    required: "Enter exercise"
                },
                weight:{
                    type: Number
                },
                sets:{
                    type: Number
                },
                reps:{
                    type: Number
                },
                duration:{
                    type: Number,
                    required: "Enter an exercise duration in minutes"
                }
                
            }
        ]
    },
)