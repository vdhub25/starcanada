import {  Component, ViewChild, OnInit, Inject } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { formData } from '../model-data/formdata';
 
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {


  //date-picker

  @ViewChild('ejDatePicker', {static: true}) ejDatePicker: DatePickerComponent;
  public dateValue: Date = new Date();


  // from to dropdown

  form : FormGroup;
  torecidencetype: any = ['Room (Share)','Studio 550SF or less', '1 BR Small up to 650SF', '1 BR Large 650SF or more','2 Bedroom 700-1200SF', '3+ Bedroom 1000SF or more', 'House/Brownstone', 'Office', 'Storage','Commercial Space', 'Other'];


  fromrecidencetype: any = ['Room (Share)','Studio 550SF or less', '1 BR Small up to 650SF', '1 BR Large 650SF or more','2 Bedroom 700-1200SF', '3+ Bedroom 1000SF or more', 'House/Brownstone', 'Office', 'Storage','Commercial Space', 'Other'];

  todefaultoption : any = "Room (Share)";
  fromdefaultoption : any = "Room (Share)";

  //creating a object for form data

  data : formData =new formData();
  
  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name:[null,[Validators.required]],
      mobile: [null, [Validators.required]],
      email: [null, [Validators.required]],
      moveto: [null, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      movefrom: [null, [Validators.required]],
      torecidencetype:  [null, [Validators.required]],
      fromrecidencetype:  [null, [Validators.required]],
      datepicker: ['', [Validators.required]],
      altdate: ['', [Validators.required]],
      textarea: ['', [Validators.required]]
    });
  }
  toRecidence(e) {
    this.form.get('torecidencetype').setValue(e.target.value, {
      onlySelf: true
   });
  }
  fromRecidence(e) {
    this.form.get('fromrecidencetype').setValue(e.target.value, {
      onlySelf: true
   })
  }
  get datepicker() {
    return this.form.get('datepicker');
  }

  onSubmit() {
    this.data.name= this.form.controls.name.value;
    this.data.phone= this.form.controls.phone.value;
    this.data.emailid= this.form.controls.email.value;
    this.data.movingfrom= this.form.controls.movef.value;
    this.data.movingto= this.form.controls.movet.value;
    this.data.movingfromtype = this.form.controls.fromrecidencetype.value;
    this.data.movetotype = this.form.controls.torecidencetype.value;
    this.data.date= this.form.controls.moveday.value;
    this.data.altdate = this.form.controls.altdate.value;
    this.data.textarea = this.form.controls.textarea.value;

    if (this.form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      
      'has-feedback': this.isFieldValid(field),
      
    };
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}

