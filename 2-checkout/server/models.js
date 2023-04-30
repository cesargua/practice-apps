const mysql = require('mysql2')
const db = require('./db.js')
const Promise = require('bluebird');


const querytoDB = (queryStr,resolve, reject)=> {
    db.promise().query(queryStr).then((data)=>{
        console.log(data[0])
        resolve(data[0]);
    }).catch((err)=>{
        reject(err)
    });
}

module.exports = {
   
    createAccount: (data, session_id) => {
        console.log(data)
        return new Promise ( (resolve,reject) =>{
            var queryStr = `INSERT INTO userInfo (user_name, email,user_password, session_id) VALUES ("${data.user_name}","${data.email}", "${data.user_password}", "${session_id}")`; 
            querytoDB(queryStr,resolve,reject);
        })
    },
    createContactInfo: (data) =>{
        // console.log(data);
        return new Promise ( (resolve,reject) =>{
            var queryStr = `INSERT INTO contactInfo (user_id, user_address, user_city,  user_state, user_zipcode, user_phonenumber) \
                        VALUES ((Select id from userInfo where user_name = '${data.user_name}' limit 1), '${data.user_address}', '${data.user_city}', '${data.user_state}', \
                        '${data.user_zipcode}', '${data.user_phonenumber}')`; 
            querytoDB(queryStr,resolve,reject);
        })
    },
    createPaymentInfo: (data) => {
        return new Promise ( (resolve,reject) =>{
            var queryStr = `INSERT INTO paymentInfo (user_id, creditcard_num, expire_date,cvv,billing_zipcode) VALUES  \
                ((select id from userInfo where user_name="${data.user_name}" limit 1), "${data.creditcard_num}", "${data.expire_date}", "${data.cvv}", "${data.billing_zipcode}")`; 
            querytoDB(queryStr,resolve,reject);
        });
    },

    createSessionInfo: (data)=> {
        return new Promise ( (resolve,reject) =>{
            var queryStr = `INSERT INTO paymentInfo (user_id, cookie_id) VALUES  \
                ((select id from userInfo where user_name="${data.user_name}" limit 1), "${data.cookie_id}")`; 
            querytoDB(queryStr,resolve,reject);
        });
    },

    getAllInfo: (name)=>{
        return new Promise ( (resolve,reject) =>{
            var queryStr = `select userInfo.id, userInfo.user_name, userInfo.email, contactInfo.user_address, contactInfo.user_city, contactInfo.user_state, \
            contactInfo.user_zipcode, contactInfo.user_phonenumber, paymentInfo.creditcard_num, paymentInfo.expire_date, paymentInfo.billing_zipcode\
            from ((userInfo INNER JOIN contactInfo on userInfo.id = contactInfo.user_id) INNER JOIN paymentInfo on contactInfo.user_id = paymentInfo.user_id) where userInfo.user_name= "${name}"`; 
            querytoDB(queryStr,resolve,reject);
        });
    } 
}