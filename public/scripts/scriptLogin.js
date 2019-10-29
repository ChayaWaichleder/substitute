let users = [];
module.exports = {
    login,
    registration
};

function login(req, res) {
    for (let single of users) {
        if (single.userName === req.body.userName &&
            single.password === req.body.password) {
            return res.sendFile('./pubic/gages/page') //צריך להשלח לאזור האישי

        }

    }
    res.send("אינך קיים במערכת");

};


function registration(req, res) {
    let user = {
        userName: req.body.userName,
        password: req.body.password
    }
    for (let u of users) {
        if (u.userName === req.body.userName) {
            return res.status(500).send('send ia already exists');
        }
    }
    users.push(user);
    res.send("!נרשמת בהצלחה");
};