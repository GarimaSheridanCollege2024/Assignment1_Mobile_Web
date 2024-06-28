import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OntarioDetailPage } from './ontario-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OntarioDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OntarioDetailPageRoutingModule {}
