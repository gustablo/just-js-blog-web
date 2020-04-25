import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationComponent } from './publication.component';

const routes: Routes = [
  { path: 'publication/:title', component: PublicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }
