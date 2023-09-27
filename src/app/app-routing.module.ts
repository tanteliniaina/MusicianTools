import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*importation de component */
import { HomeComponent } from './general/home/home.component';
import { AllsongsComponent } from './songs/view/allsongs/allsongs.component';
import { AlllibrariesComponent } from './libraries/view/alllibraries/alllibraries.component';
import { AllcollaborationsComponent } from './collaboration/view/allcollaborations/allcollaborations.component';
import { AuthentificationComponent } from './account/authentification/authentification.component';
import { ProfilComponent } from './account/profil/profil.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'allsongs', component:  AllsongsComponent},
  { path: 'alllibraries', component:  AlllibrariesComponent},
  { path: 'allcollaborations', component:  AllcollaborationsComponent},
  { path: 'authentication', component:  AuthentificationComponent},
  { path: 'profil', component:  ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
