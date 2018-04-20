import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuote : any= {
    id: 1,
    quote: String,
    by: String
  }

  quote=[new Quote("My Quote","Sarah",1)]
  constructor() {
    // let index = this.quote.indexof(kwot);
    // this.quote.splice(index,1);
    // return false;
  }

  ngOnInit() {
    this.myQuote.quote = "Remember no one can make you feel inferior without your consent.";
    this.myQuote.by= "Eleanor Roosevelt";
  }

}
