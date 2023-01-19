import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

import { TeamComponent } from './team/team.component';
import { DonateComponent } from './donate/donate.component';
import { AboutusComponent } from './aboutus/aboutus.component';


import { AuthGuard } from './utility/app.guard';
import { HomeComponent } from './home/home.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { DonationsComponent } from './donations/donations.component';




const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'organisations', component: OrganisationsComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutusComponent },


 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }