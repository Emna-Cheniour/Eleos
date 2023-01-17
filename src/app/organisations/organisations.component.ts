import { Component } from '@angular/core';
import { Organisation } from '../organisation';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent {
  location:string=" ";
  organisationtest ={
    name:"Concern WorldWide",
    description:"Concern Worldwide is an international humanitarian organization working to free the world from poverty, fear and oppression. It intervenes in the world’s poorest countries and helps the most vulnerable people. The ultimate goal of the organization is to end extreme poverty. CO has been working for over 50 years.  ",
    photoLink:"../../assets/img/concern-worldwide.jpg",
    gmlink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40722668.28705042!2d-67.68116319999999!3d51.46707120000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876058405776dd3%3A0x7c8e9a1026bdc8fe!2sConcern%20Worldwide%20(UK)!5e0!3m2!1sen!2sus!4v1673966459481!5m2!1sen!2sus"  
  }
  organisationtest2 ={
    name:"Unicef Tunisia",
    description:"UNICEF works in the world’s toughest places to reach the most disadvantaged children and adolescents – and to protect the rights of every child, everywhere. Across more than 190 countries and territories, we do whatever it takes to help children survive, thrive and fulfill their potential, from early childhood through adolescence. ",
    photoLink:"../../assets/img/unicef.png",
    gmlink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3622711281937!2d10.240372214519564!3d36.83379897994169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335ffde007d1%3A0xecced89a4a41f7c9!2sUNICEF%20Tunis!5e0!3m2!1sen!2sus!4v1673956471661!5m2!1sen!2sus"
  }
  organisationtest3 ={
    name:"CEI",
    description:"Since 1892 the Association for Childhood Education International has been fighting to provide education for children all over the globe. They create learning opportunities in areas where providing education can be difficult. The core belief of CEI is that education leads to community development and hope for the future.",
    photoLink:"../../assets/img/cheducation.jpg",
    gmlink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1076850.5623159846!2d-78.19804468982849!3d38.62147236578339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bfabb85ac3%3A0x805280d5db203d27!2sChildhood%20Education%20International!5e0!3m2!1sen!2sus!4v1673960060933!5m2!1sen!2sus"
  }
  organisations:Organisation[]=[this.organisationtest,this.organisationtest2,this.organisationtest3];


  locate(location: any):void{
    this.location=location;

  }

}