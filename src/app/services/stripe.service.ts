import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

declare var Stripe: any;
@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private baseUrl = 'http://localhost:8080/charge';
  constructor(private httpclient: HttpClient) { }

  createStripeCard(cardid: number, amount: number): Observable<Object>{
    return this.httpclient.post("baseUrl",
    {'token': cardid, 'amount': amount})
   
  }

}
