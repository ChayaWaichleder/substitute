const mysql = require('promise-mysql');


let db;

mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).then((c) => {
    db = c;
}).catch((e) => {
    console.error(e);
});


async function login(req, res) {

    let users = db.query("select * from users");

    console.log(user);
    res.json(user.email);

    for (let single of users) {
        if (single.userName === req.body.userName &&
            single.password === req.body.password) {
            return res.sendFile('./pubic/gages/page') //צריך להשלח לאזור האישי

        }

    }
    res.send("אינך קיים במערכת");
};


async function registration(req, res) {
    let users = await db.query("select * from users");
    console.log(users);
    for (let user of users) {
        if (user.email === req.body.email) {
            return res.status(500).send("user alredy exists")
        }
    }

    await db.query(`INSERT INTO users (firstName, lastName, city, gander, password,phoneNumber, email, profession, specialization, diploma, Previous experience, Available days)  VALUES ("${req.body.firstName}","${req.body.lastName}","${req.body.adress}","${req.body.gender}","${req.body.password}", "${req.body.email}", "${req.body.profession}",  "${req.body.job}", "${req.body.specialization}","${req.body.diploma}","${req.body.experience}","${req.body. recommendations}","${req.body. days}")`);

    // for (let u of users) {
    //     for (let u of users) {
    //         if (u.userName === req.body.userName) {
    //             return res.status(500).send('send ia already exists');
    //         }
    //     }
    res.send("ok");
};

module.exports = {
    login,
    registration

};