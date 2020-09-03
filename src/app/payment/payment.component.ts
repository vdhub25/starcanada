import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
// import { analyzeAndValidateNgModules } from '@angular/compiler';

import { StripeService } from '../services/stripe.service';
declare var Stripe: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  loading = false;

  constructor(private stripeservice: StripeService,private  httpClient:HttpClient,private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'lock');
  }



  ngOnInit()
{
  window.scrollTo(0, 0);
  const stripe = Stripe('pk_live_51Gv9rfJ7cBjVxU6F9t7eelJddASCrPepIuy4CwgrxKlNx1UXkFkBGDvO4PvXxBoAMWhNhgMYrfjq6qgAJbfPxvLI00ebpiKC7F');
  const elements = stripe.elements();
  const card = elements.create('card', {hidePostalCode: true});
  
    card.mount('#card-element'); 
    card.addEventListener('change', event => {
      
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', event => {
      event.preventDefault();
      
      stripe.createToken(card).then(result => {
        if (result.error) {
          console.log('Error creating payment method.');
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          let tokenid = result.token.id;
          let amount = 1;
          
          console.log("This is result",result)
          this.stripeservice.createStripeCard(tokenid,amount).subscribe(
            data  => {
            console.log("POST Request is successful ", data);
            this.loading = true;
            },
            error  => {
            
            console.log("Error vacchindi", error);
            this.loading = false;
            }
            
            );  
        }
      });
    });
}


ngOnDestroy(){
  this.loading = false;
  this.renderer.removeClass(document.body, 'lock');
}

}
