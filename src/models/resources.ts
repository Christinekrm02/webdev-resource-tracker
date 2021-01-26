export class Resource {
    //Initialize values in constructor to pass values for each properties to instance of class
    constructor(
      readonly title: string,
      private details: string,
      public rating: number
    ) {}
    format() {
      return `The article ${this.title} explains the ${this.details}. I give it a rating of ${this.rating}`;
    }
  }