import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(h => h.HomeModule) },
  { path: '', loadChildren: () => import('./pages/publication/publication.module').then(p => p.PublicationModule) },
  { path: '', loadChildren: () => import('./pages/admin/admin.module').then(a => a.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
