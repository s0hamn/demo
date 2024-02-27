const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const app = express();
app.use(express.json());

app.use(cors(
    {
        origin: ["https://demo-frontend-beryl-gamma.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));



// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// app.use(cors());
mongoose.connect('mongodb+srv://sohamnaigaonkar:soham123@cluster0.8urvkfy.mongodb.net/demodb?retryWrites=true&w=majority', { useNewUrlParser: true })

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/register', (req, res) => {
    console.log(req.body.name)
    User.create({
        name: req.body.name
    }).then((user) => {

        res.json(user)
    }).catch((err) => {
        console.log(err)
        console.log('ERROR')
        res.json({ message: err })
    })
    // res.send('Hello World')

})
