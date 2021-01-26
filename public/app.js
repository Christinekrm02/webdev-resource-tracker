"use strict";
//to select input fields
var type = document.querySelector("#type");
var topic = document.querySelector("#topic-title");
var details = document.querySelector("#details");
var dateExplored = document.querySelector("#date-explored");
//to select form
var form = document.querySelector(".new-item-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, topic.value, details.value, dateExplored.value);
});
