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

  theQuotes=[new Quote("Remember no one can make you feel inferior without your consent.","Eleanor Roosevelt","Me",new Date(2018,4,20))]

  deleteQuote(isComplete,index) {
    this.theQuotes.splice(index,1);
  }
  receiveQuote(get){
    get.timeCreated = new Date (get.timeCreated);
    this.theQuotes.push(get);
    console.log(this.theQuotes);
  }
  adding(index){
    this.theQuotes[index].votes = this.theQuotes[index].votes + 1;
    console.log(this.theQuotes[index].votes);
  }
  removing(index){
    if(this.theQuotes[index].votes > 0){
      this.theQuotes[index].votes = this.theQuotes[index].votes - 1;
    } else this.theQuotes[index].votes = 0;
    console.log(this.theQuotes[index].votes);
  }

  constructor() { }

  ngOnInit() {
    // this.myQuote.quote = "Remember no one can make you feel inferior without your consent.";
    // this.myQuote.by= "Eleanor Roosevelt";
  }

}
