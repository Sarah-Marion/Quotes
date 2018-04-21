export class Quote {
    public quote:string;
    public author:string;
    public votes: number;
    public person:string;
    
    constructor(quote: string, author: string, person: string, votes: number) {
        this.quote = quote;
        this.author = author;
        this.person = person;
        this.votes = votes;
    }
}
