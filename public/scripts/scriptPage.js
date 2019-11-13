let specialization = [{
        name: "בחר/י התמחות",
        profession: "מורה"
    }, {
        name: 'מורה ליסודי',
        profession: 'מורה'
    }, {
        name: 'מורה לחטיבת הביניים',
        profession: 'מורה'
    }, {
        name: 'מורה לתיכון ולשכבת העל יסודי',
        profession: 'מורה'
    }, {
        name: 'בחר/י התמחות',
        profession: 'מטפל/ת'
    }, {
        name: '0-1 מטפלת לגיל הרך',
        profession: 'מטפל/ת'
    }, {
        name: 'מטפלת לגילאים 1-2',
        profession: 'מטפל/ת'
    }, {
        name: 'מטפלת לגילאים 2-3',
        profession: 'מטפל/ת'
    }, {
        name: "בחר/י התמחות",
        profession: "סייע/ת"
    }, {
        name: 'סייע/ת בגן',
        profession: 'סייע/ת'
    },
    {
        name: 'סייע/ת בצהרון',
        profession: 'סייע/ת'
    }, {
        name: "סייע/ת לילד מיוחד",
        profession: 'סייע/ת'
    }, {
        name: "בחר/י התמחות",
        profession: "גננ/ת"
    }, {
        name: "גננ/ת בגן פרטי",
        profession: 'גננ/ת'
    }, {
        name: "גננ/ת בגן עירוני",
        profession: 'גננ/ת'
    }, {
        name: "בחר/י התמחות",
        profession: "מדריכ/ה"
    }, {
        name: "מדריכ/ה בחוג",
        profession: 'מדריכ/ה'
    }, {
        name: "מדריכ/ה בתנועת נוער",
        profession: 'מדריכ/ה'
    }, {
        name: "בחר/י התמחות",
        profession: "מרצה"
    }, {
        name: "מרצה במוסד על-תיכוני",
        profession: 'מרצה'
    }, {
        name: "מרצה במוסד אקדימאי",
        profession: 'מרצה'
    }, {
        name: "בחר/י התמחות",
        profession: "חונכ/ת"
    }, {
        name: "חונכ/ת לילד/ה צעירים",
        profession: 'חונכ/ת'
    }, {
        name: "חונכ/ת לנער/ה",
        profession: 'חונכ/ת'
    }, {
        name: "בחר/י התמחות",
        profession: "מבשל/ת"
    }, {
        name: "מבשל/ת במעון",
        profession: 'מבשל/ת'
    }, {
        name: "מבשל/ת בצהרון",
        profession: 'מבשל/ת'
    }, {
        name: "בחר/י התמחות",
        profession: "ריתמיקאי/ת"
    }, {
        name: "ריתמיקאי/ת",
        profession: "ריתמיקאי/ת"
    }, {
        name: "בחר/י התמחות",
        profession: "מפעיל/ת ג'ימבורי"
    },
    {
        name: "מפעיל/ת ג'ימבורי",
        profession: "מפעיל/ת ג'ימבורי"
    }
]

function myfunc() {
    document.getElementById('specialization').innerHTML = ''
    let selectedProfession = document.getElementById('profession').value
    specialization.forEach(s => {

        if (s.profession == selectedProfession) {
            document.getElementById('specialization').innerHTML += '<option>' + s.name + '</option>'
        }
    })

}

function freeSearch() {
    document.getElementById("free").innerHTML = "";
}

let newS = document.getElementsByClassName("search").innerHTML;
let newS2 = document.getElementsByTagName("select").innerHTML;
Element.onclick = test;

function test(newS) {
    if (newS2 == null) {
        return alert("זהו שדה נדרש")
    }
}
// listen to click event of the submit button
$('#submitBtn').click(function (e) {
    // make sure the form is not submitted
    e.preventDefault();
    // run the form validations
    document.getElementById('myForm').checkValidity();
    // check if the form is valid
    if (document.getElementById('myForm').reportValidity()) {
        // form is valid, create a post request
        $.ajax({
            type: "post",
            url: "results/getUsers",
            // the user data 
            data: {
                city: $('#city').val(),
                profession: $('#profession').val(),
                specialization: $('#specialization').val(),
            },
            complete: // this function will run if the request is successful
                function (xhr, status) {
                    // check if there is an error
                    if (status === 'error')
                        alert(xhr.responseText);
                    else {
                        alert(xhr.responseText);
                        // let x = xhr.responseText;
                        // window.location.replace('../searchResults');
                    }
                }

        });
    }
});



