const dbConnection = require('./dbConnection.js')




async function getUsers(req, res) {

    let users = await dbConnection.queryConnection(
        `select * from users where city=  " ${req.body.city}" AND profession= " ${req.body.profession}" AND specialization= "${req.body.specialization}"`);
    if (users !== 0) {
        res.send("ok")
    }

    return res.status(500).send("לא נמצאו תוצאות לחיפוש שלך")

}

module.exports = {
    getUsers

};

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