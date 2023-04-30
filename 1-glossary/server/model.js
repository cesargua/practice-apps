const {Term} = require('./db.js');
const mongoose = require("mongoose");
const Promise = require('bluebird')

module.exports = {
    create: (data) => {
        // console.log(data)
        return new Promise((resolve, reject) => {
            var newTerm = new Term(data);
            newTerm.save(err=>{
                if(err){
                    reject(err);
                } else{
                    resolve();
                }
            })
           
        });
    },
    retrieveAll: ()=> {
        return new Promise((resolve,reject)=>{
            Term.find({}, (err,data)=>{
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    },
    update: (id,data)=>{
        return new Promise((resolve,reject)=>{
            Term.findByIdAndUpdate(id,data, (err,newData)=>{
                if(err){
                    reject(err);
                } else{
                    resolve(newData);
                }
            })
        });

    },
    delete: (id)=>{
        return new Promise((resolve, reject)=>{
            Term.findByIdAndRemove(id,(err)=>{
                
                if(err){
                    reject(err);
                } else{
                    resolve();
                }
            }
            );
    })

    }
}