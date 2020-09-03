import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public showSpinner: boolean = false;
  constructor() { }
}
