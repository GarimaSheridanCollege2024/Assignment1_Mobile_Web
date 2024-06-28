import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OntarioPage } from './ontario.page';

const routes: Routes = [
  {
    path: '',
    component: OntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OntarioPageRoutingModule { }
