export class Quote {
    public theQuote:string;
    public author:string;
    public votes: number;
    public person:string;
    timeCreated: number;
    
    constructor(theQuote, author, person,timeCreated) {
        this.theQuote = theQuote;
        this.author = author;
        this.person = person;
        this.votes = 0;
    }
}
