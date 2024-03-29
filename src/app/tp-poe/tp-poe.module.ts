import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TppoeHomeComponent } from './tppoe-home/tppoe-home.component';
import { AddPoeComponent } from './add-poe/add-poe.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TppoeHomeComponent,
    AddPoeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TpPoeModule { }
