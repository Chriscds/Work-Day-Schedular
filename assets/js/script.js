// Set current day/date to the page using moment.js
var currentDay = moment().format("dddd, MMMM Do");
    // Targets ID #currentDay with current day, month date. 
    $("#currentDay").text(currentDay);

// Set variable for save button .saveBTN and textarea .hourSlot
var saveTextBtn = $(".saveBtn");
var textInSlot = $(".hourSlot");

// Color hourSlot text according to past, present, or future.
var currentHour = moment().format("H");
console.log(currentHour); // check if currentHour is valid.

// Append time and color to divs? 

// Testing --------------------------------
    // for loop to add class to textarea div with .add
for (var i = 9; i < 18; i++) {
    if (i < currentHour) {
        $('.hourSlot').addClass('past');
       
    }  else if (i == currentHour) {
        $('.hourSlot').addClass('present');
        // $('.time-block').children().eq().addClass('present');
    } else if (i > currentHour) {
        $('.hourSlot').addClass('future');
        // $('.time-block').children().eq().addClass('future');
    }
};

    // Add color class to textarea
    // var timeColors = '<textarea class= hourSlot ${currentHour}></textarea>'; 
    // $(".time-block").append(timeColors);




// Create event listener function using Jquery to store textarea value.
saveTextBtn.on("click", function() {




// LocalStorage to setItem and getItem


});
