import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { InternFormComponent } from './home/intern-form/intern-form.component';
import { AddPoeComponent } from './tp-poe/add-poe/add-poe.component';
import { TppoeHomeComponent } from './tp-poe/tppoe-home/tppoe-home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'intern-add',
    component: InternFormComponent,
    pathMatch: 'full'
  },
  {
    path:'tppoe',
    component: TppoeHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-poe',
    component: AddPoeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
