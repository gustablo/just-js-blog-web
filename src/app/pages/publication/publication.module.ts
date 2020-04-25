import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutSharedModule } from '../../shared/flex-layout.module';
import { MaterialSharedModule } from '../../shared/material.module';
import { ComponentsModule } from '../../components/components.module';
import { PublicationRoutingModule } from './publication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutSharedModule,
    MaterialSharedModule,
    PublicationRoutingModule,
    ComponentsModule,
  ]
})
export class PublicationModule { }
