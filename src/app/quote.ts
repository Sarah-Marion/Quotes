export class Quote {
    quote:string;
    author:string;
    votes: number;
    
    constructor(quote: string, author: string, votes: number) {
        this.quote = quote;
        this.author = author;
        this.votes = 0;
    }
}
