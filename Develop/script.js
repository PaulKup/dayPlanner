// print current date to the top of the screen
var todayEl = moment().format("LLLL");
$("#currentDay").text(todayEl);
// current time in military time represented by num
var currentTime = parseInt(moment().format("H"));
var tasks = [];


var auditTime = function () {
    for (var i = 9; i < 18; i++) {
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

// save to localstorage
var save = function() {
    localStorage.setItem("tasks", tasks);
}

var loadTasks = function() {
    tasks = localStorage.getItem("tasks").split(',');
    console.log(tasks);
    
    if (tasks) {
        var j = 9;
        for (var i = 0; i < 9; i++){
            var k = j.toString();
            $("#" + k).text(tasks[i])
            j++;
        }
    } else [
        tasks = []
    ]
    
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
    descriptionEl.replaceWith(replacementEl);
    var taskIndex = parseInt(descriptionElId) - 9;
    tasks[taskIndex] = text;
    save();
    auditTime();
})

loadTasks();
auditTime();