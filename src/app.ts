import { ArticleResource } from "./models/article.js";
import { VideoResource } from "./models/video.js";
import { ResourceList } from "./models/resource-list.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";

//Add to DOM
//to select input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const topic = document.querySelector("#topic-title") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const rating = document.querySelector("#rating") as HTMLInputElement;
//to select form
const form = document.querySelector(".new-item-form") as HTMLFontElement;
//instace of resource-list template
const ul = document.querySelector("ul")!;
const resourceList = new ResourceList(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  //be sure to enfore interface
  let doc: HasFormatter;
  if (type.value === "video") {
    doc = new VideoResource(topic.value, details.value, rating.valueAsNumber);
  } else {
    doc = new ArticleResource(topic.value, details.value, rating.valueAsNumber);
  }
  resourceList.render(doc, type.value, "end");
});
