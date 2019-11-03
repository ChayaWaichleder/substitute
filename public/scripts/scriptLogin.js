const mysql = require('promise-mysql');
const fs = require('fs');
let db;

mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "nomi",
    password: "nomi3750",
    database: "substitute"
}).then((c) => {
    db = c;
}).catch((e) => {
    console.error(e);
});

module.exports = {
    login,
    // registration
};

async function login(req, res) {

    // let users = db...
    let emails = db.query("select email from users");
    let mail = await emails;

    console.log(mail);
    let passwords = db.query("select password from users");
    let pass = await passwords;
    console.log(pass);
    res.json(pass);
}
//     for (let single of users) {
//         if (single.userName === req.body.userName &&
//             single.password === req.body.password) {
//             return res.sendFile('./pubic/gages/page') //צריך להשלח לאזור האישי

//         }

//     }
//     res.send("אינך קיים במערכת");

// };


// function registration(req, res) {
//     let user = {
//         userName: req.body.userName,
//         password: req.body.password
//     }
//     for (let u of users) {
//         if (u.userName === req.body.userName) {
//             return res.status(500).send('send ia already exists');
//         }
//     }
//     users.push(user);
//     res.send("!נרשמת בהצלחה");
// };