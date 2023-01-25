// FOR TESTING PURPOSE ONLY --------------------------------

// Set current day/date to page using moment.js
var currentDay = moment().format("dddd, MMMM Do");
    // Targets ID #currentDay with current day, month date. 
    $("#currentDay").text(currentDay);

// Set variable for save button .saveBTN and textarea .hourSlot
var saveTextBtn = $(".saveBtn");
var textInSlot = $(".hourSlot");

// Color hourSlot text according to past, present, or future.
var currentHour = moment().format("H");
console.log(currentHour);
// Append time and color to divs? 
for (var i = 9; i < 18; i++) { 
    var hour;
    if (currentHour == i) {
        hour = 'present';
    } else if (currentHour > i) {
        hour = 'future';
    } else if (currentHour < i) {
        hour = 'past';
    }
// for loop to add class to textarea div. 
for (var i = 9; i < 18; i++) {
        if (i < currentHour)
}

    // Add color class to textarea
    var timeColors = '<textarea class= hourSlot ${currentHour}></textarea>'; 
    $(".time-block").append(timeColors);
};



// Create event listener function using Jquery to store textarea value.
saveTextBtn.on("click", function() {




// LocalStorage to setItem and getItem


});