// let specialization = [{
//         name: "בחר/י התמחות",
//         profession: "מורה",
//         value: ""
//     }, {
//         name: 'מורה ליסודי',
//         profession: 'מורה',
//         value: ""
//     }, {
//         name: 'מורה לחטיבת הביניים',
//         profession: 'מורה',
//         value: ""
//     }, {
//         name: 'מורה לתיכון ולשכבת העל יסודי',
//         profession: 'מורה',
//         value: ""
//     }, {
//         name: 'בחר/י התמחות',
//         profession: 'מטפל/ת',
//         value: ""
//     }, {
//         name: '0-1 מטפלת לגיל הרך',
//         profession: 'מטפל/ת',
//         value: ""
//     }, {
//         name: 'מטפלת לגילאים 1-2',
//         profession: 'מטפל/ת',
//         value: ""
//     }, {
//         name: 'מטפלת לגילאים 2-3',
//         profession: 'מטפל/ת',
//         value: ""
//     }, {
//         name: "בחר/י התמחות",
//         profession: "סייע/ת",
//         value: ""
//     }, {
//         name: 'סייע/ת בגן',
//         profession: 'סייע/ת',
//         value: ""
//     },
//     {
//         name: 'סייע/ת בצהרון',
//         profession: 'סייע/ת',
//         value: ""
//     }, {
//         name: "סייע/ת לילד מיוחד",
//         profession: 'סייע/ת',
//         value: ""
//     }, {
//         name: "בחר/י התמחות",
//         profession: "גננ/ת",
//         value: ""
//     }, {
//         name: "גננ/ת בגן פרטי",
//         profession: 'גננ/ת',
//         value: ""
//     }, {
//         name: "גננ/ת בגן עירוני",
//         profession: 'גננ/ת',
//         value: ""
//     }, {
//         name: "בחר/י התמחות",
//         profession: "מדריכ/ה",
//         value: ""
//     }, {
//         name: "מדריכ/ה בחוג",
//         profession: 'מדריכ/ה',
//         value: ""
//     }, {
//         name: "מדריכ/ה בתנועת נוער",
//         profession: 'מדריכ/ה',
//         value: ""
//     }, {
//         name: "בחר/י התמחות",
//         profession: "מרצה",
//         value: ""
//     }, {
//         name: "מרצה במוסד על-תיכוני",
//         profession: 'מרצה',
//         value: ""
//     }, {
//         name: "מרצה במוסד אקדימאי",
//         profession: 'מרצה',
//         value: ""
//     }, {
//         name: "בחר/י התמחות",
//         profession: "חונכ/ת",
//         value: ""
//     }, {
//         name: "חונכ/ת לילד/ה צעירים",
//         profession: 'חונכ/ת',
//         value: ""
//     }, {
//         name: "חונכ/ת לנער/ה",
//         profession: 'חונכ/ת',
//         value: ""
//     }, {
//         name: "בחר/י התמחות",
//         profession: "מבשל/ת",
//         value: ""
//     }, {
//         name: "מבשל/ת במעון",
//         profession: 'מבשל/ת',
//         value: ""
//     }, {
//         name: "מבשל/ת בצהרון",
//         profession: 'מבשל/ת',
//         value: ""
//     }, {
//         name: "בחר/י התמחות",
//         profession: "ריתמיקאי/ת",
//         value: ""
//     }, {
//         name: "ריתמיקאי/ת",
//         profession: "ריתמיקאי/ת",
//         value: ""
//     }, {
//         name: "בחר/י התמחות",
//         profession: "מפעיל/ת ג'ימבורי",
//         value: ""
//     },
//     {
//         name: "מפעיל/ת ג'ימבורי",
//         profession: "מפעיל/ת ג'ימבורי",
//         value: ""
//     }
// ]

// function myfunc() {
//     document.getElementById('specialization').innerHTML = ''
//     let selectedProfession = document.getElementById('profession').value
//     specialization.forEach(s => {

//         if (s.profession == selectedProfession) {
//             document.getElementById('specialization').innerHTML += '<option>' + s.name + '</option>'
//         } else if (s.name == "בחר/י התמחות") {
//             document.setAttribute("value", i++);
//             Object.assign("value", "")
//         }
//     })

// }

// function addValue() {
//     document.getElementsByName("option");

// }

// // function freeSearch() {
// //     document.getElementById("free").innerHTML = "";
// // }



// let newS = document.getElementsByClassName("search").innerHTML;
// let newS2 = document.getElementsByTagName("select").innerHTML;
// Element.onclick = test;

// function test(newS) {
//     if (newS2 == null) {
//         return alert("זהו שדה נדרש")
//     }
// }





