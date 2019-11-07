const dbConnection = require('./dbConnection.js')


async function login(req, res) {

    let users = await dbConnection.queryConnection("select * from users");

    console.log(users);

    for (let single of users) {
        if (single.email === req.body.email &&
            single.password === req.body.password) {
            // res.sendFile('./public/pages/registrationPage.html', {
            //     root: __dirname
            // }); //צריך להשלח לאזור האישי
            res.send("ברוך הבא!");
        }

    }
    res.send("אינך קיים במערכת!");

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

};