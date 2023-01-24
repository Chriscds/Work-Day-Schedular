// Set current day/date to the page using moment.js
var currentDay = moment().format("dddd, MMMM Do");
    // Targets ID #currentDay with current day, month date. 
    $("#currentDay").text(currentDay);

// Set variable for save button .saveBTN and textarea .hourSlot
var saveTextBtn = $(".saveBtn");
var textInSlot = $(".hourSlot");


// Create event listener function using Jquery to store textarea value.
saveTextBtn.on("click", function() {

// Color hourSlot text according to past, present, or future.

// Append time and color to divs?

// LocalStaorage to setItem and getItem


});
