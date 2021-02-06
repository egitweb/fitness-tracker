const mongoose = require("mongoose");

const schema = mongoose.schema;

/* Schema has to include:
[X] Name
[X] Weight
[X] Sets
[X] Reps
[X] Minutes (Duration)
*/

const exerciseSchema = new schema({

  name: { type: String, required: true },
  weight: { type: Number },
  sets: { type: Number },
  reps: { type: Number },
  minutes: { type: Number }

});


const Exercises = mongoose.model("Exercises", exerciseSchema);
module.exports = Exercises;



