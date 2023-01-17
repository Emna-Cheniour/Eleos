import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarStartComponent } from './top-bar-start/top-bar-start.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ServicesComponent } from './services/services.component';
import { CausesComponent } from './causes/causes.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CounterComponent } from './counter/counter.component';
import { FormDonationComponent } from './form-donation/form-donation.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { EventComponent } from './event/event.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { BlogComponent } from './blog/blog.component';
import { EventItemComponent } from './event-item/event-item.component';
import { FactsComponent } from './facts/facts.component';
import { AppRoutingModule } from './app-routing.module';
import { DonateComponent } from './donate/donate.component';
import { initializeKeycloak } from './utility/app.init';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CauseItemComponent } from './cause-item/cause-item.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { SafeurlPipe } from './safeurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarStartComponent,
    NavbarComponent,
    PageHeaderComponent,
    ServicesComponent,
    CausesComponent,
    FooterComponent,
    CarouselComponent,
    AboutusComponent,
    CounterComponent,
    FormDonationComponent,
    TestimonialComponent,
    ContactComponent,
    TeamComponent,
    EventComponent,
    VolunteerFormComponent,
    BlogComponent,
    EventItemComponent,
    FactsComponent,
    DonateComponent,
    HomeComponent,
    CauseItemComponent,
    OrganisationsComponent,
    SafeurlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps:  [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
