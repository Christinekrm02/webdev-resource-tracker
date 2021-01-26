//to select input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const topic = document.querySelector("#topic-title") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const dateExplored = document.querySelector(
  "#date-explored"
) as HTMLInputElement;
//to select form
const form = document.querySelector(".new-item-form") as HTMLFontElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, topic.value, details.value, dateExplored.value);
});
