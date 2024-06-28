import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OntarioDetailPageRoutingModule } from './ontario-detail-routing.module';

import { OntarioDetailPage } from './ontario-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OntarioDetailPageRoutingModule
  ],
  declarations: [OntarioDetailPage]
})
export class OntarioDetailPageModule { }
