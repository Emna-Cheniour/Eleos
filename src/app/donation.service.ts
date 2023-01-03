import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor() { }
  createProduct(data:any){
    console.log(data);
    
  }
}
