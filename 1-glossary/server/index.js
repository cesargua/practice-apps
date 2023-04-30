require("dotenv").config();
const express = require("express");
const model = require("./model.js");
const morgan = require('morgan');

const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "../client/dist")));

/**** 
 * 
 * 
 * Other routes here....
 *
 * 
 */

app.post('/api/glossary', (req,res)=>{
    // console.log(req.body);
    model.create(req.body).then(()=>{
        console.log('insertion successful!')
        res.sendStatus(201);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(404); 
    })
})

app.get('/api/glossary', (req,res)=>{
    model.retrieveAll().then(data=> {  
        res.status(200).json(data);
    }).catch(err=>{console.error(err)});
    
})

app.patch('/api/glossary/:id', (req,res)=>{
    console.log('body:', req.body);
    // console.log('body:', req.params);
    model.update(req.params.id,req.body).then(data=>{
        res.status(200).json(data)
    }).catch(err=>{
        console.error(err)
    })
});

app.delete('/api/glossary/:id', (req,res)=>{
    console.log("deleting:", req.params.id)
    model.delete(req.params.id).then(()=>{
        console.log('delete successful');
        res.sendStatus(200);
    }).catch(err=>{
        console.log('it aint deleting')
        console.error(err);
    })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
