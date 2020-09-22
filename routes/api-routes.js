const { mongo } = require("mongoose");
const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            console.log("Found");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res) => {
        const body = req.body;
        db.Workout.create(body)
        .then(dbWorkout => {
            console.log("Created");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        const body = req.body;
        db.Workout.findOneAndUpdate(
            {
                _id: id
            },
            { 
                $push: { exercises: body } 
            },
            { 
                new: true 
            })
        .then(dbWorkout => {
            console.log("Added");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            console.log("Found");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};
