export class Quote {
    public theQuote:string;
    public author:string;
    public votes: number;
    public person:string;
    
    constructor(theQuote, author, person) {
        this.theQuote = theQuote;
        this.author = author;
        this.person = person;
        this.votes = 0;
    }
}
