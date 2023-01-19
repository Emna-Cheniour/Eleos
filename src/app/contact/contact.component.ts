import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInfo: FormGroup;

  name!: string;
  email!: string;
  message!: string;
  subject!: string;

  constructor(private http: HttpClient,private fb: FormBuilder) {
    this.contactInfo= this.fb.group({
      name:  ['', Validators.required],
      email: ['', Validators.compose([Validators.required])],
      subject:  ['', Validators.compose([Validators.required])],
      message:  ['', Validators.compose([Validators.required])],
    })
  }

  @Input() show : boolean = true;
  ngOnInit(): void {
  }

  sendEmail(values: any) {
    
    console.log(values);
    
    this.http.post('http://localhost:4000/eleos/email', values)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}
