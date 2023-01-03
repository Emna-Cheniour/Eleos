import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-donation',
  templateUrl: './form-donation.component.html',
  styleUrls: ['./form-donation.component.css']
})
export class FormDonationComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; 
  file!: File; 
  donationInfo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.donationInfo = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      type: ['', Validators.compose([Validators.required])],
      file: ['', Validators.compose([Validators.required])],
      fileSource: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  addDonation(values: any) {
    const productData = new FormData();
    productData.append('name', values.name);
    productData.append('description', values.description);
    productData.append('type', values.type);
    productData.append('file', this.donationInfo.get('fileSource')?.value);
    console.log(values);

    // this.crudService.createProduct(productData).subscribe(() => {
    //   this.router.navigate(['']);
    // });
  
  }
  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.donationInfo.patchValue({
        fileSource: file
      });
    }
  }

}
