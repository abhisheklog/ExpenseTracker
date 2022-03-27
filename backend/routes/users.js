const express = require('express');
const router = express.Router();
const User = require("../model/task");


router.get('/', async(req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    } catch(err) {
        res.send('error ' +  err);
    }
})

router.post('/', async(req, res) => {
    const user = new User({
        title: req.body.title,
        amount: req.body.amount,
        date: req.body.date
    })
    
    try {
        const newUser = await user.save();
        res.json(newUser);
        console.log(newUser);
    } catch (err) {
        res.send('error ' + err);
    }
});


/*
router.get('/', (req, res) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name
    });
    user.save((err, data) => {
        res.status(200).json({ code:200, message: 'added successfully', 
        addUser: data});
    });
})
*/



/*router.route('/update').put(async(req, res) => {
    res.send("hello update")
})

router.route('/:id').delete(async(req, res) => {
    res.send("delte user");
}) */

module.exports = router;
