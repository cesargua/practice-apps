require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const models = require('./models.js')
const cors = require('cors')

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(express.json())
app.use(cors());
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/**** 
 * 
 * 
 * Other routes here....
 *
 * 
 */
app.post('/signup', (req,res)=>{
    console.log(req.session_id);
    models.createAccount(req.body,req.session_id).then(()=>{
        res.sendStatus(201);
    }).catch(err=> {
        console.error(err);
        res.sendStatus(500);
    });
})
app.post('/contact', (req,res)=>{
    // console.log(req.body)
    models.createContactInfo(req.body).then(()=>{
        res.sendStatus(201);
    }).catch(err=> {
        console.error(err);
        res.sendStatus(500);
    });
})
app.post('/payment',(req,res)=> {
    models.createPaymentInfo(req.body).then(()=>{
        res.sendStatus(201);
    }).catch(err=> {
        console.error(err);
        res.sendStatus(500);
    });
})

app.post('/session', (req,res)=>{
    models.createSessionInfo(req.body).then(()=>{
        res.sendStatus(201);
    }).catch(err=> {
        console.error(err);
        res.sendStatus(500);
    });
})


app.get('/info/:name',(req,res) => {
    models.getAllInfo(req.params.name).then((data)=>{
        res.status(200).json(data[0]);
    }).catch(err=> {
        console.error(err);
        res.sendStatus(500);
    });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
