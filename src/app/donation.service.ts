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

  addDonation(productData: any){
    this.http
    .post('http://localhost:4000/eleos/articles', productData)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  reserveDonation(reserved : any){
    
    const id=reserved["_id"]
    
    this.http
    .post('http://localhost:4000/eleos/article-reserved', reserved)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
    this.http
    .delete(`http://localhost:4000/eleos/articles/${id}`)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
   
  }
}
