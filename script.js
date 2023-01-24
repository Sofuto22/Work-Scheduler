var displayCurrentDay = document.querySelector("currentDay");
var currentDay= moment();
displayCurrentDay.textContent = currentDay.format("dddd, MMMM Do YYYY");