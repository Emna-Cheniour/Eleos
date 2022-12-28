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



const routes: Routes = [
  { path: 'team', component:TeamComponent },
{ path: 'service', component:ServicesComponent},
{ path: 'contact', component:ContactComponent },
{path:'donate',component:DonateComponent},
{path:'about',component:AboutusComponent},
{path:'causes',component:CausesComponent},
{path:'events',component:EventComponent},
{path:'blog',component:BlogComponent},
{path:'volunteer',component:VolunteerFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }