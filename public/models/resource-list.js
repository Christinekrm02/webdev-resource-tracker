export class ResourceList {
    constructor(container) {
        this.container = container;
    }
    //pass the HasFormatter() interface as arg to ensure that object passed in is being formatted by that interface
    render(item, heading, position) {
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
        }
        else {
            this.container.append(li);
        }
    }
}
