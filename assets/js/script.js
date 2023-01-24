// Set current day/date to the page using moment.js
var currentDay = moment().format("dddd, MMMM Do");
    // Targets ID #currentDay with current day, month date. 
    $("#currentDay").text(currentDay);

// Set variable for save button .saveBTN and textarea .hourSlot
var saveTextBtn = $(".saveBtn");
var textInSlot = $(".hourSlot");

// Color hourSlot text according to past, present, or future.
var currentHour = moment().format("H");

// Append time and color to divs? 
for (var i = 9; i < 17; i++) { 
    var hour;
    if (currentHour == i) {
        hour = 'present';
    } else if (currentHour > i) {
        hour = 'future';
    } else if (currentHour < i) {
        hour = 'past';
    }

    // Add color class to textarea
    var timeColors = '<textarea class= hourSlot ${currentHour}></textarea>'; 
    $(".time-block").append(timeColors);
};



// Create event listener function using Jquery to store textarea value.
saveTextBtn.on("click", function() {




// LocalStorage to setItem and getItem


});
