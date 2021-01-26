import { Resource } from "./models/resources.js";

const resourceOne = new Resource(
  "More on React Redux",
  "how to connect to redux store and more",
  9
);
const resourceTwo = new Resource(
  "CSS Tips and Tricks",
  "fun animations with CSS",
  7
);
console.log(resourceOne, resourceTwo);

//Add to DOM
//to select input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const topic = document.querySelector("#topic-title") as HTMLInputElement;
const detailss = document.querySelector("#detailss") as HTMLInputElement;
const dateExplored = document.querySelector(
  "#date-explored"
) as HTMLInputElement;
//to select form
const form = document.querySelector(".new-item-form") as HTMLFontElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, topic.value, detailss.value, dateExplored.value);
});
