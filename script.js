var displayCurrentDay = document.querySelector("currentDay");
var currentDay= moment();
displayCurrentDay.textContent = currentDay.format("dddd, MMMM Do YYYY");

var blockTime = $(".time-block").addClass("row");
var textBlock = $("<p>").addClass("description");
blockTime.append(textBlock);

var currentHours = parseInt(moment().format("H"));

var loadEvents = function (slotsTime) {

    slotsTime.forEach(element => {
        console.log(element);
        let text = localStorage.getItem(parseInt(element.time));
        console.log(text);
        if (text) {
            element.text.val(text);
        }
        
    });
}