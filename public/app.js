import { ArticleResource } from "./models/article.js";
import { VideoResource } from "./models/video.js";
//Add to DOM
//to select input fields
const type = document.querySelector("#type");
const topic = document.querySelector("#topic-title");
const details = document.querySelector("#details");
const rating = document.querySelector("#rating");
//to select form
const form = document.querySelector(".new-item-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //be sure to enfore interface
    let doc;
    if (type.value === "video") {
        doc = new VideoResource(topic.value, details.value, rating.valueAsNumber);
    }
    else {
        doc = new ArticleResource(topic.value, details.value, rating.valueAsNumber);
    }
    console.log(doc);
});
