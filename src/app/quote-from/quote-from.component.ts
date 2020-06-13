import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

import { from } from 'rxjs';

@Component({
  selector: 'app-quote-from',
  templateUrl: './quote-from.component.html',
  styleUrls: ['./quote-from.component.css']
})
export class QuoteFromComponent implements OnInit {
  newQuote =new Quote('',"","",new Date())
  @Output() addQuote = new EventEmitter<Quote>()

  submitQuote(){
    this.addQuote.emit(this.newQuote);
}

constructor() { }

ngOnInit() {
}

}