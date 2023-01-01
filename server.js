require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 4242;
const registration = require('./public/scripts/scriptLogin.js');
const results = require('./public/scripts/scriptResults.js');
const bodyParser = require('body-parser')
const dbConnection = require('./public/scripts/dbConnection.js');
const ejs = require('ejs');
// Request.PhysicalApplicationPath('../../sendmail.cshtml');
// Request.PhysicalApplicationPath('../../Attachment.txt');

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => res.render('./partials/page', {}));
app.get('/registration', (req, res) => res.render('./partials/registrationPage', {}));
app.get('/login', (req, res) => res.render('./partials/login', {}));
app.get('/about', (req, res) => res.render('./partials/about', {}));
app.get('/recommend', (req, res) => res.render('./partials/recommend', {}));
app.get('/takanon', (req, res) => res.render('./partials/takanon', {}));
app.get('/writeUs', (req, res) => res.render('./partials/writeUs', {}));
app.get('/searchResults', (req, res) => res.render('./partials/searchResults', {}));
app.get('/popup', (req, res) => res.render('./partials/popup', {}));


// app.get('../../Attachment.txt', (req,res)=> res.render('./partials/message',{
// // return req.PhysicalApplicationPath('../../sendmail.cshtml');
// }));

app.get('/privateArea/:id', async function (req, res) {
    let data = await dbConnection.queryConnection("select * from users where id = " + req.params.id);
    let d = data[0];
    return res.render('partials/privateArea', {
        d
    });
});

app.get('/searchResults/:id', async function (req, res) {
    let data = await dbConnection.queryConnection("select * from users where id = " + req.params.id);
    let d = data[0];
    return res.render('partials/searchResults', {
        d
    });
});

app.post('/registration/register', (req, res) => {
    return registration.register(req, res);
});
app.post('/registration/login', (req, res) => {
    return registration.login(req, res);
});
app.post('/results/getUsers', (req, res) => {
    return results.getUsers(req, res);
});
// app.post('/results/getUsers', async (req, res) => {
//     let data11 = await results.getUsers(req, res);
//     console.log(data11);
//     if (data11.length == 0) {
//         res.status(500).send("לא נמצאו תוצאות לחיפוש שלך");
//     } else {
//         let d = data11[0];
//         console.log(d);
//         res.render('partials/searchResults', {
//             d
//         })
//         console.log(d.firstName);
//     }
// });




/*
const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();*/

/*
async function processLineByLine() {
    const rl = readline.createInterface({
      // ...
    });
  
    for await (const line of rl) {
      // Each line in the readline input will be successively available here as
      // `line`.
    }
  }
*/


      
      
        
    


/*
  const values = data[];
const rl = readline.createInterface(process.stdin);
const showResults = debounce(() => {
  console.log(
    '\n',
    values.filter((val) => val.startsWith(rl.line)).join(' ')
  );
}, 300);
process.stdin.on('keypress', (c, k) => {
  showResults();
});
*/



const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  var containsGoldBagCount = 0;
  var bagsDict = {};
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
    var arr = line.split("contain");
    var bagName = arr[0].replace("bags","");
    var contents = arr[1];
    bagsDict[bagName] = {};
    if(contents.includes("no other bags"))
    {
        continue;
    }
    if(contents.includes("shiny gold bag"))
      containsGoldBagCount++;
    contents = contents.replace('.','');
    var contentBagTypes = contents.split(',');
    for(var bagType of contentBagTypes)
    {
        var bagTypeParts = bagType.trim().split(' ');
        var count = bagTypeParts[0];
        var name = bagTypeParts[1]+' '+bagTypeParts[2];
        bagsDict[bagName][name]=count;
    }
  }
  console.log("count:"+containsGoldBagCount);
  return bagsDict;
}




app.listen(port, () => console.log('Example app listening on port ' + port));






