const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const app = express();
app.use(express.json());

app.use(cors(
    {
        origin: ["https://demo-frontend-beryl-gamma.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Allow any origin (for development, replace with the actual origin in production)
//     res.header('Access-Control-Allow-Methods', 'POST'); // Allow POST requests
//     res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allow the Content-Type header

//     // Handle preflight requests
//     if (req.method === 'OPTIONS') {
//         return res.status(200).end();
//     }

//     next();
// });


// app.use(cors());
mongoose.connect('mongodb+srv://sohamnaigaonkar:soham123@cluster0.8urvkfy.mongodb.net/demodb')

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
        res.json({ message: err })
    })

})
