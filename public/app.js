"use strict";
var Resource = /** @class */ (function () {
    //Initialize values in constructor to pass values for each properties to instance of class
    function Resource(title, details, rating) {
        this.title = title;
        this.details = details;
        this.rating = rating;
    }
    Resource.prototype.format = function () {
        return "The article " + this.title + " explains the " + this.details + ". I give it a rating of " + this.rating;
    };
    return Resource;
}());
var resourceOne = new Resource("More on React Redux", "how to connect to redux store and more", 9);
var resourceTwo = new Resource("CSS Tips and Tricks", "fun animations with CSS", 7);
console.log(resourceOne, resourceTwo);
//to select input fields
var type = document.querySelector("#type");
var topic = document.querySelector("#topic-title");
var detailss = document.querySelector("#detailss");
var dateExplored = document.querySelector("#date-explored");
//to select form
var form = document.querySelector(".new-item-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, topic.value, detailss.value, dateExplored.value);
});
