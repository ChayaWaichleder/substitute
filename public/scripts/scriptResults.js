const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "your db name"
}).then((c) => {
    db = c;
}).catch((e) => {
    console.error(e);
});

async function results(req, res) {

    let results = await db.query("select * from users");

    console.log(results);
    res.json(results);

    // // for (let single of users) {
    // //     if (single.email === req.body.email &&
    // //         single.password === req.body.password) {
    // //         res.sendFile('./public/pages/registrationPage.html', {
    // //             root: __dirname
    // //         });

    //     }
}
module.exports = function (req, res) {

}