import { HasFormatter } from "../interfaces/hasFormatter.js";

export class ResourceList {
  constructor(private container: HTMLUListElement) {}
  //pass the HasFormatter() interface as arg to ensure that object passed in is being formatted by that interface
  render(item: HasFormatter, heading: string, position: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    h4.innerText = heading;
    li.append(h4);
    //returns a formatted string
    p.innerText = item.format();
    li.append(p);
    if (position === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
