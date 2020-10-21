
'use strict'

var response = prompt('would you rather have gmc vehicle or ford ?');
var message;
if (response === 'gmc') {
    message = 'gmc is nice!';
} else if (response === 'ford') {
    message = 'Ford is nice!';
} else {
    message = 'Fine';
}

document.write('<h3>' + '</h3>')

// function getcar() {
//     var response = prompt('Would you rather a gmc or a ford');
//     var car;

//     while (response != 'gmc' && response != 'ford') {
//         response = prompt('Would you rather have a gmc or ford? BE SPECIFIC');
//     }

//     if (response === 'gmc') {
//         car = <img src="Image/ford.jpg" alt="this is a picture of my gmc "></img>;
//     } else if (response === 'gmc') {
//         car = <img src="Image/ford.jpg" alt="this is a picture of my gmc "></img>;
//     }

//     return car;
// }

// // helper function
// function makeCount() {
//     var count = prompt('Great! How many would you like?');
//     while (isNaN(count) || count === '') {
//         count = prompt("PLEASE enter a number. How many would you like?");
//     }
//     return count;
// }

// function renderPics() {
//     var result = '';
//     var carType = getcar();
//     var total = makeCount();

//     for (var i = 0; i < total; i++) {
//         result = result + '<p>' + carType + '</p>';

//     }

//     return document.write(result);
// }

// renderPics();

var response = prompt('what vehicle color do you like white or black  ?');
var message;
if (response === 'white') {
    message = 'white is nice!';
} else if (response === 'black') {
    message = 'black is nice!';
} else {
    message = 'Fine';
}

document.write('<h3>' + '</h3>')


