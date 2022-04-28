const express = require("express");

// require('dotenv').config()
const app = express();
const cors = require("cors");
// const PORT = process.env.API_PORT;
const mail = require('./common/send_email')
// Bodyparser middleware, extended false does not allow nested payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};
app.use(cors(corsOpts));


app.post('/send-email',(req, res)=>{
    console.log(req.body);
    // res.sendStatus(200)
    // let mailDetails = {
    //     to: 'rddzobrist@gmail.com',
    //     subject: 'TEST',
    //     html: '<p> THIS IS JUST A TEST</p>'
    // }
    // mail.mail(mailDetails)
})

app.get('/', (req, res) => {
    res.send('Good mornning')
});



app.listen(3201, () => console.log(`Backend listening on port ${3201}!`));