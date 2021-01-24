// print current date to the top of the screen
var todayEl = moment().format("LLLL");
$("#currentDay").text(todayEl);
// current time in military time represented by num
var currentTime = parseInt(moment().format("H"));

// set data type attribute of timeblocks to array indexed


var auditTime = function () {
    // get current hour in number type
    
    for (var i = 9; i < 18; i++) {
        // i want to acces the correct timeblock directly so i can loop through with i and get a new timeblock to check against the currentTime
        var timeblockEl = $("#" + i);
        if (i < currentTime) {
            timeblockEl.addClass("past");
        } else if (i > currentTime) {
            timeblockEl.addClass("future");
        } else {
            timeblockEl.addClass("present");
        }
    }
}

// timeblock was clicked to enter task
$(".description").on("click", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>").val(text).addClass("col-md-10 description");
    var descriptionElId = $(this).attr("id");
    $(textInput).attr("id", descriptionElId);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// save button clicked
$(".saveBtn").on("click", function() {
    var descriptionEl = $(this).siblings(".description");
    var text = descriptionEl.val().trim();
    var descriptionElId = $(descriptionEl).attr("id");
    var replacementEl = $("<div>").addClass("col-md-10 description");
    replacementEl.text(text).attr("id", descriptionElId);
    console.log(replacementEl);
    descriptionEl.replaceWith(replacementEl);
    auditTime();
})
auditTime();