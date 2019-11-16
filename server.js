require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 4242;
const registration = require('./public/scripts/scriptLogin.js');
const results = require('./public/scripts/scriptResults.js');
const bodyParser = require('body-parser')
const dbConnection = require('./public/scripts/dbConnection.js');


app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(cookieParser());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => res.render('./partials/page', {

}));
app.get('/registration', (req, res) => res.render('./partials/registrationPage', {

}));
app.get('/login', (req, res) => res.render('./partials/login', {

}));

app.get('/about', (req, res) => res.sendFile('./public/pages/about.html', {
    root: __dirname
}));
app.get('/recommend', (req, res) => res.sendFile('./pages/recommend.html', {
    root: __dirname
}));
app.get('/takanon', (req, res) => res.sendFile('./pages/takanon.html', {
    root: __dirname
}));
// app.get('/contactUs', (req, res) => res.sendFile('./pages/contactUs.html', {
//     root: __dirname
// }));
app.get('/writeUs', (req, res) => res.render('./partials/writeUs', {

}));
app.get('/searchResults', (req, res) => res.render('./partials/searchResults', {

}));


app.get('/pages/privateArea/:id', async function (req, res) {
    // pagesלבדוק את נתיב עם ה 
    let data = await dbConnection.queryConnection("select * from users where id = " + req.params.id);
    let d = data[0];
    return res.render('partials/privateArea', {
        d
    });
});

app.post('/registration/register', (req, res) => {
    return registration.register(req, res);
});
app.post('/registration/login', (req, res) => {
    return registration.login(req, res);
});
app.post('/results/getUsers', async (req, res) => {
    debugger;
    console.log("kkkkkkkkkkkkk");

    let data11 = await results.getUsers(req, res);
    console.log(data11);
    if (data11.length == 0) {
        res.status(500).send("לא נמצאו תוצאות לחיפוש שלך")
    } else {
        console.log("fods");

        let d = data11[0];
        console.log(d);
        res.render('partials/searchResults',
            d
        )
    }
});

// app.get('/test', (req, res) => {
//     return registration.login(req, res);
// });




app.listen(port, () => console.log('Example app listening on port ' + port));