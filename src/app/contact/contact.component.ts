import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //public smsg;
  alert:boolean=false;
  form : FormGroup;
  loading = false;
  local_url = "../../localData/data.json";

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.form = this.formBuilder.group({
      fname: [null, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+'),  Validators.maxLength(30)]],
      lname: [null, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+'),  Validators.maxLength(30)]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      msg: [null, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+'), Validators.maxLength(30)]]
    });
  }
  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    var formData: any = new FormData();
    let jsonForm = JSON.stringify(formData);    
    this.http.post(this.local_url, jsonForm).subscribe(
      (response) => console.log(response),
      (error) => {
        console.log(error),
        this.loading = false
      }
    )
    
    console.log(this.form);
    if (this.form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.form);
    }
     this.loading = true;
    this.alert = true;
    this.form.reset();

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

  closeAlert() {
    this.alert = false;
  }
  
}

