import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { QuotesComponent } from './quotes/quotes.component';
import { QuoteComponent } from './quotes/quote/quote.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profiles/profile/profile.component';
//import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: 'quotes', component: QuotesComponent},
  { path: 'profiles',component: ProfilesComponent},
    
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
