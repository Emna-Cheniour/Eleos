import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit{

  donations$ : Observable<any> | undefined;

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
      this.donations$= this.donationService.getDonations();
  }
}
