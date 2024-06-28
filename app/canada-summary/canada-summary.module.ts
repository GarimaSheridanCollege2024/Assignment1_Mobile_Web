import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CanadaSummaryPageRoutingModule } from './canada-summary-routing.module';
import { CanadaSummaryPage } from './canada-summary.page';
import { OntarioPageModule } from '../ontario/ontario.module'; // Ensure the import path is correct
import { CanadaCovidUpdatesComponent } from '../canada-covid-updates/canada-covid-updates.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanadaSummaryPageRoutingModule,
    OntarioPageModule // Import the module where OntarioCovidUpdatesComponent is declared
  ],
  declarations: [
    CanadaSummaryPage,
    CanadaCovidUpdatesComponent // Ensure the component is declared here
  ]
})
export class CanadaSummaryPageModule { }
