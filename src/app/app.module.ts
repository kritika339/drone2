import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteComponent } from './quotes/quote/quote.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profiles/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes =[
  { path : '' , component : ProfilesComponent},
  { path : 'quotes' , component : QuotesComponent},
  { path : 'profiles' , component : ProfilesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteComponent,
    ProfilesComponent,
    ProfileComponent
    
    //AppRoutingModule
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
