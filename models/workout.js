const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
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
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;