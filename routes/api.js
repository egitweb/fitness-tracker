const router = require("express").Router();
const Workout = require("../models").Workout;


//ROUTER to GET Workouts
router.get("/api/workouts", (req, res) => {
     Workout.find()
     .then(workouts => res.json(workouts))
     .catch(err => res.json(err));
  
});

//ROUTER to PUT Workouts
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,{ 
            $push: { exercises: req.body }
         },
         { new: true })
         .then(workout => res.json(workout))
         .catch(err => res.json(err));
  
});

//ROUTER to Post Workouts
router.post("/api/workouts", (req, res) => {

    Workout.create({
        day: Date.now()
    }).then(newWorkout => {
        console.log("o am the cretead worrkout: ", newWorkout);
        res.json(newWorkout);
    })
     .catch(err => res.json(err));

});

//ROUTER to GET Workout range
router.get("/api/workouts/range", (req, res) => {

    Workout.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => res.json(err));

});

//ROUTER to DELETE Workouts
router.delete("/api/workouts", (req, res) => {

});



module.exports = router;
