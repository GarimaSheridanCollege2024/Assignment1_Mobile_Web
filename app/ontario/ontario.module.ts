import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OntarioPageRoutingModule } from './ontario-routing.module';

import { OntarioPage } from './ontario.page';
import { OntarioCovidUpdatesComponent } from '../ontario-covid-updates/ontario-covid-updates.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OntarioPageRoutingModule
  ],
  declarations: [
    OntarioPage,
    OntarioCovidUpdatesComponent
  ],
  exports: [
    OntarioCovidUpdatesComponent
  ]
})
export class OntarioPageModule { }
