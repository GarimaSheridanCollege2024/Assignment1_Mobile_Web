import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'canada-summary',
    pathMatch: 'full'
  },
  {
    path: 'canada-summary',
    loadChildren: () => import('./canada-summary/canada-summary.module').then(m => m.CanadaSummaryPageModule)
  },
  {
    path: 'ontario',
    loadChildren: () => import('./ontario/ontario.module').then(m => m.OntarioPageModule)
  },
  {
    path: 'ontario-detail',
    loadChildren: () => import('./ontario-detail/ontario-detail.module').then(m => m.OntarioDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
