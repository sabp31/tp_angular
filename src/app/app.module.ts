import { NgModule } from '@angular/core'; 
  /*
  Un  NgModule est une classe décrite par un decorateur avec @NgModule().
  @NgModule() est une fonction qui dispose d'un objet metadata
  Ces propriétés décrivent le module */
import { BrowserModule } from '@angular/platform-browser'; // Pour exécuter l' application dans un navigateur.

import { AppRoutingModule } from './app-routing.module'; //le nom de la classe du module est AppRoutingModule et il appartient au app-routing.module.tsrépertoire src/app.
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
