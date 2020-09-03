import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-error',
  templateUrl: './quote-error.component.html',
  styleUrls: ['./quote-error.component.scss']
})
export class QuoteErrorComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
  constructor() { }

  ngOnInit() {
  }

}
