// Set current day/date to page using moment.js
var currentDay = moment().format("dddd, MMMM Do");
    // Targets ID #currentDay with current day, month date. 
    $("#currentDay").text(currentDay);

// Set variable for save button .saveBTN and textarea .hourSlot
var saveTextBtn = $(".saveBtn");
var textInSlot = $(".hourSlot");


// Create event listener function using Jquery to store textarea value.
saveTextBtn.on("click", function() {
//  alert("Save Success");
console.log(textInSlot.val());
textInSlot.text(textInSlot.val());

// POSSIBLE LOOP THROUGH OF TEXT AREA VALUES 
// TO SEE WHAT NEEDS SAVING WHEN SaveTextBtn is clicked!!!
var textInput = $('textarea:input');
var textValue =[];

$.each(textInput, function() {
    textValue.push($(this).val());
});

// keep clear if no input
$('textarea[type="text"]').val('', false);

});

