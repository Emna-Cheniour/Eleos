import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-donation',
  templateUrl: './form-donation.component.html',
  styleUrls: ['./form-donation.component.css']
})
export class FormDonationComponent implements OnInit {

  donationInfo: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.donationInfo = this.fb.group({
      name:  ['', Validators.required],
      description: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      categorie:  ['', Validators.compose([Validators.required])],
      file:  ['', Validators.compose([Validators.required])],
      fileSource: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  get f(){
    return this.donationInfo.controls;
  }

  addDonation(values: any) {
    const productData = new FormData();
    productData.append('name', values.name);
    productData.append('description', values.description);
    productData.append('categorie', values.categorie);
    // productData.append('fileSource', this.donationInfo.get('fileSource')?.value);
 
    this.http
      .post('http://localhost:4000/eleos/articles', productData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

  }
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.donationInfo.patchValue({
        fileSource: file
      });
    }
  }

}
