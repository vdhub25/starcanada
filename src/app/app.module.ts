import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FinStatComponent } from './fin-stat/fin-stat.component';
import { ContactComponent } from './contact/contact.component';
import { JoinComponent } from './join/join.component';
import { ContactErrorComponent } from './contact-error/contact-error.component';
import { QuoteComponent } from './quote/quote.component';


// external-plugins
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
// import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FragmentPolyfillModule } from '../fragment-polyfill';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PaymentComponent } from './payment/payment.component';
import { QuoteErrorComponent } from './quote-error/quote-error.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { LocalmoversComponent } from './ehubservices/localmovers/localmovers.component';
import { JunckfurnitureremovalComponent } from './ehubservices/junckfurnitureremoval/junckfurnitureremoval.component';
import { CompanyFactsComponent } from './company-facts/company-facts.component';
import { PianomovingComponent } from './ehubservices/pianomoving/pianomoving.component';
import { OfficebuildingmovingComponent } from './ehubservices/officebuildingmoving/officebuildingmoving.component';
import { DistancemovingComponent } from './ehubservices/distancemoving/distancemoving.component';
import { RecidencemovingComponent } from './ehubservices/recidencemoving/recidencemoving.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CorevaluesComponent } from './corevalues/corevalues.component';


//import { NgxStripeModule } from "ngx-stripe";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    FinStatComponent,
    ContactComponent,
    JoinComponent,
    ContactErrorComponent,

    PaymentComponent,

    QuoteComponent,

    QuoteErrorComponent,

    HomeSliderComponent,

    WhatWeOfferComponent,

    LocalmoversComponent,

    JunckfurnitureremovalComponent,

    CompanyFactsComponent,

    PianomovingComponent,

    OfficebuildingmovingComponent,

    DistancemovingComponent,

    RecidencemovingComponent,

    TestimonialComponent,

    CorevaluesComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePickerModule,
    // ButtonModule,
    Ng4LoadingSpinnerModule.forRoot(),
    SlickCarouselModule,
    FragmentPolyfillModule.forRoot({
			smooth: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
