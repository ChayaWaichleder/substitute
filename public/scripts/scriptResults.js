const dbConnection = require('./dbConnection.js');

// async function getUsers(req, res) {
//     console.log(req.body.city);
//     console.log(req.body.profession);
//     console.log(req.body.specialization);

//     let users = await dbConnection.queryConnection(
//         "select * from users where city='" + req.body.city + "' AND profession='" + req.body.profession + "' AND specialization='" + req.body.specialization + "'"); {
//         return users;
//     }
// }

async function getUsers(req, res) {
    let users = await dbConnection.queryConnection("select * from users");
    let results = [];
    for (let single of users) {
        if (single.city === req.body.city &&
            single.profession === req.body.profession &&
            single.specialization === req.body.specialization
        ) {
            // res.send("ok");
            console.log(single);
            let x = single.id
            res.send(x.toString());

        }
    }
    return res.status(500).send("משתמש אינו קיים במערכת!")
}

module.exports = {
    getUsers

}

// document.getElementById('firstName').innerHTML = xhr.responseText;


// let t = getUsers();
// console.log(t);

// // listen to click event of the submit button
// $('#submitBtn').click(function (e) {
//     // make sure the form is not submitted
//     e.preventDefault();
//     // run the form validations
//     document.getElementById('myForm').checkValidity();
//     // check if the form is valid
//     if (document.getElementById('myForm').reportValidity()) {
//         // form is valid, create a post request
//         $.ajax({
//             type: "post",
//             url: "/results/getUsers",
//             // the user data 
//             data: {
//                 city: $('#city').val(),
//                 profession: $('#profession').val(),
//                 specialization: $('#specialization').val(),
//             },
//             complete: // this function will run if the request is successful
//                 function (xhr, status) {
//                     // check if there is an error
//                     if (status === 'error')
//                         alert(xhr.responseText);
//                     else
//                         res.send('/pages/searchResults');

//                 }
//         });
//     }
// });