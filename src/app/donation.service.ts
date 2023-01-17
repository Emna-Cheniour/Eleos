import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }
  createProduct(data:any){
    console.log(data);
    
  }

  getDonations(){
    return this.http.get('http://localhost:4000/eleos/articles');
  }
}
