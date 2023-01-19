import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DonationService } from '../donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit{

  donations$ : Observable<any> | undefined;
  constructor(private donationService: DonationService, private router: Router) { }

  ngOnInit(): void {
      this.donations$= this.donationService.getDonations();
  }
  changeState(donation : any){
    this.donationService.reserveDonation(donation);
    location.reload();
  }
}