// function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     let currentFocus;
//     /*execute a function when someone writes in the text field:*/
//     inp.addEventListener("input", function (e) {
//         let a, b, i, val = this.value;
//         /*close any already open lists of autocompleted values*/
//         closeAllLists();
//         if (!val) {
//             return false;
//         }
//         currentFocus = -1;
//         /*create a DIV element that will contain the items (values):*/
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
//         /*append the DIV element as a child of the autocomplete container:*/
//         this.parentNode.appendChild(a);
//         /*for each item in the array...*/
//         for (i = 0; i < arr.length; i++) {
//             /*check if the item starts with the same letters as the text field value:*/
//             if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//                 /*create a DIV element for each matching element:*/
//                 b = document.createElement("DIV");
//                 /*make the matching letters bold:*/
//                 b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//                 b.innerHTML += arr[i].substr(val.length);
//                 /*insert a input field that will hold the current array item's value:*/
//                 b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//                 /*execute a function when someone clicks on the item value (DIV element):*/
//                 b.addEventListener("click", function (e) {
//                     /*insert the value for the autocomplete text field:*/
//                     inp.value = this.getElementsByTagName("input")[0].value;
//                     /*close the list of autocompleted values,
//                     (or any other open lists of autocompleted values:*/
//                     closeAllLists();
//                 });
//                 a.appendChild(b);
//             }
//         }
//     });
//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function (e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//             /*If the arrow DOWN key is pressed,
//             increase the currentFocus variable:*/
//             currentFocus++;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 38) { //up
//             /*If the arrow UP key is pressed,
//             decrease the currentFocus variable:*/
//             currentFocus--;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 13) {
//             /*If the ENTER key is pressed, prevent the form from being submitted,*/
//             e.preventDefault();
//             if (currentFocus > -1) {
//                 /*and simulate a click on the "active" item:*/
//                 if (x) x[currentFocus].click();
//             }
//         }
//     });

//     function addActive(x) {
//         /*a function to classify an item as "active":*/
//         if (!x) return false;
//         /*start by removing the "active" class on all items:*/
//         removeActive(x);
//         if (currentFocus >= x.length) currentFocus = 0;
//         if (currentFocus < 0) currentFocus = (x.length - 1);
//         /*add class "autocomplete-active":*/
//         x[currentFocus].classList.add("autocomplete-active");
//     }

//     function removeActive(x) {
//         /*a function to remove the "active" class from all autocomplete items:*/
//         for (var i = 0; i < x.length; i++) {
//             x[i].classList.remove("autocomplete-active");
//         }
//     }

//     function closeAllLists(elmnt) {
//         /*close all autocomplete lists in the document,
//         except the one passed as an argument:*/
//         var x = document.getElementsByClassName("autocomplete-items");
//         for (var i = 0; i < x.length; i++) {
//             if (elmnt != x[i] && elmnt != inp) {
//                 x[i].parentNode.removeChild(x[i]);
//             }
//         }
//     }
//     /*execute a function when someone clicks in the document:*/
//     document.addEventListener("click", function (e) {
//         closeAllLists(e.target);
//     });
// }




/*An array containing all the country names in the world:*/
let cities = ["אום אל-פחם", "אופקים", "אור יהודה", "אור עקיבא", "אילת", "אלעד", "אריאל", "אשדוד", "אשקלון",
    "באקה אל-גרבייה", "באר שבע", "בית שאן", "בית שמש", "ביתר עילית", "בני ברק", ",בת ים", "גבעת שמואל",
    "גבעתיים", "דימונה", "הוד השרון", "הרצליה", "חדרה", "חולון", "חיפה", "טבריה", "טייבה", "טירה",
    "טירת כרמל", "טמרה", "יבנה", "יהוד-מונוסון", "יקנעם עילית", "ירושלים", "כפר יונה", "כפר סבא",
    "כפר קאסם", "כרמיאל", "לוד", "מגדל העמק", "מודיעין עילית", "מודיעין-מכבים-רעות", "מעלה אדומים",
    "מעלות-תרשיחא", "נהריה", "נוף הגליל", "נס ציונה", "נצרת", "נשר", "נתיבות", "נתניה", "סח'נין", "עכו",
    "עפולה", "עראבה", "ערד", "פתח תקווה", "צפת", "קלנסווה", "קריית אונו", "קריית אתא", "קריית ביאליק",
    "קריית גת", "קריית ים", "קריית מוצקין", "קריית מלאכי", "קריית שמונה", "ראש העין", "ראשון לציון",
    "רהט",
    "רחובות", "רמלה", "רמת גן", "רמת השרון", "רעננה", "שדרות", "שפרעם", "תל אביב-יפו"

];


/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
// autocomplete(document.getElementById("myInput"), cities);