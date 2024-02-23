const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect('mongodb+srv://sohamnaigaonkar:soham123@cluster0.8urvkfy.mongodb.net/demodb')

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

app.post('/register', (req, res) => {
    User.create({
        name: req.body.name
    }).then((user) => {
        res.json(user)
    }).catch((err) => {
        res.json({ message: err })
    })

})