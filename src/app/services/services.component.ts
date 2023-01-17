import { Component, Input, OnInit } from '@angular/core';
import { Cause } from '../model/Cause';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  causes: Cause[] = [];
  @Input() show : boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.causes = [
      new Cause('causes-1.jpg','Religious causes','Receive the largest share of donations in terms of total money given. In a typical month around half the population makes a donation to a charity, and around 70% give at least once a year.'),
      new Cause('causes-2.jpg','Medical causes','Medical research was the most popular cause for a long time in terms of the number of people donating.'),
      new Cause('causes-3.jpg','Charity association','Children and young people`s charities have been the most popular cause for people to donate to.'),
    ]
  }

}
