// Set current day/date to page using moment.js
var currentDay = moment().format("dddd, MMMM Do");
    // Targets ID #currentDay with current day, month date. 
    $("#currentDay").text(currentDay);

// Set variable for save button .saveBTN and textarea .hourSlot
var saveTextBtn = $(".saveBtn");
var textInSlot = $(".hourSlot");
// var hourText = localStorage.getItem("hour1");
$(".hour .hourSlot").val(localStorage.getItem("hourEleven"));
// Create event listener function using Jquery to store textarea value.
saveTextBtn.on("click", function() {

// console.log(textInSlot.val());
// textInSlot.text(textInSlot.val());

// create function for time. loop or if statment
var hourClass = $(".hour");


for (var i = 9; i < 17; i++) {
    var currentTime = moment().add("hour").format("HH");
    var timeNow;
    if (currentTime == i) {
        timeNow = 'present'; // check for class marker
    } else if (currentTime > i) {
        timeNow = 'future'; 
    } else if (currentTime < i) {
        timeNow = 'past';
    }
}


// Local storage
// localStorage.setItem('#hourEleven', textInSlot);
// textInSlot = localStorage.getItem('#hourEleven');


});

