import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-error',
  templateUrl: './contact-error.component.html',
  styleUrls: ['./contact-error.component.scss']
})
export class ContactErrorComponent {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
