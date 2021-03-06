export class VideoResource {
    //Initialize values in constructor to pass values for each properties to instance of class
    constructor(title, details, rating) {
        this.title = title;
        this.details = details;
        this.rating = rating;
    }
    format() {
        return `The video ${this.title} explains the ${this.details}. I give it a rating of ${this.rating}`;
    }
}
