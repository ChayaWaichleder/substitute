const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 4242;
const registration = require('./public/scripts/scriptLogin.js');

app.use(express.static('public'));
app.use(cookieParser());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => res.sendFile('./public/pages/page.html', {
    root: __dirname
}));
app.get('/registration', (req, res) => res.sendFile('./public/pages/registrationPage.html', {
    root: __dirname
}));
app.get('/login', (req, res) => res.sendFile('./public/pages/login.html', {
    root: __dirname
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
app.get('/contactUs', (req, res) => res.sendFile('./pages/contactUs.html', {
    root: __dirname
}));

app.post('/registration/registration', (req, res) => {
    return registration.registration(req, res);
});
app.post('/registration/login', (req, res) => {
    return registration.login(req, res);
});

app.get('/test', (req, res) => {
    return registration.login(req, res);
});

app.set('view engine', "ejs");

app.get('/userInfo/:id', (req, res) => {
    console.log(req.params.id);
    res.render('userInfo', {
        id: req.params.id

    });
})

app.listen(port, () => console.log('Example app listening on port ' + port));