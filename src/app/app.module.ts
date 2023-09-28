import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareComponent } from './libraries/operation/share/share.component';
import { AuthentificationComponent } from './account/authentification/authentification.component';
import { HomeComponent } from './general/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AlllibrariesComponent } from './libraries/view/alllibraries/alllibraries.component';
import { DetailslibrariesComponent } from './libraries/view/detailslibraries/detailslibraries.component';
import { AllsongsComponent } from './songs/view/allsongs/allsongs.component';
import { DetailssongsComponent } from './songs/view/detailssongs/detailssongs.component';
import { AllcollaborationsComponent } from './collaboration/view/allcollaborations/allcollaborations.component';
import { ProfilComponent } from './account/profil/profil.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ShareComponent,
    AuthentificationComponent,
    HomeComponent,
    AlllibrariesComponent,
    DetailslibrariesComponent,
    AllsongsComponent,
    DetailssongsComponent,
    AllcollaborationsComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
