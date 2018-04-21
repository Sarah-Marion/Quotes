import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // myQuote : any= {
  //   id: 1,
  //   quote: String,
  //   by: String
  // }

  theQuote=[new Quote("Remember no one can make you feel inferior without your consent.","Eleanor Roosevelt","Me",0)]

  deleteQuote(isComplete,index) {
    this.theQuote.splice(index,1);
}
receiveQuote(get){
  this.theQuote.push(get);
  console.log(this.theQuote);
}

constructor() { }Quotes

  ngOnInit() {
    // this.myQuote.quote = "Remember no one can make you feel inferior without your consent.";
    // this.myQuote.by= "Eleanor Roosevelt";
  }

}
