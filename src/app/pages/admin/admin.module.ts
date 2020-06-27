import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutSharedModule } from '../../shared/flex-layout.module';
import { MaterialSharedModule } from '../../shared/material.module';
import { ComponentsModule } from '../../components/components.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutSharedModule,
    MaterialSharedModule,
    AdminRoutingModule,
    HttpClientModule,
    ComponentsModule,
  ]
})
export class AdminModule { }
