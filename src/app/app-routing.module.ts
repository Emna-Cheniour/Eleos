import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { DonateComponent } from './donate/donate.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CausesComponent } from './causes/causes.component';
import { EventComponent } from './event/event.component';
import { BlogComponent } from './blog/blog.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { AuthGuard } from './utility/app.guard';
import { HomeComponent } from './home/home.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { DonationsComponent } from './donations/donations.component';




const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'organisations', component: OrganisationsComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutusComponent },
  { path: 'causes', component: CausesComponent },
  { path: 'events', component: EventComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'volunteer', component: VolunteerFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }