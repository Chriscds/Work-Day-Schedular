// Set current day/date to page using moment.js
var currentDay = moment().format("dddd, MMMM Do");
    // Targets ID #currentDay with current day, month date. 
    $("#currentDay").text(currentDay);

// Set variable for save button .saveBTN and textarea .hourSlot
var saveTextBtn = $(".saveBtn");
var textInSlot = $(".hourSlot1");


// Create event listener function using Jquery to store textarea value.
saveTextBtn.on("click", function() {
console.log(textInSlot.val());
textInSlot.text(textInSlot.val());

// create function for time. loop or if statment?
var hourClass = $(".hour");

// Local storage
$(".hourSlot1").val(localStorage).getItem("hourSlot1");


});

