import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FinStatComponent } from './fin-stat/fin-stat.component';
import {JoinComponent} from './join/join.component';
import { ContactComponent } from './contact/contact.component';
import {PaymentComponent} from './payment/payment.component';
import { JunckfurnitureremovalComponent } from './ehubservices/junckfurnitureremoval/junckfurnitureremoval.component';
import { LocalmoversComponent } from './ehubservices/localmovers/localmovers.component';
import { PianomovingComponent } from './ehubservices/pianomoving/pianomoving.component';
import { OfficebuildingmovingComponent } from './ehubservices/officebuildingmoving/officebuildingmoving.component';
import { DistancemovingComponent } from './ehubservices/distancemoving/distancemoving.component';
import { RecidencemovingComponent } from './ehubservices/recidencemoving/recidencemoving.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: FinStatComponent,
    children: [
      {
        path:'junkremoval',
        component: JunckfurnitureremovalComponent
      },
      {
        path:'localmovers',
        component: LocalmoversComponent
      },
      {
        path:'pianomoving',
        component: PianomovingComponent
      
      },
      {
        path:'buildingmoving',
        component: OfficebuildingmovingComponent 
      },
      {
        path: 'distancemoving',
        component: DistancemovingComponent
      },

      {
        path: 'residencemoving',
        component: RecidencemovingComponent
      }
    ]
  },
  {
    path:'resources',
    component: JoinComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
