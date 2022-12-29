import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private keyCloakService: KeycloakService) { }
  isLoggedIn:boolean=false;
  ngOnInit(): void {
    this.keyCloakService.isLoggedIn().then
    (
      (value)=>{this.isLoggedIn=value;}
    )
  }
  logout():void{
    this.keyCloakService.logout('http://localhost:4200/contact');
  }

}
