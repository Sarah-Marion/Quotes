import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();

  //   deleteQuote(kwot:) {
  //   let index = this.quote.indexOf(kwot);
  //   this.quote.splice(index,1);
  //   return false;
  // }

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
