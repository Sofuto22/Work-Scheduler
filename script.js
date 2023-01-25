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

var fetchEvents = function() {
    var tempArray = [];
    $("textarea").each(function (index, elem) {
        tempArray.push({
            time: $(elem).attr("id"),
            text: $(elem),
        });
    });
    loadEvents(tempArray);
};

$("textarea").each(function () {
    var $this = $(this);
    var id = parseInt($this.attr("id"));

    if (id < currentHour) {
        $this.addClass("past");
    }

    if (id > currentHour) {
        $this.addClass("future");
    }

    if (id === currentHour) {
        $this.addClass("present");
    }
});

$("button.saveBtn").click(function (event, loadEvents) {
    event.preventDefault();

    var $element = $(this).siblings("textarea");

    var time = $element.attr("id");
    console.log(time);

    var text = $element.val().trim();
    console.log(text);

    if (time && text !== "") {
        console.log(time, text);
        localStorage.setItem(time, text);
    }
});

$(".saveBtn").hover(function() {
    $(this).addClass("saveBtn:hover");
});

fetchEvents();
