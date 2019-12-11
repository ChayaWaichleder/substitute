const dbConnection = require('./dbConnection.js')


async function login(req, res) {

    let users = await dbConnection.queryConnection("select * from users");
    for (let single of users) {
        if (single.email === req.body.email &&
            single.password === req.body.password) {
            // res.send("ok");
            console.log(single);
            let x = single.id
            res.send(x.toString());

        }
    }
    return res.status(500).send("משתמש אינו קיים במערכת!")
};


async function register(req, res) {
    let users = await dbConnection.queryConnection("select * from users");
    console.log(users);
    for (let user of users) {
        if (user.email === req.body.email) {
            return res.status(500).send("משתמש קיים כבר במערכת!")
        }
    }

    await dbConnection.queryConnection(`INSERT INTO users (firstName, lastName, city, gender, password,phoneNumber, email, profession, specialization, diploma)  VALUES("${req.body.firstName}","${req.body.lastName}","${req.body.adress}","${req.body.gender}","${req.body.password}","${req.body.phoneNumber}", "${req.body.email}", "${req.body.profession}",  "${req.body.specialization}","${req.body.diploma}")`);


    res.send("ok");
};




module.exports = {
    login,
    register

}