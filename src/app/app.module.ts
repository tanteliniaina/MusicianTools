import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllComponent } from './libraries/view/all/all.component';
import { ShareComponent } from './libraries/operation/share/share.component';
import { DetailsComponent } from './libraries/view/details/details.component';
import { AuthentificationComponent } from './account/authentification/authentification.component';
import { HomeComponent } from './general/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    ShareComponent,
    DetailsComponent,
    AuthentificationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
